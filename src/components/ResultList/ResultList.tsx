import React from 'react';

import ResultListItem from '../ResultListItem';

import styles from './ResultList.scss';

interface Props {
  results: [];
}

const ResultList = ({ results }: Props) => (
  <div className={styles['result-list']}>
    {
      results.map((result: any) => <ResultListItem key={result.id} result={result} />)
    }
  </div>
);

export default ResultList;
