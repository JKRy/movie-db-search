import React, { useState } from 'react';

import styles from './SearchBar.scss';

interface Props {
  onSubmit: (searchTerm: string) => void;
}

const SearchBar = ({ onSubmit }: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <form
      className={styles['search-bar']}
      onSubmit={() => onSubmit(searchTerm)}
    >
      <input
        className={styles['search-bar-input']}
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
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
