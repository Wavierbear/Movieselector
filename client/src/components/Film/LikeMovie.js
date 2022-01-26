import React from "react";
import Like from "@material-ui/icons/ThumbUp"; //bruk bootstrap icon?
import Dislike from "@material-ui/icons/ThumbDown";
import { useSelector, useDispatch } from "react-redux";
import { likeMovie, dislikeMovie } from "../../actions";

const LikeMovie = (props) => {
  const dispatch = useDispatch();
  const film = useSelector((state) => state.like); //henter ut film som er likt. Settes inn i h1 tagg lenger ned

  return (
    <div className="d-flex justify-content-center">
      <h1>{film}</h1>
      <button
        type="button"
        className="btn btn-lg btn-success mr-5"
        onClick={() => dispatch(likeMovie(props.filmid))} // Ved klikk på knapp, kjør dispatch, likeMovie får inn filmens id som parameter.
      >
        <Like />
      </button>
      <button
        type="button"
        className="btn btn-danger btn-lg ml-5 "
        onClick={() => dispatch(dislikeMovie())} // kaller på dislikeMovie ved klikk på dislike knapp
      >
        <Dislike />
      </button>
    </div>
  );
};

export default LikeMovie;
