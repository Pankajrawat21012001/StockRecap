import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Home.css";
import { ReactTyped } from "react-typed";
import VideoPlayer from "./Videoplayer";

const Home = () => {
  return (
    <section id="home">
    <Container className="content-home">
      <Row className="home-wrapper">
        <Col lg={6} className="home-left">
          <div className="home-header">
            <div
              className="home-title-wrapper"
              style={{ textAlign: "center" }}
            >
              <p style={{ fontSize: "5rem", margin: 0, display: "block" }}>
                Your
              </p>
            </div>
            <div
              className="home-title-wrapper"
              style={{ textAlign: "center" }}
            >
              <p style={{ fontSize: "5rem", margin: 0, display: "block" }}>
                <ReactTyped
                  strings={["Stocks", "Updates", "Notification"]}
                  typeSpeed={100}
                  loop
                  backSpeed={20}
                  cursorChar="|"
                  showCursor={true}
                />
              </p>
            </div>
            <p className="home__description">
              Get daily insights into your stock portfolio.<br />
              and market trends. Stay informed and<br />
              Sign up for early access today!<br />
            </p>
          </div>
            <div className="home-cta-button">
              <Button
                href="/preference-setup"
                className="home-cta"
                variant="outline-success" size="lg"
              >
                1-Month FREE Trial
              </Button>
            </div>
        </Col>

        <Col lg={6} className="home-right">
          <VideoPlayer/>
        </Col>
      </Row>
    </Container>
    </section>
  );
};

export default Home;
