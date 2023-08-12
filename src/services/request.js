import { BASE_URL, API_KEY } from './api';

export const fetchMovieDetails = movieId => {
  return fetch(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`).then(res =>
    res.json()
  );
};

export const fetchMovieTrending = () => {
  return fetch(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`).then(res =>
    res.json()
  );
};

export const fetchMovieCredits = movieId => {
  return fetch(`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`).then(
    res => res.json()
  );
};
export const fetchMovieReviews = movieId => {
  return fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`).then(
    res => res.json()
  );
};

export const fetchMovieSearch = searchQuery => {
  return fetch(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}`
  ).then(res => res.json());
};
