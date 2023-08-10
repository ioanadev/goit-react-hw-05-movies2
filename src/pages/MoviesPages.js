import { useState, useEffect } from 'react';
import { fetchMovieSearch } from 'services/request';
import { Error } from 'components/Error';
import { MovieList } from 'components/MovieList';
import './MoviesPage.css';

export const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    fetchMovieSearch(searchQuery)
      .then(resp => {
        console.log(resp.results);
        setMovies(resp.results);
        setHasError(false);
      })
      .catch(error => {
        console.log(error);
        setHasError(true);
      });
  }, [searchQuery]);

  const handleSearchSubmit = event => {
    event.preventDefault();
    setSearchQuery(event.target.value);
    console.loc(searchQuery);
  };
  return (
    <main>
      <div className="searchbar">
        <form className="form" onSubmit={handleSearchSubmit}>
          <button type="submit" className="search-button">
            <span className="search-button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            value={searchQuery}
            onChange={event => setSearchQuery(event.target.value)}
          />
        </form>
      </div>

      {hasError && <Error />}
      <ul>{searchQuery !== 0 && <MovieList movies={movies} />}</ul>
    </main>
  );
};
