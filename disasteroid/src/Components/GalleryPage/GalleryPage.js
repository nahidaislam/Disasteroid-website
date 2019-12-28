import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Lightbox from "react-image-lightbox";
import "./GalleryPage.css";

import img1 from "../../Image/Process/image1.jpg";
import img2 from "../../Image/Process/image2.jpg";
import img3 from "../../Image/Process/image3.jpg";
import img4 from "../../Image/Process/image4.jpg";
import img5 from "../../Image/Process/image5.jpg";
import img6 from "../../Image/Process/image6.JPG";
import img7 from "../../Image/Process/image7.JPG";
import img8 from "../../Image/Process/image8.JPG";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

class GalleryPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <div className="gallery-section" id="gallery">
        <Container>
          <div className="mdb-lightbox no-margin">
            <Row>
              <Col md="3">
                <figure>
                  <img
                    src={img1}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                      this.setState({ photoIndex: 0, isOpen: true })
                    }
                  />
                </figure>
              </Col>
              <Col md="3">
                <figure>
                  <img
                    src={img2}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                      this.setState({ photoIndex: 1, isOpen: true })
                    }
                  />
                </figure>
              </Col>
              <Col md="3">
                <figure>
                  <img
                    src={img3}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                      this.setState({ photoIndex: 2, isOpen: true })
                    }
                  />
                </figure>
              </Col>
              <Col md="3">
                <figure>
                  <img
                    src={img4}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                      this.setState({ photoIndex: 3, isOpen: true })
                    }
                  />
                </figure>
              </Col>
              <Col md="3">
                <figure>
                  <img
                    src={img5}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                      this.setState({ photoIndex: 4, isOpen: true })
                    }
                  />
                </figure>
              </Col>
              <Col md="3">
                <figure>
                  <img
                    src={img6}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                      this.setState({ photoIndex: 5, isOpen: true })
                    }
                  />
                </figure>
              </Col>
              <Col md="3">
                <figure>
                  <img
                    src={img7}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                      this.setState({ photoIndex: 6, isOpen: true })
                    }
                  />
                </figure>
              </Col>
              <Col md="3">
                <figure>
                  <img
                    src={img8}
                    alt="Gallery"
                    className="img-fluid"
                    onClick={() =>
                      this.setState({ photoIndex: 7, isOpen: true })
                    }
                  />
                </figure>
              </Col>
            </Row>
          </div>
          {isOpen && (
            <Lightbox
              enableZoom={false}
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              imageTitle={photoIndex + 1 + "/" + images.length}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length
                })
              }
            />
          )}
        </Container>
      </div>
    );
  }
}

export default GalleryPage;
