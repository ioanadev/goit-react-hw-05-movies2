import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/request';
import { Error } from './Error';
import { Loading } from './Loading';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  console.log('Movie id', movieId);

  useEffect(() => {
    setIsLoading(true);
    fetchMovieReviews(movieId)
      .then(res => {
        console.log('raspuns cast:', res);
        setReviews(res.results);
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
  if (reviews.length === 0) {
    return <h5>No reviews available for this movie.</h5>;
  }
  console.log('Reviews:', reviews);
  return (
    <>
      {isLoading && <Loading />}
      {hasError && <Error />}
      <div>
        <h1>Reviews:</h1>
      </div>
      <ul>
        {reviews.map(review => (
          <li
            className=" shadow-sm p-3 mb-5 bg-body-tertiary rounded"
            key={review.id}
          >
            <h5 className="p-2">Author: {review.author}</h5>
            <p>Content: {review.content}</p>
          </li>
        ))}
        <br />
        <br />
      </ul>
    </>
  );
};
export default Reviews;
