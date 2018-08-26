import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  test('should render App without crashing', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.type()).toEqual('div');
  });
});