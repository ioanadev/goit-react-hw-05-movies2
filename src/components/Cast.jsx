import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/request';
import { Loading } from './Loading';
import { Error } from './Error';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  console.log('Movie id', movieId);

  useEffect(() => {
    setIsLoading(true);
    fetchMovieCredits(movieId)
      .then(res => {
        console.log('raspuns cast:', res);
        setCast(res.cast);
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
  console.log('Cast:', cast);
  return (
    <>
      {isLoading && <Loading />}
      {hasError && <Error />}
      <div>
        <h1>Cast:</h1>
      </div>
      <ul>
        {cast.map(actor => (
          <>
            <li className="shadow-lg w-25 p-5 text-center" key={actor.id}>
              {actor.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={actor.name}
                />
              ) : (
                []
              )}
              {/* <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
            /> */}
              <h4 className="p-2">Name: {actor.name}</h4>
              <h6>Character: {actor.character}</h6>
            </li>
            <br />
            <br />
          </>
        ))}
      </ul>
    </>
  );
};
