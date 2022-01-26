import { Tab, Nav, Col, Row } from "react-bootstrap";
import React from "react";

import ProfilData from "./ProfilData";
import MoviePref from "../Film/MoviePref";
import { connect } from "react-redux";
import "./profil.css";

// Foreløpig fungerer denne mer som en placheholder for videre utvikling
// Inne i hver table.pane skal det inneholde en slags instilling menu typ.

const ProfilMenu = (props) => {
  return (
    <Row className=" bg-white m-2 mr-5" style={{ height: "90vh" }}>
      <Tab.Container defaultActiveKey="generelt">
        <Col className="col-2 bg-dark pt-2 innstillingRad">
          <h2 className="text-white text-center pb-3">Instillinger</h2>
          <Nav variant="tabs" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="generelt">Generelt</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="sprak">Språk</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="utseende">Utseende</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="filmpref">Film Preferanse</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="om">Om</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col className="col-10">
          <Tab.Content>
            <Tab.Pane eventKey="generelt">
              <ProfilData user={props} />
            </Tab.Pane>
            <Tab.Pane eventKey="sprak">Språk</Tab.Pane>
            <Tab.Pane eventKey="utseende">Darkmode {props.auth.hei} </Tab.Pane>
            <Tab.Pane eventKey="filmpref">
              <MoviePref user={props} />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Tab.Container>
    </Row>
  );
};
function mapStateToProps(state) {
  return { auth: state.auth }; //Henter auth fra reducers
  //retunere til connect under
} //Les i App.js hvordan funger
export default connect(mapStateToProps)(ProfilMenu);
