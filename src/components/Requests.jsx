const API_KEY = '0133cbd46d7aed15aba1a7c05914842d';

export const fetchTrendingMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
  )
    .then(response => response.json())
    .then(data => data.results);
};

export const fetchMoviesByWord = search => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`
  )
    .then(response => response.json())
    .then(data => data.results);
};

export const fetchMovieInfo = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  ).then(response => response.json());
};

export const fetchMovieCast = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
  )
    .then(response => response.json())
    .then(data => data.cast);
};

export const fetchMovieReviews = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
  )
    .then(response => response.json())
    .then(data => data.results);
};
