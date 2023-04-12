import { useState } from 'react';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import css from './SearchForm.module.css';

export const SearchForm = ({ onSubmit }) => {
  const [keyWord, setKeyWord] = useState('');

  const handleSearchChange = event => {
    setKeyWord(event.currentTarget.value.toLowerCase());
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    const query = keyWord.trim().toLocaleLowerCase();
    if (query === '') {
      Notiflix.Notify.info('Please enter something');
      return;
    }

    onSubmit(query);

    setKeyWord('');
  };

  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <input
        name="keyWord"
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
  onSubmit: PropTypes.func.isRequired,
};
