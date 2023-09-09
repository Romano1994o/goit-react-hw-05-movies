import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from 'API/API';
import { Loader } from './../Loader/Loader';
import { Notification } from './../Notification/Notification';
import {
  Container,
  ReviewsItem,
  ReviewsList,
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); 
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchReviews() {
      try {
        setIsLoading(true);
        const { results } = await fetchReviewsById(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error);
        setError(error); 
      } finally {
        setIsLoading(false);
      }
    }
    fetchReviews();
  }, [movieId]);

  return (
    <Container>
      {isLoading && <Loader />}
      {error && (
        
        <Notification
          id="error-notification"
          type="error"
          title="Error"
          content="Sorry, please try again"
          removeNotification={() => setError(null)}
        />
      )}
      {reviews.length > 0 ? (
        <ReviewsList>
          {reviews.map((review) => (
            <ReviewsItem key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </ReviewsItem>
          ))}
        </ReviewsList>
      ) : (
        
        <Notification
          id="no-reviews-notification"
          type="info"
          title="No Reviews"
          content="We don't have any reviews for this movie."
          removeNotification={() => {}}
        />
      )}
    </Container>
  );
};

export default Reviews;
