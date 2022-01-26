
import { LIKE_MOVIE, DISLIKE_MOVIE } from '../actions/types';
//https://www.youtube.com/watch?v=CVpUuw9XSjY for flowen
export default function likeMovie(state = null, action) {
    switch (action.type) {
        case LIKE_MOVIE:
            return "film " + action.payload;
        case DISLIKE_MOVIE:
            return "ikke film" + action.payload ;
        default:
            return state;
    }
}