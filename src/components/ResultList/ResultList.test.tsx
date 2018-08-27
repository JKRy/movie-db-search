import React from 'react';
import { shallow } from 'enzyme';

import ResultList from './ResultList';

const props = {
  results: [{
    vote_average: 8,
    vote_count: 6883,
    id: 857,
    video: false,
    media_type: 'movie',
    title: 'Saving Private Ryan',
    popularity: 18.82,
    poster_path: '\/miDoEMlYDJhOCvxlzI0wZqBs9Yt.jpg',
    original_language: 'en',
    original_title: 'Saving Private Ryan',
    genre_ids: [
      18,
      36,
      10752,
    ],
    backdrop_path: '\/gRtLcCQOpYUI9ThdVzi4VUP8QO3.jpg',
    adult: false,
    overview: 'As U.S. troops storm the beaches of Normandy, three brothers lie dead.',
    release_date: '1998-07-24',
  }],
};

describe('ResultList', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ResultList {...props} />);
  });

  test('should render ResultList without crashing', () => {
    expect(wrapper.hasClass('result-list')).toBeTruthy();
  });

  test('should render ResultListItems as children', () => {
    expect(wrapper.children()).toHaveLength(props.results.length);
  });
});
