import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import { Loader } from '../Loader/Loader';
import { ReviewsList } from '../ReviewsList/ReviewsList';
import { fetchMovieReviews } from '../Requests';
import css from './Reviews.module.css';

const Reviews = () => {
  const [loading, setLoading] = useState(false);
  const [reviews, setRewiews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchMovieReviews(movieId)
      .then(response => {
        const normalizedArray = response.map(({ id, author, content }) => ({
          id,
          author,
          content,
        }));
        setRewiews(normalizedArray);
      })
      .catch(error => onError(error))
      .finally(() => setLoading(false));
  }, [movieId]);

  const onError = error => {
    Notiflix.Notify.warning('Sorry, there is something wrong!');
  };

  return (
    <>
      {loading && <Loader />}
      <div className={css.reviewsContainer}>
        <ReviewsList reviews={reviews} />
      </div>
    </>
  );
};

export default Reviews;
