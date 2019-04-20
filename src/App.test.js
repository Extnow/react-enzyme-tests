import React from 'react';
import App from './App';

import { shallow, mount } from './enzyme.config';

// testing with styled-components
import { Header } from './App';

/*
 * shallow - отрисовывает только сам компонент без дочерних
 * mount - тест mount/unmount лайфсайкл методов
 * configure({ adapter: new Adapter() }); - дефолтная конфигурация enzyme
 */

describe('<App /> shallow rendering', () => {
  const wrapper = shallow(<App />);

  it('should contain 1 p element', () => {
    expect(wrapper.find('p').length).toBe(1);
  });

  it('should contain 1 element with class App-intro', () => {
    expect(wrapper.find('.App-intro').exists()).toBe(true);
  });

  it('element with class App-header should contain 3 children elements', () => {
    expect(wrapper.find('.App-header').children().length).toBe(3);
  });

  it('tag header should has class App-header', () => {
    expect(wrapper.find(Header).hasClass('App-header')).toBe(true);
  });

  it('tag a should contain text "Learn React"', () => {
    expect(wrapper.find('a').text()).toBe('Learn React');
  });

  it('updates className with new State', () => {
    expect(wrapper.find('.blue').length).toBe(1);
    expect(wrapper.find('.red').length).toBe(0);
    wrapper.setState({ mainColor: 'red' });
    expect(wrapper.find('.blue').length).toBe(0);
    expect(wrapper.find('.red').length).toBe(1);
  });

  it('on button click changes p text', () => {
    const button = wrapper.find('button');
    expect(wrapper.find('.button-state').text()).toBe('NO');
    button.simulate('click');
    expect(wrapper.find('.button-state').text()).toBe('YES');
  });

  it('on input change, title changes text', () => {
    const input = wrapper.find('input');
    expect(wrapper.find('h1').text()).toBe('');
    input.simulate('change', { currentTarget: { value: 'New title' } });
    expect(wrapper.find('h1').text()).toBe('New title');
  });

  it('calls componentDidMount', () => {
    jest.spyOn(App.prototype, 'componentDidMount');
    expect(wrapper.find('.lifecycle').text()).toBe('componentDidMount');
  });

  it('handleString function return correctly', () => {
    const trueReturn = wrapper.instance().handleStringHello('hello');
    expect(trueReturn).toBe(true);
    const falseReturn = wrapper.instance().handleStringHello('');
    expect(falseReturn).toBe(false);
  });
});

describe('<App /> mount rendering', () => {
  const wrapper = mount(<App />);

  it('h1 contains correct text', () => {
    expect(wrapper.find('p').length).toBe(1);
    wrapper.unmount();
    expect(wrapper.find('p').length).toBe(0);
  });
});
