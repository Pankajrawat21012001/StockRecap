import React from "react";
// import React, { useEffect, useState } from "react";
import './PerferenceNavbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Dropdown from 'react-bootstrap/Dropdown';
// import { GoogleLogin, googleLogout } from '@react-oauth/google';
// import { FaUser, FaEnvelope, FaClipboard, FaCalendarAlt, FaSignOutAlt } from 'react-icons/fa';
// import {jwtDecode} from 'jwt-decode';

const CustomNavbar = () => {
  // const [user, setUser] = useState(null);
  
  // useEffect(() => {
  //   const storedUser = localStorage.getItem('user');
  //   if (storedUser) {
  //     setUser(JSON.parse(storedUser));
  //   }
  // }, []);

  // const handleLoginSuccess = (credentialResponse) => {
  //   const decodedUser = jwtDecode(credentialResponse.credential);
  //   setUser(decodedUser);
  //   localStorage.setItem('user', JSON.stringify(decodedUser));
  // };

  // const handleLogout = () => {
  //   googleLogout();
  //   localStorage.removeItem('user');
  //   setUser(null);
  // };

  return (
    <Navbar collapseOnSelect expand="lg" style={{ "backgroundColor": "#1eca8b" }} sticky="top">
      <Container>
        <Navbar.Brand id='brand' href="/#home">StockRecap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav variant="pills" className="ms-auto justify-content-between ml-lg-0 d-lg-flex align-items-center text-center navbar-collapsed">
            <Nav.Link className="navLink" href="/#home">Home</Nav.Link>
            <Nav.Link className="navLink" href="/#aboutus">About Us</Nav.Link>
            <Nav.Link className="navLink" href="#product">Product</Nav.Link>
            <Nav.Link className="navLink" href="#pricing">Pricing</Nav.Link>
            <Nav.Link className="navLink" href="#contact">Contact</Nav.Link>
            {/* {!user ? (
              <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
            ) : (
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic" className="profile-dropdown"
                  style={{ backgroundColor: "transparent", border: "none", padding: "5px", boxShadow: "none" }}>
                  <img src={user.picture} alt='Profile' className="profile-img" />
                  <span className="profile-name">{user.given_name}</span>
                </Dropdown.Toggle>
                <Dropdown.Menu align="end">
                  <Dropdown.ItemText style={{ display: 'flex', alignItems: 'center' }}>
                    <FaUser style={{ marginRight: '8px' }} /> {user.name}
                  </Dropdown.ItemText>
                  <Dropdown.ItemText style={{ display: 'flex', alignItems: 'center' }}>
                    <FaEnvelope style={{ marginRight: '8px' }} /> {user.email}
                  </Dropdown.ItemText>
                  <Dropdown.ItemText style={{ display: 'flex', alignItems: 'center' }}>
                    <FaClipboard style={{ marginRight: '8px' }} /> Basic Plan
                  </Dropdown.ItemText>
                  <Dropdown.ItemText style={{ display: 'flex', alignItems: 'center' }}>
                    <FaCalendarAlt style={{ marginRight: '8px' }} /> 30 days left
                  </Dropdown.ItemText>
                  <Dropdown.Divider />
                  <Dropdown.Item style={{ display: 'flex', alignItems: 'center', color: "red" }} onClick={handleLogout}>
                    <FaSignOutAlt style={{ marginRight: '8px' }} /> Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )} */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;