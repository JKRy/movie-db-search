import React, { Component } from 'react';

import styles from './SearchBar.scss';

interface Props {
  onSubmit: (searchTerm: string) => void;
}

interface State {
  searchTerm: string;
}

export default class SearchBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { searchTerm: '' };
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: searchTerm } = e.target;
    this.setState({ searchTerm });
  }

  handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { searchTerm } = this.state;

    onSubmit(searchTerm);
  }

  render() {
    return (
      <form
        className={styles['search-bar']}
        onSubmit={this.handleSubmit}
      >
        <input
          value={this.state.searchTerm}
          onChange={this.handleInputChange}
          placeholder="Search for a movie, person or tv show"
        />
        <button
          type="submit"
        >
          Search
        </button>
      </form>
    );
  }
}
