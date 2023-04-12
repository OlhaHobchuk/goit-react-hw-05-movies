import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import { Loader } from '../../components/Loader/Loader';
import { fetchMoviesByWord } from '../../components/Requests';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { SearchResults } from '../../components/SearchResults/SearchResults';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }
    setLoading(true);
    fetchMoviesByWord(query)
      .then(moviesArray => {
        if (moviesArray.length === 0) {
          Notiflix.Notify.info(
            'Sorry, there are no movies matching your search query. Please try again.'
          );
          return;
        }
        const normalizedArray = moviesArray.map(({ title, id }) => ({
          title,
          id,
        }));
        setMovies(normalizedArray);
      })
      .catch(error => onError(error))
      .finally(() => setLoading(false));
  }, [query]);

  const handleSubmit = search => {
    setSearchParams({ query: search });
    setMovies([]);
  };

  const onError = error => {
    Notiflix.Notify.warning(
      'Sorry, there are no movies matching your search query. Please try again.'
    );
  };
  return (
    <>
      <SearchForm onSubmit={handleSubmit} setSearchParams={setSearchParams} />
      <SearchResults movies={movies} />
      {loading && <Loader />}
    </>
  );
};

export default Movies;
