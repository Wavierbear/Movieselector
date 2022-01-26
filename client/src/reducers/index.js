import {combineReducers} from 'redux';
import authReducer from './authReducer';
import likeReducer from './likeReducer';

//Reducer sjekker hvilket action som ble trigget
//Og hvordan det skal hånteres
export default combineReducers({
    auth: authReducer,
    like: likeReducer
});
