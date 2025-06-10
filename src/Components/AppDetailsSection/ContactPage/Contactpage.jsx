import React from 'react';
import './ContactPage.css';
import { Container, Card } from 'react-bootstrap';
import { Fade } from 'react-awesome-reveal'; // Optional animation library

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Container className="contact-container">

        <Fade cascade duration={500}>
          {/* Contact Info */}
          
          {/* About Section */}
          <Card className="contact-card">
            <Card.Body>
              <h2 className="contact-title">📱 About Our App</h2>
              <p>Our app is built to help users report and find lost and found items efficiently. We prioritize user privacy, instant notifications, and responsive actions.</p>
              <p>Built with ❤️ using React, Firebase, and Bootstrap.</p>
            </Card.Body>
          </Card>

          {/* Support & Feedback */}
          <Card className="contact-card">
            <Card.Body>
              <h2 className="contact-title">🛠️ Support & Feedback</h2>
              <p>Have a problem or want to suggest something?</p>
              <p>Send an email to <a href="mailto:revanthrevi@gmail.com">revanthrevi@gmail.com</a> or WhatsApp us.</p>
              <p>We appreciate your feedback and constantly work to improve the platform!</p>
            </Card.Body>
          </Card>

          {/* FAQ */}
          <Card className="contact-card">
            <Card.Body>
              <h2 className="contact-title">❓ Frequently Asked Questions</h2>
              <p><strong>Q: How do I report a lost item?</strong></p>
              <p>A: Navigate to the Report page, fill in the details, and submit.</p>

              <p><strong>Q: How can I contact someone who found my item?</strong></p>
              <p>A: Use the contact options provided on the card (Call/WhatsApp).</p>
            </Card.Body>

          </Card>
          <Card className="contact-card">
            <Card.Body>
              <h2 className="contact-title"> Contact-Information</h2>
              <p><strong>Name:</strong> Revanth Revv</p>
              <p><strong>Location:</strong> Hyderabad</p>
              <p><strong>Email:</strong> <a href="mailto:revanthrevi@gmail.com">revanthrevi@gmail.com</a></p>
              <p><strong>WhatsApp:</strong> <a href="https://wa.me/7670915570" target="_blank" rel="noopener noreferrer">7670915570</a></p>
            </Card.Body>
          </Card>

        </Fade>
      </Container>
    </div>
  );
};

export default ContactPage;
