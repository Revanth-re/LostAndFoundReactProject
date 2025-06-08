import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaWhatsapp, } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer style={{backgroundColor:"#EEEDED"}} className=" text-dark py-5 mt-6">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="text-uppercase text-dark mb-3">Services</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark text-decoration-none">Branding</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Design</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Marketing</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Advertisement</a></li>
            </ul>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="text-uppercase text-dark mb-3">Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-dark text-decoration-none">About us</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Contact</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Jobs</a></li>
              <li><a href="#" className="text-dark text-decoration-none">Press kit</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="text-uppercase text-dark mb-3">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-dark fs-4"><FaWhatsapp/></a>
              <a href="#" className="text-dark fs-4"><FaInstagram/></a>
              <a href="#" className="text-dark fs-4"><FaThreads /></a>
            </div>
          </Col>
        </Row>
        <hr className="border-light my-4" />
        <p className="text-center mb-0">&copy; 2025 Lost & Found. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
