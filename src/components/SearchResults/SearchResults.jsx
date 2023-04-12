import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './SearchResults.module.css';

export const SearchResults = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      {movies.length > 0 && (
        <div className={css.searchMovieContainer}>
          <h2 className={css.searchMovieTitle}>Search results</h2>
          <ul className={css.searchMovieList}>
            {movies.map(({ id, title }) => (
              <li className={css.searchMovieItem} key={id}>
                <Link
                  className={css.searchMovieLink}
                  to={`/movies/${id}`}
                  state={{ from: location }}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

SearchResults.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
