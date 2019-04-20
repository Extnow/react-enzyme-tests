import React from 'react';

import { Checkbox } from './index';
import { shallow } from '../enzyme.config';

describe('<Checkbox />', () => {
  it('Инпут чекнут', () => {
    const wrapper = shallow(<Checkbox checked={true} />);
    const input = wrapper.find('input');
    expect(input.props().checked).toBe(true);
  });
});
