import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import MovieList from '../components/MovieList';
import { searchMovies } from '../services/movieService';
import { useSearchParams, useNavigate } from 'react-router-dom';

const SearchResultsPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const searchQuery = searchParams.get('q') || '';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const searchResults = await searchMovies(searchQuery);
        setMovies(searchResults);
      } catch (error) {
        console.error('Error searching movies:', error);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  const handleSearch = async (newSearchQuery) => {
    setSearchParams({ q: newSearchQuery });
    navigate(`/search?q=${newSearchQuery}`);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      {movies.length === 0 && searchQuery.trim() === '' ? (
        <p>Please enter a search term.</p>
      ) : (
        <React.Fragment>
          {movies.length === 0 && (
            <p>No search results found.</p>
          )}
          <MovieList movies={movies} />
        </React.Fragment>
      )}
    </div>
  );
};

export default SearchResultsPage;
