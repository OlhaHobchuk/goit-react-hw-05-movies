import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './TrendingMoviesList.module.css';

export const TrendingMoviesList = ({ trendingMovies }) => {
  const location = useLocation();
  return (
    <ul className={css.trendyMovieList}>
      {trendingMovies.map(({ id, title }) => (
        <li key={id}>
          <Link
            className={css.trendyMovieLink}
            to={`movies/${id}`}
            state={{ from: location }}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

TrendingMoviesList.propTypes = {
  trendingMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
