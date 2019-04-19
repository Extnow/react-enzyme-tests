import React from 'react';
import App from './App';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// testing with styled-components
import { Header } from './App';

/*
 * shallow - отрисовывает только сам компонент без дочерних
 * configure({ adapter: new Adapter() }); - дефолтная конфигурация enzyme
 */

configure({ adapter: new Adapter() });

describe('<App />', () => {
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
});
