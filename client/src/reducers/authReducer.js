//sjekk om bruker er eller ikke er logget inn
import { FETCH_USER } from "../actions/types";

//State hvordan er tilstand ved start
//
export default function erBrukerLoggetInn(state = null, action) {
  switch (
    action.type //Sjekker type, altså hvilken action det gjelder
  ) {
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}
