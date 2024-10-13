import React from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './Pricing.css';
import Wave1 from "../illustrations/Wave_1.svg";
import Wave2 from "../illustrations/Wave_2.svg";
import PricingImage from "../illustrations/Pricing free.svg"

const Pricing = () => {
  return (
    <section id='pricing'>
      <img src={Wave2} alt="wave" className="pricing-wave-image" />
      <Container className="pricing-section">
        <div className="pricing-title-wrapper" style={{ textAlign: "center" }}>
          <p className="pricing-title">
            Monthly Pricing
          </p>
        </div>
        <Row className="justify-content-center">
        <Col lg={6} className="pricing-left">
        <img src={PricingImage} alt="Pricing" className="pricing-image" />
        </Col>
          <Col md={4}>
            <Card className="pricing-card">
              <Card.Body>
                <Card.Title className="pricing-card-title">Special Offer</Card.Title>
                <h3 className="pricing-price">
                  <span className="original-price"><s>₹99</s></span> Free
                </h3>
                <Card.Text className="pricing-price-description">Free for the <b>FIRST MONTH</b>.</Card.Text>
                <Button variant="outline-success" href="/preference-setup" className="pricing-cta" size="lg">Get started</Button>
                <div className="pricing-features">
                  <h3>Key features include:</h3>
                  <ul>
                    <li>Daily stock updates</li>
                    <li>Market recaps through email</li>
                    <li>Customizable alerts</li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <img src={Wave1} alt="wave 1" className="pricing-wave-image" />
    </section>
  );
}

export default Pricing;
