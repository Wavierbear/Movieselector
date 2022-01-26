import React from "react";
import MovieItem from "./MovieItem";


const MovieList = ({ movies, onMovieSelect }) => {
  //henter ut props.movies
  // Laster inn liste
  const renderList = movies.map((movie) => {
    return (
      <ul className="list-group">
        <MovieItem key={movie.id} movie={movie} onMovieSelect={onMovieSelect} />
      </ul>
    );
  });

  return <div>{renderList}</div>;
};

export default MovieList;
