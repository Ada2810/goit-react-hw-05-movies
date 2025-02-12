import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../services/api';
import './Cast.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <div className="cast-container">
      <h2>Cast</h2>
      <div className="cast-grid">
        {cast.map(actor => (
          <div key={actor.id} className="cast-item">
            <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
            <p>{actor.name}</p>
            <p><small>as {actor.character}</small></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cast;
