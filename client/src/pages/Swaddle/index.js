import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import UserTextInput from "../../components/UserTextInput";
import Carousel from "../../components/Carousel";

// import "./style.css";

function Swaddle() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col size="md-12">
            <p>Swaddles for Waddles</p>
            <Carousel />
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <Row>
              <Col size="md-2">button</Col>
              <Col size="md-2">button</Col>
              <Row>
                <Col size="md-12">
                  <UserTextInput />
                </Col>
              </Row>
            </Row>
          </Col>
          <Col size="md-6">
            {/* Not sure if figure is best image area */}
            <figure className="figure">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/sweaters/blueSweaterTest.png"
                }
                className="figure-img img-fluid rounded"
                alt="..."
              />
              <figcaption className="figure-caption">
                meme area (delete this figcaption)
              </figcaption>
            </figure>
          </Col>
        </Row>
        <Row>
          <Col size="md-4 offset-md-2">
            {/* this will be a button component */}
            <button>Save</button>
          </Col>
          <Col size="md-4 ">
            {/* this will be a button component */}
            <button>Reset</button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Swaddle;

// // wrap above in this?
// function swaddlePenguin(props) {
//   return <div />;
// }

// export default swaddlePenguin;
