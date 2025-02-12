import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from '../MovieItem/MovieItem';
import './MovieList.css';

const MovieList = ({ movies }) => {
  return (
    <ul className="movie-list">
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
