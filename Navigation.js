import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import React from "react";

const Navigation = () => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      fixed="top"
      style={{
        boxShadow: "0px 2px 7px -2px rgba(0,0,0,0.66)",
      }}
    >
      <Container fluid>
        <Navbar.Brand href="#home">
          {" "}
          <img
            src="https://cdn2.iconfinder.com/data/icons/arrows-3-1/512/xxx042-512.png"
            width="30"
            height="30"
          ></img>
          Push
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>

          <img
            src="https://img.icons8.com/ios-filled/344/iphone-x.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          ></img>
          <div className="topBottomOne">
            <p4>Call Us</p4>
            <p3 style={{ color: "black" }}>908-858-6819</p3>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
