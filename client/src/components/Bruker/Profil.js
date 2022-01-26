import { connect } from "react-redux";
import "../App.css";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import ProfilContent from "./ProfilContent";

// Profil side, samt sjekker om bruker er logget inn!
// Hvis ProfilContent hvis bruker er logget inn, hvis ikke skal de bli ført tilbake til landingpage

class Profil extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <Redirect to="/" />;
      default:
        return <ProfilContent />;
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Profil);
