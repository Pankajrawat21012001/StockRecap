import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";
import Wave1 from "../illustrations/Wave_1.svg"
import Wave2 from "../illustrations/Wave_2.svg"
import AboutUsImage from '../illustrations/Push notification.svg'

const Home = () => {
  return (
    <section id='aboutus'>
    <img src={Wave2} alt="wave" className="aboutus-wave-image" />
    <Container className="content-aboutus-">
      <Row className="aboutus-wrapper">
        <Col lg={6} className="aboutus-left">
        <img src={AboutUsImage} alt="About us" className="aboutus-image" />
        </Col>
        <Col lg={6} className="aboutus-right">
            <div
              className="aboutus-title-wrapper"
              style={{ textAlign: "center" }}
            >
              <p className="aboutus-title">
                About Us
              </p>
            </div>
            <div
              className="aboutus-description-wrapper">
              <p>
              Welcome to <span className="aboutus-white-description">StockRecap</span>, your number one source for <span className="aboutus--white-description">personalized stock updates</span> and market recaps.
              We're dedicated to providing you with the very best insights into your stock portfolio and market trends,
              with an emphasis on <span className="aboutus-white-description">selected-time notifications</span>, comprehensive financial analysis, and easy-to-understand market recaps.
            </p>
            <p>
              We hope you enjoy our services as much as we enjoy offering them to you.
              If you have any questions or comments, please don't hesitate to contact us.
            </p>
            <p>Sincerely,</p>
            <p>The <span className="aboutus-white-description">StockRecap</span> Team</p>
          </div>
        </Col>
      </Row>
    </Container>
    <img src={Wave1} alt="wave 1" className="aboutus-wave-image" />
    </section>
  );
};

export default Home;
