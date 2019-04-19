import React from 'react';
import { Link } from './Link';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Link />', () => {
  it('Link component accepts address prop', () => {
    const wrapper = shallow(<Link address="www.google.com" />);
    // instance only for calss Components
    expect(wrapper.instance().props.address).toBe('www.google.com');
  });

  it('a tag node renders href correctly', () => {
    const wrapper = shallow(<Link address="www.google.com" />);
    expect(wrapper.props().href).toBe('www.google.com');
  });

  it('return null with true hide prop', () => {
    const wrapper = shallow(<Link hide={false} address="www.google.com" />);
    expect(wrapper.find('a').length).toBe(1);
    wrapper.setProps({ hide: true });
    expect(wrapper.get(0)).toBeNull();
  });
});
