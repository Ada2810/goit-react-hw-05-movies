import React, { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../services/api';
import MovieList from '../components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(setMovies);
  }, []);

  return (
    <div>
      <h1 className="trending-title">Trending Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
