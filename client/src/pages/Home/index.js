import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Navbar from "../../components/Navbar";
import "./style.css";

function Home() {
  return (
    // <Container fluid>
    //   <Row>
    //     <Col size="md-9">
    //       <Row>
    //         <Col size="md-12">

    <div className="background">
      <Navbar className="navbar" />
      <div className="logo-wrapper">
        <img
          className="mainlogo"
          src={
            process.env.PUBLIC_URL +
            "/assets/images/icons/swaddles_for_waddles_logo.png"
          }
        />
      </div>
      <img
        className="front-page-photo"
        src={
          process.env.PUBLIC_URL +
          "/assets/images/icons/penguins_for_frontpage.jpg"
        }
      />
      <div>
        <h1 className="brand-text"> SWADDLES FOR WADDLES</h1>
        <p className="brand-subtext">Memes for a Cause</p>
      </div>
    </div>
    //   </Col>
    // </Row>

    //   {/* <Row>
    //     <Col size="md-12">
    //       <article>
    //         <p>
    //           A group of penguins is called a waddle, and a sweater for a
    //           penguin is like a swaddle. Here, on Swaddles for Waddles, you
    //           can create your own images and memes of penguins in sweaters!
    //         </p>
    //         <p>Create fun memes and be as fun and silly as you want.</p>
    //       </article>
    //     </Col>
    //   </Row> */}
    //   {/* <Row>
    //     <Link to="/About">
    //       <a className="btn btn-primary" role="button">
    //         About
    //       </a>
    //     </Link>
    //     <Link to="/Swaddle">
    //       <a className="btn btn-primary" role="button">
    //         Swaddle a Pengiun!
    //       </a>
    //     </Link>
    //     <Link to="/Donate">
    //       <a className="btn btn-primary" role="button">
    //         Donate
    //       </a>
    //     </Link>
    //   </Row> */}
    // </Col>
    // <Col size="md-3">

    //     </Col>
    //   </Row>
    // </Container>
  );
}

export default Home;
