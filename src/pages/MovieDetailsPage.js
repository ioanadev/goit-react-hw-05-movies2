import { Error } from 'components/Error';
import { Loading } from 'components/Loading';
import { fetchMovieDetails } from 'services/request';
import { useEffect, useState } from 'react';
import { NavLink, useParams, Outlet } from 'react-router-dom';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  console.log('Movie id', movieId);
  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchMovieDetails(movieId)
      .then(res => {
        console.log('raspuns:', res);
        setMovieData(res);
        setHasError(false);
      })
      .catch(error => {
        console.log(error);
        setHasError(true);
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  console.log('Movie data:', movieData);
  const genres =
    movieData && movieData.genres
      ? movieData.genres.map(genre => genre.name)
      : [];
  if (hasError) return <Error />;
  if (isLoading) return <Loading />;

  return (
    <main>
      <div className="d-flex">
        <div className="p-2 flex-fill">
          {movieData && (
            <img
              className="object-fit-fill border rounded"
              src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`}
              alt=""
            />
          )}
        </div>
        <div className="p-2 flex-fill">
          {movieData && (
            <h2 className="fs-2 p-2">
              {movieData.title} <span>({movieData.release_date})</span>
            </h2>
          )}
          <h4 className="p-2">Overview</h4>
          {movieData && (
            <p className="mb-auto p-2 w-75">{movieData.overview}</p>
          )}
          <h4 className="p-2">Genres</h4>
          <p className="mb-auto p-2">{genres.join(', ')}</p>
        </div>
      </div>

      <div className="bg-body-tertiary navbar-expand-lg navbar">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink
              className="nav-link link-color link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fs-4"
              to="cast"
            >
              Cast
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link link-color link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fs-4"
              to="reviews"
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </main>
  );
};
