import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/api';
import './Reviews.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div className="reviews-container">
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        <div className="review-list">
          {reviews.map(review => (
            <div key={review.id} className="review-item">
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
};

export default Reviews;
