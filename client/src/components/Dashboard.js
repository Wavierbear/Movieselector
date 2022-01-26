import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row, Card, Toast, Tab, Tabs } from "react-bootstrap/";
import Backgrunn from "./General/bg-backgrunn.jpg";

// Det bruker skal se når de kommer inn på nettside når de er allerede logget it

class Dashboard extends Component {
  render() {
    return (
      <Row style={{ height: "100vh" }}>
        {" "}
        {/*Bootstrap deler siden opp i 12 kolonner, sier jeg vil bruke 9 til ene */}
        <Row className="col-12 justify-content-center">
          <Col className="col-10 mt-5 border">
            <h1 className="p-5 text-white">
              Top picks for <i>{this.props.auth.name}</i>
            </h1>
          </Col>

          <Col className="col-5 mt-5">
            <Card>
              <Card.Header>Trending</Card.Header>
              <Card.Body>
                <Card.Title>deserunt mollit anim id est laborum</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet, consectetu</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-5 mt-5">
            <Card>
              <Card.Header>New releases</Card.Header>
              <Card.Body>
                <Card.Title>deserunt mollit anim id est laborum</Card.Title>
                <Card.Text>Lorem ipsum dolor sit amet, consectetu</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth }; //Henter auth fra reducers
  //skjer noe magi, retunere til connect under
} //Les i App.js hvordan funger
export default connect(mapStateToProps)(Dashboard);
