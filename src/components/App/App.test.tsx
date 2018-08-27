import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import SearchBar from '../SearchBar';

describe('App', () => {
  test('should render App without crashing', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.type()).toEqual('div');
  });

  test('should render the SearchBar component', () => {
    const wrapper = shallow(<SearchBar onSubmit={jest.fn()}/>);

    expect(wrapper.find(SearchBar)).toBeTruthy;
  });
});
