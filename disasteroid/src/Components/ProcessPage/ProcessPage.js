import React, { Component } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "./ProcessPage.css";

class ProcessPage extends Component {
  render() {
    return (
      <div className="process-section" id="process">
        <Container>
          <Row className=" justify-content-between p-2">
            <Col md="auto" sm={12}>
              <Card style={{ width: "21rem" }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title>GOALS AND MOTIVATIONS</Card.Title>
                  <Card.Text>
                    The goal of Disasteroid is to make dark humor themed
                    collaborative AR game. The game involves the player to save
                    the earth from asteroids using missiles and a special
                    weapon. However, creating the missiles and the special
                    weapon involves using resources from the earth. The player,
                    therefore, has to deal with the dilemma of whether or not
                    they are actually saving the earth.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>
            <Col md="auto" sm={12}>
              <Card style={{ width: "21rem" }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title>GRAPHICS</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>
            <Col md="auto" sm={12}>
              <Card style={{ width: "21rem" }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title>INTERACTION</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className=" justify-content-between p-2">
            <Col md="auto" sm={12}>
              <Card style={{ width: "21rem" }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title>3D MODELS</Card.Title>
                  <Card.Text>
                    A satellite with a gun on top of it was 3D printed to
                    represent the special weapon. A image was attached to it in
                    order to be able to track the satellite on the AR scene.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>
            <Col md="auto" sm={12}>
              <Card style={{ width: "21rem" }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title>TECHNOLOGIES</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>
            <Col md="auto" sm={12}>
              <Card style={{ width: "21rem" }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title>CHALLENGES AND LESSON LEARNED</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {/* <Row className=" justify-content-between p-3">
           
          </Row> */}
        </Container>
      </div>
    );
  }
}
export default ProcessPage;
