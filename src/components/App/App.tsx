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
  const [searchTerm, setSearchTerm] = useState<string>('kate');

  useEffect(() => {
    console.log('useEffect called', searchTerm);
    try {
      setIsLoading(true);

      const fetchData = async () => {
        const results = await getSearchResults(searchTerm);
        setResults(results.data.results);
      };

      fetchData();

      setIsLoading(false);

    } catch (e) {
      setHasError(true);
      console.error(e);
    }
  }, [searchTerm]);

  function handleSubmit(value: string) {
    setSearchTerm(value);
  }

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
