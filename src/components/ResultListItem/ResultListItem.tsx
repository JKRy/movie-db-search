import React from 'react';

import styles from './ResultListItem.scss';

export enum MediaType {
  Person = 'person',
}

interface Props {
  result: any;
}

const ResultListItem = ({ result: { name, title, poster_path, media_type, overview } }: Props) => (
  <div
    className={styles['result-list-item']}
  >
    {
      media_type !== MediaType.Person &&
      <img
        className={styles['result-list-item-image']}
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`}
        alt={name || title}
      />
    }
    <div className={styles['result-list-item-info']}>
      <h3 className={styles['result-list-item-name']}>{name || title}</h3>
      <div className={styles['result-list-item-overview']}>{overview}</div>
    </div>
  </div>
);

export default ResultListItem;
