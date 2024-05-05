
import React from 'react';
import { Movie } from '../types/Movie';

interface MovieModalProps {
   movie: Movie | null;
   onClose: () => void;
 } 

 const MovieModal = ({ movie, onClose }: MovieModalProps) => {
     if (!movie) return null;
     return (
       <div className='movie_result'>
         <h2>{movie.title}</h2>
         <p>Director: {movie.director}</p>
         <p>Producer: {movie.producer}</p>
         <p>{movie.opening_crawl}</p>
         <button onClick={onClose}>Close</button>
       </div>
     );
   };
   
export default MovieModal;
