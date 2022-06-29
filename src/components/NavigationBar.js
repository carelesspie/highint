import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import styled from "styled-components";
import "./NavigationBar.css";
import muscle from "./muscle.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="/" className="navbar-brand fw-bold">
        <img src={muscle} width="60" height="60" className="logo-img" alt="" />
        High Intensity
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/" className="nav-link">
            Home
          </Nav.Link>
          <Nav.Link href="/about" className="nav-link">
            About
          </Nav.Link>
          <Nav.Link href="/exercises" className="nav-link">
            Exercises
          </Nav.Link>
          <Link to="/register">
            {" "}
            <Button variant="danger" className="button-top-right">
              Get Started
            </Button>{" "}
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
