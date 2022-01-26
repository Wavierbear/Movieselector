import axios from "axios";
import { FETCH_USER, LIKE_MOVIE, DISLIKE_MOVIE } from "./types";
//Bare en måte å gjøre det på, "boiler plate", som er tilpasset vårt bruk

//Action er en beskrivelse som kan bli utført
//Enkel funksjon som retunere et object
//Type betyr navn på action
export const fetchUser = () => async (dispatch) => {
  //dispatch sender eventet til alle reducers in the "store", som får alle til å oppdatere sin state
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data }); //Vi henter ut bare data delen av objektet som er retunert av axios, google brukerid osv
};

export const likeMovie = (movieId) => {
  return {
    type: LIKE_MOVIE,
    payload: movieId,
  };
};
export const dislikeMovie = (movieId) => {
  return {
    type: DISLIKE_MOVIE,
    payload: movieId,
  };
};
