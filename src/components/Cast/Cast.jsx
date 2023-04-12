import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import { Loader } from '../Loader/Loader';
import { CastGallery } from '../CastGallery/CastGallery';
import { fetchMovieCast } from '../Requests';
import css from './Cast.module.css';

const Cast = () => {
  const [loading, setLoading] = useState(false);
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchMovieCast(movieId)
      .then(response => {
        const normalizedArray = response.map(
          ({ id, profile_path, name, character }) => ({
            id,
            profile_path,
            name,
            character,
          })
        );
        setCredits(normalizedArray);
      })
      .catch(error => onError(error))
      .finally(() => setLoading(false));
  }, [movieId]);

  const onError = error => {
    Notiflix.Notify.warning('Sorry, there is something wrong!');
  };

  return (
    <>
      {loading && <Loader />}
      <div className={css.castContainer}>
        <CastGallery credits={credits} />
      </div>
    </>
  );
};

export default Cast;
