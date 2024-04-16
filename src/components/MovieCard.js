import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <h3>{movie.movie_name}</h3>
      <p>Year: {movie.movie_year}</p>
      <p>Rating: {movie.movie_rating}</p>
      <p>Votes: {movie.user_votes}</p>
    </div>
  );
};

export default MovieCard;