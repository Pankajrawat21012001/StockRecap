import React from "react";
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


const CustomNavbar = () => {

  return (
    <Navbar collapseOnSelect expand="lg" style={{"backgroundColor":"#1eca8b"}} sticky="top">
      <Container>
        <Navbar.Brand id='brand' href="/#home">
            StockRecap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav variant="pills" className="ms-auto justify-content-between ml-lg-0 d-lg-flex align-items-center text-center navbar-collapsed">
            <Nav.Link className="navLink" href="/#home">Home</Nav.Link>
            <Nav.Link className="navLink" href="/#aboutus">About Us</Nav.Link>
            <Nav.Link className="navLink" href="/#product">Product</Nav.Link>
            <Nav.Link className="navLink" href="/#pricing">Pricing</Nav.Link>
            <Nav.Link className="navLink" href="/#contact">Contact</Nav.Link>
            <Button className="try_for_free" href="/preference-setup">Try For Free!</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
