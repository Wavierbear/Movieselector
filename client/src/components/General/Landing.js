//Side som bruker kommer til om ikke innlogget
import OmApp from "./../General/OmApp";
import Dashboard from "./../Dashboard";
import { connect } from "react-redux";
import "../App.css";
import React, { Component } from "react";
// Se lucid chart for skjetch for landigpage

class Landing extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <OmApp />;
      default:
        return <Dashboard />;
    }
  }

  render() {
    return (
      <div className="fixBackgroundParent">
        <div className="fixBackground" />
        {this.renderContent()}
      </div>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Landing);
