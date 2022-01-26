//Side som bruker kommer til om ikke innlogget
import React from "react";
import { Card } from "react-bootstrap";
import Logo from "./logo.PNG";
// Lager et kort for å vise frem hver student
// Skal ta en navn(Mathias Berger) feks, og tekst om personen. Samt et bilde.


export const AboutUsCard = (props) => {
  return (
    <Card bg="primary" text="white" style={{ width: "20%", height: "30%" }}>
      <img className="card-img-top" src={props.imgURL} alt={props.name} />
      <Card.Header>{props.name}</Card.Header>
      <Card.Body>
        <Card.Title>{props.studentNummer}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default AboutUsCard;
