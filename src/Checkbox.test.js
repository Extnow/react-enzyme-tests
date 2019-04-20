import React from 'react';

import App from './App';
import { Checkbox } from './Checkbox';
import { shallow } from './enzyme.config';

describe('<Checkbox />', () => {
  it('Получать уведомления на электронную почту чекнуто (относительно App)', () => {
    const wrapper = shallow(<App />);
    const promotionInput = wrapper.find('Checkbox');
    expect(promotionInput.props().checked).toBe(true);
  });
});

describe('<Checkbox />', () => {
  it('Получать уведомления на электронную почту чекнуто (относительно самого компонента)', () => {
    const wrapper = shallow(<Checkbox checked={true} />);
    const input = wrapper.find('input');
    expect(input.props().checked).toBe(true);
  });
});
