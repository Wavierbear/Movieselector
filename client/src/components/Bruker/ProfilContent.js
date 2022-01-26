import "../App.css";
import React, { Component } from "react";
import OmApp from "./../General/OmApp";
import ProfilMenu from "./ProfilMenu";
import { connect } from "react-redux";
// Skal vise diverse instillinger

class ProfilContent extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <OmApp />;
      default:
        return (
          <ProfilMenu
            userName={this.props.auth.name}
            userEmail={this.props.auth.epost}
            userPic={this.props.auth.bilde}
          />
        );
    }
  }

  render() {
    return <div className="fixBackgroundParent">{this.renderContent()}</div>;
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(ProfilContent);
