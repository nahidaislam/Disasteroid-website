import React, { Component } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

import arturs from "../../Image/Team/arturs.png";
import augustin from "../../Image/Team/augustin.png";
import chantal from "../../Image/earth.png";
import miki from "../../Image/Team/miki.jpg";
import nahida from "../../Image/Team/nahida.jpg";
import tingyi from "../../Image/Team/tingyi.png";

import "./TeamPage.css";

class TeamPage extends Component {
  render() {
    return (
      <div className="team-section" id="team">
        <Container>
          <Row className=" justify-content-between p-3">
            <Col md={4} sm={12}>
              <Card style={{ width: "24rem" }}>
                <Card.Img className="profile-img" variant="top" src={arturs} />
                <Card.Body>
                  <Card.Title>Arturs Kurzemnieks</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12}>
              <Card style={{ width: "24rem" }}>
                <Card.Img
                  className="profile-img"
                  variant="top"
                  src={augustin}
                />
                <Card.Body>
                  <Card.Title>Augustin Bariant</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12}>
              <Card style={{ width: "24rem" }}>
                <Card.Img className="profile-img" variant="top" src={chantal} />
                <Card.Body>
                  <Card.Title>Chantal Hundscheid</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className=" justify-content-between p-3">
            <Col md={4} sm={12}>
              <Card style={{ width: "24rem" }}>
                <Card.Img className="profile-img" variant="top" src={miki} />
                <Card.Body>
                  <Card.Title>Miguel Alvarez Bordils</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12}>
              <Card style={{ width: "24rem" }}>
                <Card.Img className="profile-img" variant="top" src={nahida} />
                <Card.Body>
                  <Card.Title>Nahida Islam</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12}>
              <Card style={{ width: "24rem" }}>
                <Card.Img className="profile-img" variant="top" src={tingyi} />
                <Card.Body>
                  <Card.Title>Tingyi Li</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default TeamPage;
