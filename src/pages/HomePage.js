import React, { useState } from 'react';
import Header from '../components/Header';
import MovieList from '../components/MovieList';
import { searchMovies } from '../services/movieService';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (searchQuery) => {
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      navigate(`/search?q=${searchQuery}`);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;