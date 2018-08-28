import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('Header', () => {
  test('should render Header without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.type()).toEqual('header');
  });

  test('should render a logo image', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img')).toBeDefined();
  });
});
