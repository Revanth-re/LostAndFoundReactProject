import React from 'react';
import './ContactPage.css'; // Link to your CSS file
import { Container, Card } from 'react-bootstrap';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Container className="contact-container">
        <Card className="contact-card">
          <Card.Body>
            <h2 className="contact-title">📞 Contact Information</h2>
            <p><strong>Name:</strong> Revanth Revv</p>
            <p><strong>Location:</strong> Hyderabad</p>
            <p><strong>Email:</strong> <a href="mailto:revanthrevi@gmail.com">revanthrevi@gmail.com</a></p>
            <p><strong>WhatsApp:</strong> <a href="https://wa.me/7670915570" target="_blank" rel="noopener noreferrer">7670915570</a></p>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default ContactPage;
