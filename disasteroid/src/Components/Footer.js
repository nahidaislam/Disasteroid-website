import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={8} sm={12}>
            © DH2413 Advanced Graphics and Interaction.
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={4}>
            This site is made by Nahida Isalm.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
