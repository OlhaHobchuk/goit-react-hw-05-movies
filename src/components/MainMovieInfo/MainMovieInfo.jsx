import PropTypes from 'prop-types';
import NotFound from '../../images/NotFound.png';
import css from './MainMovieInfo.module.css';

export const MainMovieInfo = ({
  poster_path,
  title,
  vote_average,
  overview,
  genres,
}) => {
  return (
    <>
      <div className={css.mainMovieContainer}>
        <img
          className={css.mainMovieInfoImage}
          src={
            poster_path === null
              ? NotFound
              : `https://image.tmdb.org/t/p/w500/${poster_path}`
          }
          alt={title}
          width="300"
        />

        <div className={css.mainMovieInfoContainer}>
          <h3 className={css.mainMovieInfoTitle}>{title}</h3>
          <p className={css.mainMovieInfoScore}>
            User Score: {Math.round(vote_average * 10)}%
          </p>
          <h4 className={css.mainMovieInfoSubTitle}>Overview</h4>
          <p className={css.mainMovieInfoOverview}>{overview}</p>
          <h4 className={css.mainMovieInfoSubTitle}>Genres</h4>
          <ul className={css.mainMovieInfoList}>
            {genres?.map(({ id, name }) => (
              <li className={css.mainMovieInfoItem} key={id}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

MainMovieInfo.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.shape()),
};
