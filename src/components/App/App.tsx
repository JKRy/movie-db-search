import React, { Component } from 'react';

import SearchBar from '../SearchBar';

import styles from './App.scss';

export default class App extends Component {

  searchForResults = (searchTerm: string) => {
    console.log({ searchTerm });
  }

  render() {
    return (
      <div className={styles.app}>
        <SearchBar onSubmit={this.searchForResults} />
      </div>
    );
  }
}
