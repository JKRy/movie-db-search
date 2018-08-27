import React from 'react';
import { shallow } from 'enzyme';

import ResultListItem, { MediaType } from './ResultListItem';

const props = {
  result: {
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
  },
};

const personProps = {
  result: {
    popularity: 10.211,
    media_type: MediaType.Person,
    id: 10859,
    profile_path: '\/h1co81QaT2nJA41Sb7eZwmWl1L2.jpg',
    name: 'Ryan Reynolds',
  },
};

describe('ResultListItem', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ResultListItem {...props} />);
  });

  test('should render ResultListItem without crashing', () => {
    expect(wrapper.hasClass('result-list-item')).toBeTruthy();
  });

  test('should render an image if the result is not a person', () => {
    expect(wrapper.find('.result-list-item-image')).toBeTruthy();
  });
});
