import React from "react";
import { movies } from "../data";

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => (
        <div>
          <h4>Title : {movie.title}</h4>
          <h4>Time : {movie.time}</h4>
          <h4>Genres : {movie.genres}</h4>
        </div>
      ))}
    </div>
  );
};

export default Movies;
