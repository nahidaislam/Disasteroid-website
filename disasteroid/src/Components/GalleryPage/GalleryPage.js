import React from "react";
import Lightbox from "react-image-lightbox";

import { Grid } from "@material-ui/core/";
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
const captions = [
  "A regular work day, Photo: Nahida Islam, license: CC0",
  "A pizza break was needed, Photo: Nahida Islam, license: CC0",
  "The special weapon: Satellite, Photo: Nahida Islam, license: CC0",
  "Scan the satellite, Photo: Nahida Islam, license: CC0",
  "Satellite appeared in the scene, Photo: Nahida Islam, license: CC0",
  "An asteroid and it's predicted path, Photo: Nahida Islam, license: CC0",
  "A bomb is launched, Photo: Nahida Islam, license: CC0",
  "Participants during open house, Photo: Nahida Islam, license: CC0"
];

class GalleryPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
      caption: null
    };
  }

  render() {
    const { photoIndex, isOpen, caption } = this.state;
    return (
      <div className="gallery-section" id="gallery">
        <div className="mdb-lightbox">
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid container item xs={3} spacing={1}>
              <figure className="frame">
                <img
                  src={img1}
                  alt="Working day"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({
                      photoIndex: 0,
                      isOpen: true,
                      caption:
                        "A regular work day, Photo: Nahida Islam, license: CC0"
                    })
                  }
                />
              </figure>
            </Grid>
            <Grid container item xs={3} spacing={1}>
              <figure className="frame">
                <img
                  src={img2}
                  alt="Pizza break"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({
                      photoIndex: 1,
                      isOpen: true,
                      caption:
                        "A pizza break was needed, Photo: Nahida Islam, license: CC0"
                    })
                  }
                />
              </figure>
            </Grid>
            <Grid container item xs={3} spacing={1}>
              <figure className="frame">
                <img
                  src={img3}
                  alt="The satellite"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({
                      photoIndex: 2,
                      isOpen: true,
                      caption:
                        "The special weapon: Satellite, Photo: Nahida Islam, license: CC0"
                    })
                  }
                />
              </figure>
            </Grid>
            <Grid container item xs={3} spacing={1}>
              <figure className="frame">
                <img
                  src={img4}
                  alt="scanning satellite"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({
                      photoIndex: 3,
                      isOpen: true,
                      caption:
                        "Scan the satellite, Photo: Nahida Islam, license: CC0"
                    })
                  }
                />
              </figure>
            </Grid>
            <Grid container item xs={3} spacing={1}>
              <figure className="frame">
                <img
                  src={img5}
                  alt="Satellite appear"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({
                      photoIndex: 4,
                      isOpen: true,
                      caption:
                        "Satellite appeared in the scene, Photo: Nahida Islam, license: CC0"
                    })
                  }
                />
              </figure>
            </Grid>
            <Grid container item xs={3} spacing={1}>
              <figure className="frame">
                <img
                  src={img6}
                  alt="Asteroid"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({
                      photoIndex: 5,
                      isOpen: true,
                      caption:
                        "An asteroid and it's predicted path, Photo: Nahida Islam, license: CC0"
                    })
                  }
                />
              </figure>
            </Grid>
            <Grid container item xs={3} spacing={1}>
              <figure className="frame">
                <img
                  src={img7}
                  alt="Launch bomb"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({
                      photoIndex: 6,
                      isOpen: true,
                      caption:
                        "A bomb is launched, Photo: Nahida Islam, license: CC0"
                    })
                  }
                />
              </figure>
            </Grid>
            <Grid container item xs={3} spacing={1}>
              <figure className="frame">
                <img
                  src={img8}
                  alt="Amazed"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({
                      photoIndex: 7,
                      isOpen: true,
                      caption:
                        "Participants during open house, Photo: Nahida Islam, license: CC0"
                    })
                  }
                />
              </figure>
            </Grid>
          </Grid>
        </div>
        {isOpen && (
          <Lightbox
            enableZoom={false}
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageTitle={photoIndex + 1 + "/" + images.length}
            // imageCaption={caption}
            imageCaption={captions[photoIndex]}
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
      </div>
    );
  }
}

export default GalleryPage;
