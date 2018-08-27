import React from 'react';
import { shallow } from 'enzyme';

import SearchBar from './SearchBar';

const props = {
  onSubmit: jest.fn(),
};

describe('SearchBar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchBar {...props} />);
  });

  test('should render SearchBar without crashing', () => {
    expect(wrapper.hasClass('search-bar')).toBeTruthy();
  });

  test('should update searchTerm on change', () => {
    const e = { target: { value: 'testTerm' } };
    wrapper.find('input').simulate('change', e);

    expect(wrapper.state()).toEqual({ searchTerm: 'testTerm' });
  });

  test('should call onSubmit when the form is submitted', () => {
    const e = { preventDefault: () => {} };
    wrapper.setState({ searchTerm: 'testTerm' });
    wrapper.find('form').simulate('submit', e);

    expect(props.onSubmit).toHaveBeenCalledWith('testTerm');
  });

  test('should call onSubmit when the search button is clicked', () => {
    const e = { preventDefault: () => {} };
    wrapper.setState({ searchTerm: 'testTerm' });
    wrapper.find('button').simulate('click', e);

    expect(props.onSubmit).toHaveBeenCalledWith('testTerm');
  });
});
