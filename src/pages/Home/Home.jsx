import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import { TrendingMoviesList } from 'components/TrendingMoviesList/TrendingMoviesList';
import { Loader } from '../../components/Loader/Loader';
import { fetchTrendingMovies } from '../../components/Requests';
import css from './Home.module.css';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchTrendingMovies()
      .then(array => {
        const normalizedArray = array.map(({ title, id }) => ({ title, id }));

        setTrendingMovies(normalizedArray);
      })
      .catch(error => onError(error))
      .finally(() => setLoading(false));
  }, []);

  const onError = error => {
    Notiflix.Notify.warning('Sorry, there is something wrong!');
  };

  return (
    <div className={css.homeContainer}>
      <h2 className={css.homeTitle}>Trending today</h2>
      {loading && <Loader />}
      <TrendingMoviesList trendingMovies={trendingMovies} />
    </div>
  );
};

export default Home;
