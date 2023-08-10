import { Link } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  return (
    <>
      {movies.length > 0 &&
        movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
    </>
  );
};
