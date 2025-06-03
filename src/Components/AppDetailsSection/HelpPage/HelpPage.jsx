import React from 'react';
import './HelpPage.css';
import { Container, Card } from 'react-bootstrap';

const HelpPage = () => {
  return (
    <div className="help-page">
      <Container className="help-container">
        <Card className="help-card">
          <Card.Body>
            <h2 className="help-title">🆘 Help & Support</h2>

            <h4>📌 How to Report a Found Item:</h4>
            <ul>
              <li>Click on the <strong>"Report Found Item"</strong> button.</li>
              <li>Fill in all relevant fields like item name, location, description, and contact details.</li>
              <li>Submit the form. The item will be stored under your profile and visible to others.</li>
            </ul>

            <h4>🔍 How to Report a Lost Item:</h4>
            <ul>
              <li>Click on <strong>"Report Lost Item"</strong>.</li>
              <li>Provide as much detail as possible: brand, model, color, last seen location, etc.</li>
              <li>Enter your contact information to be reached by anyone who finds your item.</li>
            </ul>

            <h4>📨 Need Assistance?</h4>
            <p>If you encounter any issues using the application or have questions, contact support:</p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:revanthrevi@gmail.com">revanthrevi@gmail.com</a></li>
              <li><strong>WhatsApp:</strong> <a href="https://wa.me/7670915570" target="_blank" rel="noopener noreferrer">7670915570</a></li>
            </ul>

            <h4>ℹ️ Tips:</h4>
            <ul>
              <li>Be honest and specific in your reports.</li>
              <li>Check the "Found Items" section regularly to see if your lost item is listed.</li>
              <li>Use valid contact information for better chances of recovery.</li>
            </ul>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default HelpPage;
