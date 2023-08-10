import { fetchMovieTrending } from 'services/request';
import { MovieList } from 'components/MovieList';
import { Loading } from 'components/Loading';
import { Error } from 'components/Error';
import { useState, useEffect } from 'react';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setISLading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetchMovieTrending()
      .then(resp => {
        console.log(resp.results);
        setMovies(resp.results);
        setISLading(false);
        setHasError(false);
      })
      .catch(error => {
        console.log(error);
        setHasError(true);
      })
      .finally(() => {
        setISLading(false);
      });
  }, []);
  return (
    <div>
      {isLoading && <Loading />}
      {hasError && <Error />}
      <h1 className="p-2">Trending today</h1>
      <ul>{movies.length > 0 && <MovieList movies={movies} />}</ul>
    </div>
  );
};
