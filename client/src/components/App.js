//Direkte foreldren til alle "html" komponentene som vises til bruker
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux"; //kompalitet mellom react og redux biblioteket
import * as actions from "../actions"; //* hent alle action creators vi har lagd
import Header from "./General/Header";

import MovieCard from "./Film/MovieCard";
import Landing from "./General/Landing";
import AboutUs from "./General/AboutUs";
import Profil from "./Bruker/Profil";


class App extends Component {
  //Lagde den om til class så vi får tilgang til livssyklusen 86.Refactor APP
  componentDidMount() {
    //props lages fra connect under
    this.props.fetchUser(); //fetchUser er hentet fra /actions
  }

  //render kjører alltid før componentDidMount osv
  // Viser frem header, og alle dens komponenter. Bestemmer hvilken path som hører til hvilken path
  // exact path for at akkurat denne skal brukes, altså at path må være nøyaktig lik. Uten denne, vil path bli brukt så lenge den inneholder
  // en del av den.
  render() {
    return (
      <div className="container-fluid bg-backgrunnsFarge">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/film" component={MovieCard} />
            <Route exact path="/about" component={AboutUs} />
            <Route exact path="/profil" component={Profil} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
//mapStateToProp sett vi null, også alle actions creatorsene.
export default connect(null, actions)(App);
