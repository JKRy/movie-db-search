import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('Footer', () => {
  test('should render Footer without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.type()).toEqual('footer');
  });
});
