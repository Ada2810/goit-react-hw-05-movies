import React, { useState } from 'react';
import { searchMovies } from '../services/api';
import MovieList from '../components/MovieList/MovieList';
import SearchBar from '../components/SearchBar/SearchBar';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    const results = await searchMovies(query);
    setMovies(results);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
};

export default Movies;
