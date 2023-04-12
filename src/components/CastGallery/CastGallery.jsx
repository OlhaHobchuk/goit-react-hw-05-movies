import PropTypes from 'prop-types';
import css from './CastGallery.module.css';
import NotFound from '../../images/NotFound.png';

export const CastGallery = ({ credits }) => {
  return (
    <>
      <ul className={css.castList}>
        {credits &&
          credits.map(({ id, profile_path, name, character }) => {
            return (
              <li className={css.castItem} key={id}>
                <img
                  className={css.castImage}
                  width="100"
                  src={
                    profile_path === null
                      ? NotFound
                      : `https://image.tmdb.org/t/p/w500/${profile_path}`
                  }
                  alt={name}
                />
                <p className={css.castName}>{name}</p>
                <p className={css.castCharacter}>Character: {character}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
};

CastGallery.propTypes = {
  credits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ).isRequired,
};
