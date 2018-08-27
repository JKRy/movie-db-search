import React, { Component } from 'react';

import SearchBar from '../SearchBar';
import ResultList from '../ResultList';

import { getSearchResults } from '../../utils/api';

import styles from './App.scss';

interface State {
  results: [];
  isLoading: boolean;
  hasError: boolean;
}

class App extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      results: [],
      isLoading: false,
      hasError: false,
    };
  }

  searchForResults = (searchTerm: string) => {
    this.setState({ isLoading: true });

    getSearchResults(searchTerm)
      .then((response) => {
        const { results } = response.data;
        this.setState({ results, isLoading: false });
      })
      .catch((e) => {
        this.setState({ isLoading: false, hasError: true });
        console.error(e);
      });
  }

  render() {
    const { hasError, isLoading, results } = this.state;

    return (
      <div className={styles.app}>
        <SearchBar onSubmit={this.searchForResults} />
        {
          isLoading
          ? <div>Loading...</div>
          : <ResultList results={results} />
        }
        {
          hasError && <div>An error has occured...</div>
        }
      </div>
    );
  }
}

export default App;
