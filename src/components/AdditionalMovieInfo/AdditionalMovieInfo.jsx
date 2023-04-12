import { Link, useLocation } from 'react-router-dom';
import css from './AdditionalMovieInfo.module.css';

export const AdditionalMovieInfo = () => {
  const location = useLocation();

  return (
    <div className={css.linkContainer}>
      <h3 className={css.additionalMovieInfoTitle}>Additional information</h3>
      <ul className={css.additionalMovieInfoList}>
        <li className={css.additionalMovieInfoItem}>
          <Link
            className={css.additionalMovieInfoLink}
            to="cast"
            state={{ from: location.state?.from } ?? '/'}
          >
            Cast
          </Link>
        </li>
        <li className={css.additionalMovieInfoItem}>
          <Link
            className={css.additionalMovieInfoLink}
            to="reviews"
            state={{ from: location.state?.from } ?? '/'}
          >
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
};
