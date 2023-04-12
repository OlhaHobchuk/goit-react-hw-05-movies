import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Outlet, Link } from 'react-router-dom';
import Notiflix from 'notiflix';
import { MainMovieInfo } from '../../components/MainMovieInfo/MainMovieInfo';
import { AdditionalMovieInfo } from '../../components/AdditionalMovieInfo/AdditionalMovieInfo';
import { Loader } from '../../components/Loader/Loader';
import { fetchMovieInfo } from '../../components/Requests';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    fetchMovieInfo(movieId)
      .then(response => {
        setMovieDetails(response);
      })
      .catch(error => onError(error))
      .finally(() => setLoading(false));
  }, [movieId]);

  const onError = error => {
    Notiflix.Notify.warning('Sorry, there is something wrong!');
  };

  const { poster_path, title, vote_average, overview, genres } = movieDetails;
  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      {location.state ? (
        <Link className={css.backLink} to={backLinkHref}>
          Go back
        </Link>
      ) : (
        <Link className={css.backLink} to="/">
          Go back
        </Link>
      )}
      {loading && <Loader />}
      <MainMovieInfo
        poster_path={poster_path}
        title={title}
        vote_average={vote_average}
        overview={overview}
        genres={genres}
      />
      <div className={css.additionalContainer}>
        <AdditionalMovieInfo />
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MovieDetails;
