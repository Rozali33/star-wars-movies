
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import MovieModal from './MovieModal';
import { Movie } from '../types/Movie';

const MovieList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get('https://swapi.dev/api/films');
      setMovies(response.data.results);
    };

    fetchMovies();
  }, []);

  const handleCardClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleModalClose = () => {
    setSelectedMovie(null);
  };

  return (
    <div className='movie-list'>
      {movies.map((movie) => (
        <MovieCard key={movie.episode_id} movie={movie} onClick={handleCardClick} />
      ))}
      <MovieModal movie={selectedMovie} onClose={handleModalClose} />
    </div>
  );
};

export default MovieList;