import React from 'react'
import { useState} from 'react';
import { arrayUnion,doc,updateDoc } from 'firebase/firestore';
 import { Button,Form,Modal,Row,Col } from 'react-bootstrap';
 import { db } from '../../FireBaseConfig/Firebase';
 import { useNavigate } from 'react-router-dom';
 import "./FoundItems.css"
// import { useNavigate } from 'react-router-dom';
const FoundItems = () => {
    let navigate=useNavigate()
   const handleBack = () => {

    navigate("/userdashBoard");

 
  };
      const [FoundItems, setFoundItems] = useState({
        itemname: "",
        location: "",
        description: "",
      });
    
      const [foundOpen, setFoundOpen] = useState(false);

    
      // Get user details from localStorage
      const DatafromLs = JSON.parse(localStorage.getItem("reactProjectUsers"));
      console.log(DatafromLs)

      
      const userdetails = DatafromLs.user.displayName;
      console.log(userdetails);
      const handleFoundOpen = () => setFoundOpen(true)
      const handleFoundClose = () => setFoundOpen(false);
    
  
    
      const handleFoundForm = async (e) => {
        e.preventDefault();
    
        if (!userdetails) {
          alert("User not logged in or localStorage is corrupted.");
          return;
        }
    
        try {
          const RecruiterDocRef = doc(db, "FoundUsers", userdetails);
          await updateDoc(RecruiterDocRef, {
            FoundItems: arrayUnion(FoundItems),
          });
          alert("Found item posted");
          handleFoundClose();
        } catch (err) {
          console.error("Error posting found item:", err);
        }
      };
    
     
    
  return (
    <div>
      {/* <h1>Found items</h1> */}
      <div className="container mt-4">
            <div className="mb-3">
           
           <div className="found-items-page">
      <h1 className="page-title">📦 Found Items</h1>

      <div className="instructions-card">
        <h5 className="instructions-title">📝 Report Found Item</h5>
        <p className="instructions-text">
          If you've found a lost item, kindly click the <strong>"Report Found Item"</strong> button below. Fill in all possible details like item name, location, description, and any unique identifiers to help the rightful owner claim it.
        </p>
        <p className="instructions-text">
          Please be as accurate as possible when reporting items to ensure successful retrieval by the owner.
        </p>
  <div className="d-flex justify-content-between mt-3">
          <Button variant="secondary" onClick={handleBack}>
            ← Back
          </Button>

          <Button variant="success" onClick={handleFoundOpen}>
            🚨 Report-found-Item
          </Button>
        </div>
      </div>
    </div>
            </div>
      
          
      
      <Modal show={foundOpen} onHide={handleFoundClose}>
        <Modal.Header closeButton>
          <Modal.Title>Report Found Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFoundForm}>
            <Row className="mb-2">
              <Col md={6}>
                <Form.Control
                  onChange={(e) => setFoundItems({ ...FoundItems, itemname: e.target.value })}
                  type="text"
                  placeholder="Item Name"
                  required
                />
              </Col>
              <Col md={6}>
                <Form.Control
                  onChange={(e) => setFoundItems({ ...FoundItems, category: e.target.value })}
                  type="text"
                  placeholder="Category"
                />
              </Col>
            </Row>
      
            <Row className="mb-2">
              <Col md={6}>
                <Form.Control
                  onChange={(e) => setFoundItems({ ...FoundItems, brand: e.target.value })}
                  type="text"
                  placeholder="Brand"
                />
              </Col>
              <Col md={6}>
                <Form.Control
                  onChange={(e) => setFoundItems({ ...FoundItems, modelNumber: e.target.value })}
                  type="text"
                  placeholder="Model/Serial Number"
                />
              </Col>
            </Row>
      
            <Row className="mb-2">
              <Col md={6}>
                <Form.Control
                  onChange={(e) => setFoundItems({ ...FoundItems, color: e.target.value })}
                  type="text"
                  placeholder="Color"
                />
              </Col>
              <Col md={6}>
                <Form.Select
                  onChange={(e) => setFoundItems({ ...FoundItems, location: e.target.value })}
                  required
                >
                  <option value="">Select Location</option>
                  <option>Hyderabad</option>
                  <option>Karimnagar</option>
                  <option>Warangal</option>
                </Form.Select>
              </Col>
            </Row>
      
            <Row className="mb-2">
              <Col>
                <Form.Control
                  onChange={(e) => setFoundItems({ ...FoundItems, foundAt: e.target.value })}
                  type="text"
                  placeholder="Exact Place Found (e.g., park bench, train)"
                />
              </Col>
            </Row>
      
            <Row className="mb-2">
              <Col>
                <Form.Control
                  as="textarea"
                  rows={2}
                  onChange={(e) => setFoundItems({ ...FoundItems, description: e.target.value })}
                  placeholder="Description"
                />
              </Col>
            </Row>
      
            <Row className="mb-2">
              <Col>
                <Form.Control
                  onChange={(e) => setFoundItems({ ...FoundItems, distinctFeatures: e.target.value })}
                  type="text"
                  placeholder="Any Distinct Features or Marks"
                />
              </Col>
            </Row>
      
            <Row className="mb-2">
              <Col md={6}>
                <Form.Control
                  onChange={(e) => setFoundItems({ ...FoundItems, dateFound: e.target.value })}
                  type="date"
                  placeholder="Date Found"
                />
              </Col>
              <Col md={6}>
                <Form.Control
                  onChange={(e) => setFoundItems({ ...FoundItems, timeFound: e.target.value })}
                  type="time"
                  placeholder="Time Found"
                />
              </Col>
            </Row>
      
            <Row className="mb-2">
              <Col md={6}>
                <Form.Control
                  onChange={(e) => setFoundItems({ ...FoundItems, contactPhone: e.target.value })}
                  type="tel"
                  placeholder="Contact Number"
                  required
                />
              </Col>
              <Col md={6}>
                <Form.Control
                  onChange={(e) => setFoundItems({ ...FoundItems, email: e.target.value })}
                  type="email"
                  placeholder="Email"
                  required
                />
              </Col>
            </Row>
      
            <Row className="mb-2">
              <Col>
                <Form.Control
                  onChange={(e) => setFoundItems({ ...FoundItems, imageURL: e.target.value })}
                  type="url"
                  placeholder="Image URL (optional)"
                />
              </Col>
            </Row>
      
            <Row className="mb-3">
              <Col>
                <Form.Control
                  onChange={(e) => setFoundItems({ ...FoundItems, storageLocation: e.target.value })}
                  type="text"
                  placeholder="Where is the item stored now? (optional)"
                />
              </Col>
            </Row>
      
            <Modal.Footer>
              <Button type="submit" variant="primary" className="w-100">
                Post Found Item
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
      
            </div>
    </div>

  )
}

export default FoundItems
