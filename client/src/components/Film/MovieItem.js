import React from "react";


const MovieItem = ({ movie, onMovieSelect }) => {
  return (
    <div
      className="m-1 list-group-item list-group-item-action list-group-item-danger"
      onClick={() => onMovieSelect(movie)} // kall ved klikk på knapp
    >
      <div>{movie.title}</div>
    </div> // filmens tittel
  );
};

export default MovieItem;
