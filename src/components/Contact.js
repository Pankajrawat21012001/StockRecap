import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Contact.css";
import ContactImage from '../illustrations/Contact us.svg';

const Home = () => {
  const [result, setResult] = useState("");
  const [showForm, setShowForm] = useState(true);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.REACT_APP_WEB3FORMS_EMAIL_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      setShowForm(false);
      setTimeout(() => {
        setShowForm(true);
        event.target.reset();
      }, 3000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id='contact'>
      <Container className="content-contact">
        <Row className="contact-wrapper">
          <Col lg={6} className="contact-left">
            <div className="contact-title-wrapper" style={{ textAlign: "center" }}>
              <p className="contact-title">Contact Us</p>
            </div>
            {showForm ? (
              <form
                id="contact-form"
                method="POST"
                onSubmit={onSubmit}
                className="form"
              >
                <fieldset className="form-fieldset">
                  <div className="form-group">
                    <label htmlFor="fullname">Full Name *</label>
                    <input
                      id="fullname"
                      name="fullname"
                      type="text"
                      required
                      placeholder="Enter your Full Name"
                    />
                  </div>
                </fieldset>
                <fieldset className="form-fieldset">
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your Email"
                    />
                  </div>
                </fieldset>
                <fieldset className="form-fieldset">
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                </fieldset>
                <Button type="submit" variant="outline-success" className="pricing-cta form-button">Submit</Button>
              </form>
            ) : (
              <div className="thank-you-message">
                <p>Thanks for submitting!</p>
              </div>
            )}
            {result && <p className="form-result">{result}</p>}
          </Col>
          <Col lg={6} className="contact-right">
            <img src={ContactImage} alt="contact us" className="contact-image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
