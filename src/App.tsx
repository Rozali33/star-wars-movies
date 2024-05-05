import React from 'react';
import MovieList from './components/MovieList';
import './App.css'

const App = () => {
  return (
    <div>
      <h1 className='title'>Star Wars Movies</h1>
      <MovieList />
    </div>
  );
};

export default App;
