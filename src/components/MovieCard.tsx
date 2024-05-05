
import React from 'react';
import { Movie } from '../types/Movie';

interface MovieCardProps {
    movie: Movie;
    onClick: (movie: Movie) => void;
  }
  
  const MovieCard = ({ movie, onClick }: MovieCardProps) => {
    return (
      <div className='movie_card' onClick={() => onClick(movie)}>
        <h2>{movie.title}</h2>
        <p>Release Date: {movie.release_date}</p>
      </div>
    );
  };
  
export default MovieCard;

