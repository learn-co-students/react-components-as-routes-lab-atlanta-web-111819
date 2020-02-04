import React from 'react';
import { movies } from '../data';

const renderMovies=()=>{
  return movies.map(movie => {
    return (
      <div>
        <h4>{movie.title}</h4>
        <p>Time: {movie.time} min</p>
        <ul>
          {movie.genres.map(genre => <li>{genre}</li>)}
        </ul>
      </div>
    )
  })
}

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

export default Movies;
