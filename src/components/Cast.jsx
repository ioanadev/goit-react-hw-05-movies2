import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from 'services/request';
//import { Loading } from './Loading';
import { Error } from './Error';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  //const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  console.log('Movie id', movieId);

  useEffect(() => {
    // setIsLoading(true);
    fetchMovieCredits(movieId)
      .then(res => {
        console.log('raspuns cast:', res);
        setCast(res.cast);
        setHasError(false);
      })
      .catch(error => {
        console.log(error);
        setHasError(true);
        // setIsLoading(false);
      });
  }, [movieId]);
  console.log('Cast:', cast);

  const defaultPicture =
    'https://w7.pngwing.com/pngs/141/425/png-transparent-user-profile-computer-icons-avatar-profile-s-free-angle-rectangle-profile-cliparts-free-thumbnail.png ';
  return (
    <>
      {hasError && <Error />}
      <div>
        <h1>Cast:</h1>
      </div>
      <ul>
        {cast.map(actor => (
          <>
            <li className="shadow-lg w-25 text-center" key={actor.id}>
              <img
                width={200}
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                    : defaultPicture
                }
                alt={actor.name}
              />

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
export default Cast;
