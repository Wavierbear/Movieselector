import React, { useEffect, useState } from "react";
import MoviePoster from "./MoviePoster";
import MovieList from "./MovieList";
import axios from "axios";
import LikeMovie from "./LikeMovie";
import Like from "@material-ui/icons/ThumbUp"; //bruk bootstrap icon?
import Dislike from "@material-ui/icons/ThumbDown";

//Et film objekt vises på skjermen
const MovieCard = () => {
  const [likedMovie, setLikedMovie] = useState([]);
  const [moviePoster, setMoviePoster] = useState([]);
  const [counter, setCounter] = useState(0);
  const [page, setPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState();

  //TODO Så preferanse til bruker blir brukt for film vises og ikke bare en generell lenke
  let url = `https://api.themoviedb.org/3/discover/movie?api_key=67eebbe4966f8175133a6a20f9206e7a`;

  const getMovies = () => {
    axios.get(url).then((res) => {
      console.log(
        res.data.results.map((movie) => {
          return movie.title + movie.vote_average;
        })
      );
      setMoviePoster(
        res.data.results.map((name) => {
          return <MoviePoster movie={name}></MoviePoster>;
        })
      );
    });
  };

  useEffect(() => {
    getMovies();
  }, []); //kjøres ved opprettelse av objektet, samme som didStateMount

  useEffect(() => {
    setSelectedMovie(moviePoster[counter]);
  }, [moviePoster]);

  useEffect(() => {
    setSelectedMovie(moviePoster[counter]);
    if (counter > 8) {
      setPage(page + 1);
      url += `&page=${page}`;
      getMovies();
      setCounter(0);
    }
  }, [counter]);

  return (
    <div>
      <div className="d-flex flex-column justify-content-center text-white">
        <div className="m-auto pb-4">
          {selectedMovie}
          {/*<LikeMovie onClick={()=>console.log("hello")}/>*/}
          <div className="m-auto pl-5 w-50">
            <button
              type="button"
              className="btn btn-lg btn-success mr-5" //Setter filmen inn i liste med resten av de som er likt
              onClick={() => {
                setCounter(counter + 1);
                setLikedMovie((prevState) => [...prevState, selectedMovie]);
              }}
            >
              <Like />
            </button>
            <button
              type="button"
              className="btn btn-lg btn-danger mr-5 "
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              <Dislike />
            </button>
          </div>
        </div>
        Likte filmer
        <ul>
          {likedMovie.map((e) => (
            <li>{e.props.movie.original_title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieCard;
