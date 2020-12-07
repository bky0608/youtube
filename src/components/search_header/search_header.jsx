import React, { memo, useRef } from 'react';
import styles from './search_header.module.scss';

const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input //
        ref={inputRef}
        type="search"
        className={styles.input}
        placeholder="Search..."
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img //
          src="/images/search.png"
          alt="search"
          className={styles.buttonImg}
        />
      </button>
    </header>
  );
});

export default SearchHeader;
