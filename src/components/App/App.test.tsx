import React from 'react';
import { shallow } from 'enzyme';
import mockAxios from 'axios';

import { expectedApiResponse, expectedResults } from './testData';

import App from './App';
import SearchBar from '../SearchBar';
import Header from '../Header';
import Footer from '../Footer';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('should render App without crashing', () => {
    expect(wrapper.type()).toEqual('div');
  });

  test('should render the SearchBar component', () => {
    expect(wrapper.find(SearchBar)).toBeTruthy();
  });

  test('should render the Header component', () => {
    expect(wrapper.find(Header)).toBeTruthy();
  });

  test('should render the Footer component', () => {
    expect(wrapper.find(Footer)).toBeTruthy();
  });

  describe('searchForResults', () => {
    test('should populate state correctly on success', (done) => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve(expectedApiResponse),
      );

      wrapper.instance().searchForResults('ryan');

      setImmediate(() => {
        expect(mockAxios.get).toHaveBeenCalled();
        expect(wrapper.state()).toMatchObject({
          isLoading: false,
          hasError: false,
          results: expectedResults,
        });
        done();
      });
    });

    test('should populate state correctly on error', (done) => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.reject('error'),
      );

      wrapper.instance().searchForResults('ryan');

      setImmediate(() => {
        expect(mockAxios.get).toHaveBeenCalled();
        expect(wrapper.state()).toMatchObject({
          isLoading: false,
          hasError: true,
          results: [],
        });
        done();
      });
    });
  });
});
