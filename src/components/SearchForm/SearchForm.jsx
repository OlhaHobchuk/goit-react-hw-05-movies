import { useState } from 'react';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import css from './SearchForm.module.css';

export const SearchForm = ({ setSearchParams }) => {
  const [keyWord, setKeyWord] = useState('');

  const handleSearchChange = event => {
    setKeyWord(event.currentTarget.value.toLowerCase());
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    const query = keyWord.trim().toLocaleLowerCase();
    if (query === '') {
      setSearchParams({});
      Notiflix.Notify.info('Please enter something');
      return;
    }
    setSearchParams({ query: query });
    setKeyWord('');
  };

  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <input
        name="word"
        value={keyWord}
        className={css.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={handleSearchChange}
      />
      <button type="submit" className={css.searchFormButton}>
        Search
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  setSearchParams: PropTypes.func.isRequired,
};
