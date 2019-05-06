import React, { useState, useEffect } from 'react';

import Header from '../Header';
import SearchBar from '../SearchBar';
import ResultList from '../ResultList';
import Footer from '../Footer';

import { getSearchResults } from '../../utils/api';

import styles from './App.scss';

const App = () => {
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<[]>([]);

  const handleSubmit = async (searchTerm: string) => {
    try {
      setIsLoading(true);
      const results = await getSearchResults(searchTerm);
      setResults(results.data.results);
    } catch (e) {
      setHasError(true);
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.app}>
      <Header />
      <SearchBar onSubmit={handleSubmit} />
      {
        isLoading
          ? <div>Loading...</div>
          : <ResultList results={results} />
      }
      {
        hasError && <div>An error has occured...</div>
      }
      <Footer />
    </div>
  );
}

export default App;
