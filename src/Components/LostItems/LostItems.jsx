// import React, { useState } from 'react';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { Button, Form, Modal, Row, Col } from 'react-bootstrap';
import { db } from '../../FireBaseConfig/Firebase';
import { useNavigate } from 'react-router-dom';
import { useState} from 'react';
import './LostItems.css'; // You can copy and reuse FoundItems.css as LostItems.css
 import { toast } from 'react-toastify';
const LostItems = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/userdashBoard");
  };

  const [lostItems, setLostItems] = useState({
    itemname: "",
    location: "",
    description: "",
  });

  const [lostOpen, setLostOpen] = useState(false);

  const DatafromLs = JSON.parse(localStorage.getItem("reactProjectUsers"));
  const userdetails = DatafromLs.displayName;

  const handleLostOpen = () => setLostOpen(true);
  const handleLostClose = () => setLostOpen(false);

  const handleLostForm = async (e) => {
    e.preventDefault();

    if (!userdetails) {
      alert("User not logged in or localStorage is corrupted.");
      return;
    }

    try {
      const userDocRef = doc(db, "users", userdetails);
      await updateDoc(userDocRef, {
        WholeItems: arrayUnion(lostItems),
      });
    toast.success("Lost Item Reported Successufully")

      handleLostClose();
    } catch (err) {
      console.error("Error reporting lost item:", err);
    }
  };

  return (
    <div className="container mt-4">
      <div className="lost-items-page">
        <h1 className="page-title">🕵️‍♂️ Lost Items</h1>

        <div className="instructions-card">
          <h5 className="instructions-title">📣 Report Lost Item</h5>
          <p className="instructions-text">
            Lost something recently? Please click the <strong>"Report Lost Item"</strong> button below and fill in all details such as item name, location, description, and any specific features that can help someone identify it.
          </p>
          <p className="instructions-text">
            The more details you provide, the higher the chance of recovery.
          </p>
          <div className="d-flex justify-content-between mt-3">
            <Button variant="secondary" onClick={handleBack}>← Back</Button>
            <Button variant="danger" onClick={handleLostOpen}>📢 Report-lost-Item</Button>
          </div>
        </div>
      </div>

      <Modal show={lostOpen} onHide={handleLostClose}>
        <Modal.Header closeButton>
          <Modal.Title>Report Lost Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLostForm}>
            <Row className="mb-2">
              <Col md={6}>
                <Form.Control
                  onChange={(e) => setLostItems({ ...lostItems, itemname: e.target.value })}
                  type="text"
                  placeholder="Item Name"
                  required
                />
              </Col>
              <Col md={6}>
               <Form.Select
                  onChange={(e) => setLostItems({ ...lostItems, category: e.target.value })}
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Mobiles">electronics</option>
                  <option value="accessories">accessories</option>
                  <option value="Documents">Documents</option>
                  <option value="Wallets">Wallets</option>
                  <option value="Bags">Bags</option>
                  <option value="Laptops">Laptops</option>
                  <option value="electronics">Electronics</option>
                  <option value="Earbuds">EarBuds</option>
                  <option value="otherItems">OtherItems</option>
                  <option value="Books">Books</option>

                </Form.Select>
              </Col>
            </Row>

            <Row className="mb-2">
              <Col md={6}>
                <Form.Control
                  onChange={(e) => setLostItems({ ...lostItems, brand: e.target.value })}
                  type="text"
                  placeholder="Brand"
                />
              </Col>
              <Col md={6}>
                <Form.Control
                  onChange={(e) => setLostItems({ ...lostItems, modelNumber: e.target.value })}
                  type="text"
                  placeholder="Model/Serial Number"
                />
              </Col>
            </Row>

            <Row className="mb-2">
              <Col md={6}>
                <Form.Control
                  onChange={(e) => setLostItems({ ...lostItems, color: e.target.value })}
                  type="text"
                  placeholder="Color"
                />
              </Col>
              <Col md={6}>
                <Form.Control
                  onChange={(e) => setLostItems({ ...lostItems, location: e.target.value })}
                  required
                >
                 
                </Form.Control>
              </Col>
            </Row>

            <Row className="mb-2">
              <Col>
                <Form.Control
                  onChange={(e) => setLostItems({ ...lostItems, lostAt: e.target.value })}
                  type="text"
                  placeholder="Exact Place Lost (e.g., bus stop, market)"
                />
              </Col>
            </Row>

            <Row className="mb-2">
              <Col>
                <Form.Control
                  as="textarea"
                  rows={2}
                  onChange={(e) => setLostItems({ ...lostItems, description: e.target.value })}
                  placeholder="Description"
                />
              </Col>
            </Row>

            <Row className="mb-2">
              <Col>
                <Form.Control
                  onChange={(e) => setLostItems({ ...lostItems, distinctFeatures: e.target.value })}
                  type="text"
                  placeholder="Any Distinct Features or Marks"
                />
              </Col>
            </Row>

            <Row className="mb-2">
              <Col md={6}>
                <Form.Control
                  onChange={(e) => setLostItems({ ...lostItems, dateLost: e.target.value })}
                  type="date"
                  placeholder="Date Lost"
                />
              </Col>
              <Col md={6}>
                <Form.Control
                  onChange={(e) => setLostItems({ ...lostItems, timeLost: e.target.value })}
                  type="time"
                  placeholder="Time Lost"
                />
              </Col>
            </Row>

            <Row className="mb-2">
              <Col md={6}>
                <Form.Control
                  onChange={(e) => setLostItems({ ...lostItems, contactPhone: e.target.value })}
                  type="tel"
                  placeholder="Contact Number"
                  required
                />
              </Col>
              <Col md={6}>
                <Form.Control
                  onChange={(e) => setLostItems({ ...lostItems, email: e.target.value })}
                  type="email"
                  placeholder="Email"
                  required
                />
              </Col>
            </Row>

            <Row className="mb-2">
              <Col>
                <Form.Control
                  onChange={(e) => setLostItems({ ...lostItems, imageURL: e.target.value })}
                  type="url"
                  placeholder="Image URL (optional)"
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Control
                  onChange={(e) => setLostItems({ ...lostItems, rewardInfo: e.target.value })}
                  type="text"
                  placeholder="Reward Info (optional)"
                />
              </Col>
            </Row>

            <Modal.Footer>
              <Button type="submit" variant="primary" className="w-100">
                Post Lost Item
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LostItems;
