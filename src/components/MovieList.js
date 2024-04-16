import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard key={`${movie.movie_name}-${movie.movie_year}`} movie={movie} />
        ))
      ) : null}
    </div>
  );
};

export default MovieList;