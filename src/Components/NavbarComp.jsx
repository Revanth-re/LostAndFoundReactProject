import React from 'react';
import "./NavbarComp.css";
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const NavbarComp = () => {
  const UserFromLS = JSON.parse(localStorage.getItem("reactProjectUsers"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("reactProjectUsers")

    navigate("/loginPage");
  };

  return (
    <Navbar className="custom-navbar" expand="lg" collapseOnSelect sticky="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">MyApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {UserFromLS ? (
            <Nav className="ms-auto linksDiv">
              <Nav.Link as={Link} to="/HelpPage">Help</Nav.Link>
              <Nav.Link as={Link} to="/ContactPage">Contact</Nav.Link>
              {/* <Nav.Link as={Link} to="/FoundItems">ReportFoundItems</Nav.Link>
              <Nav.Link as={Link} to="/LostItems">ReportLostItems</Nav.Link> */}
              <Nav.Link as={Link} to="/UserProvidedFound">Notifications</Nav.Link>
            <Nav.Link as={Link} to="/MyReports">MyReports</Nav.Link>
              <Button onClick={handleLogout}>Logout</Button>
            </Nav>
          ) : (
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
              <Nav.Link as={Link} to="/loginPage">Login</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
