//Dette er foreldren til komponentene i components mappen

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux"; //Lager den globale "state"
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import "bootstrap/dist/css/bootstrap.min.css"; //impotere inn, CSS dekker alle barn
import "bootstrap";
import "materialize-css";
import "./index.css";

import axios from "axios";
window.axios = axios;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//                                     //reduxThunk fikser så react funger med Redux
const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(reduxThunk))
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
); //henter id#root fra public/index.html
