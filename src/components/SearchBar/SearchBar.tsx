import React, { useState } from 'react';

import styles from './SearchBar.scss';

interface Props {
  onSubmit: (searchTerm: string) => void;
}

const SearchBar = ({ onSubmit }: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    onSubmit(searchTerm);
  }

  return (
    <form
      className={styles['search-bar']}
      onSubmit={handleSubmit}
    >
      <input
        className={styles['search-bar-input']}
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search for a movie, person or tv show"
      />
      <button
        className={styles['search-bar-button']}
        type="submit"
      >
        Search
        </button>
    </form>
  );
}

export default SearchBar;
