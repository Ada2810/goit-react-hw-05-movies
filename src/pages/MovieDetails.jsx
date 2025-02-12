import React, { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';
import { fetchMovieDetails } from '../services/api';
import './MovieDetails.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-details">
      {/* Container pentru butonul Go Back */}
      <div className="go-back-container">
        <button onClick={() => navigate(-1)} className="go-back-button">⬅ Go Back</button>
      </div>

      <h1>{movie.title}</h1>
      <div className="details-container">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className="movie-info">
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> {movie.vote_average}</p>
          <p><strong>Overview:</strong> {movie.overview}</p>
          <div className="links">
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetails;
