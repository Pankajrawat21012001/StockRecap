import React from 'react';
import { Container, Row, Col, Card , Button} from 'react-bootstrap';
import './Product.css';
import process1 from '../illustrations/step 1.svg';
import process2 from '../illustrations/step 2.svg';
import process3 from '../illustrations/step 3.svg';

const products = [
  {
    title: "Selecting Stocks",
    description: "Choose stocks from a comprehensive list to focus on the ones that matter to your portfolio.",
    imgSrc: process1,
    link: "/login"
  },
  {
    title: "Selecting Time Frame",
    description: "Choose the preferred time and interval for updates, including daily, weekly, or custom schedules.",
    imgSrc: process2,
    link: "/login"
  },
  {
    title: "Receiving Notifications",
    description: "Receive timely notifications with insights, trends, and updates on your selected stocks at your chosen times.",
    imgSrc: process3,
    link: "/login"
  }
];

const ProductSection = () => {
  return (
    <section id="product">
    <Container className="product-section">
        <div className="product-title-wrapper" style={{ textAlign: "center", marginBottom: '4rem' }}>
            <p className="product-title">
                What We Provide
            </p>
        </div>
        <Row>
            {products.map((process, index) => (
                <Col key={index} lg={4} md={6} sm={12} className="mb-4">
                    <Card className="h-80">
                        <Card.Img variant="top" src={process.imgSrc} />
                        <Card.Body>
                            <Card.Title>{process.title}</Card.Title>
                            <Card.Text>{process.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
        <Row className="cta-section" style={{ marginTop: '4rem', textAlign: 'center' }}>
            <Col>
                <div className="cta-text-wrapper">
                <p className="cta-eyebrow" style={{ fontSize: '1rem', color: '#999' }}>
                    Your personalized stock insight platform
                </p>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '1rem 0' }}>
                  Empower Your Portfolio with Smart Insights
                </h2>
                </div>
                <div className="product-cta-button">
                    <Button variant="outline-success" size="lg" className="product-cta" href='/preference-setup'>
                        Let's Start
                    </Button>
                </div>
            </Col>
        </Row>
    </Container>
</section>
  );
};

export default ProductSection;
