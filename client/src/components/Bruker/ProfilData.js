import React from "react";
import { Form, Button, Row } from "react-bootstrap";

export const ProfilData = (props) => {
  return (
    <div>
      <h1>Generelt</h1>
      <Form>
        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control placeholder={props.user.userName} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address:</Form.Label>
          <Form.Control type="email" placeholder={props.user.userEmail} />
        </Form.Group>
        <Form.Group>
          <Form.Check type="checkbox" label="Privat konto" />
        </Form.Group>
        <Form.Group controlId="formControlFile">
          <Form.Label>Bytt bilde:</Form.Label>
          <Form.Control type="file" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Bio:</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>

        <Row className="d-flex justify-content-between m-2 pt-3">
          <Button variant="danger" type="submit">
            Avbryt
          </Button>
          <Button variant="primary" type="submit">
            Lagre
          </Button>
        </Row>
      </Form>
    </div>
  );
};

export default ProfilData;
