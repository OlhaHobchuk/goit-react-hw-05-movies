import PropTypes from 'prop-types';
import css from './ReviewsList.module.css';

export const ReviewsList = ({ reviews }) => {
  return (
    <>
      <h3 className={css.reviewsTitle}>Reviews</h3>
      <div>
        {reviews.length === 0 ? (
          <p>We don't have any reviews for this movie.</p>
        ) : (
          <ul className={css.reviewsList}>
            {reviews.map(({ id, author, content }) => {
              return (
                <li className={css.reviewsItem} key={id}>
                  <p className={css.reviewsAuthor}>Author: {author}</p>
                  <p className={css.reviewsContent}>{content}</p>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};
