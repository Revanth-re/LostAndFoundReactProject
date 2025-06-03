import React, { useState, useEffect } from 'react';
import { Button, Modal, Row, Col, Form } from 'react-bootstrap';
import { collection, getDocs, doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../../FireBaseConfig/Firebase';
import "./LostItemClaimForm.css";

const LostItemClaimForm = () => {
  const [userDocId, setUserDocId] = useState("");
  const [open, setOpen] = useState(false);
  const [claim, setClaimForm] = useState({
    Fullname: "",
    Contact: "",
    email: "",
    DescriptionPlace: "",
    image: "",
  });

  useEffect(() => {
    const fetchUserDocId = async () => {
      const storedData = localStorage.getItem("ClaimLosts");
     

      const parsedData = JSON.parse(storedData);
      // if (!parsedData || !parsedData[0]?.email) return;

      const userEmail = parsedData[0].email;

      const snapshot = await getDocs(collection(db, "FoundUsers"))
      // console.log(snapshot);
      
      snapshot.forEach((docSnap) => {
        const userItems = docSnap.data().FoundItems || [];
        console.log(docSnap.data().FoundItems)
        
        const foundItem = userItems.find((item) => item.email === userEmail );
        console.log(foundItem);
        if (foundItem) {
          
          
          setUserDocId(docSnap.id);
          console.log(docSnap.id); // Correct document ID
        }
        // console.log(docSnap.id);
        
      });
    };


    fetchUserDocId();
  }, []);

  const handleClick = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const fetchData = async (e) => {
    e.preventDefault();

    try {
      if (!userDocId) {
        alert("User document not found.");
        return;
      }

      const docRef = doc(db, "FoundUsers",userDocId );

      await updateDoc(docRef, {
        Data: arrayUnion(claim)
      });

      setClaimForm({
        Fullname: "",
        Contact: "",
        email: "",
        DescriptionPlace: "",
        image: "",
      });

      alert("Verification details submitted successfully.");
      handleClose();
    } catch (error) {
      console.error("Error submitting claim:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <div className="claim-card">
        <h3 className="claim-title">⚠️ Verification Required</h3>
        <p className="claim-text">
          We're sorry for the inconvenience, but we must verify your identity before proceeding. This ensures the rightful owner is reunited with the lost item.
        </p>
        <p className="claim-text">
          Kindly fill in your details in the next step to continue.
        </p>
        <h4 className="claim-subtitle">
          Are you sure you want to proceed with this process?
        </h4>
        <Button variant="primary" size="lg" onClick={handleClick}>
          ✅ Yes, I Want to Proceed
        </Button>
      </div>

      <Modal show={open} onHide={handleClose} centered>
        <Modal.Header closeButton />
        <Modal.Body>
          <Form onSubmit={fetchData} className="claimer-form mt-4 p-4 shadow-lg rounded">
            <h4 className="mb-4 text-center text-primary fw-bold">
               Proceed
            </h4>
            <p className="text-muted text-center mb-4">
              Please provide your details for verification. This helps us ensure the item is returned to the rightful owner.
            </p>

            <Form.Group controlId="name" className="mb-3">
              <Form.Label className="fw-semibold">Your Full Name</Form.Label>
              <Form.Control
                type="text"
                required
                value={claim.Fullname}
                onChange={(e) => setClaimForm({ ...claim, Fullname: e.target.value })}
                placeholder="Enter your full name"
              />
            </Form.Group>

            <Form.Group controlId="phone" className="mb-3">
              <Form.Label className="fw-semibold">Contact Number</Form.Label>
              <Form.Control
                type="tel"
                required
                value={claim.Contact}
                onChange={(e) => setClaimForm({ ...claim, Contact: e.target.value })}
                placeholder="e.g., +91-XXXXXXXXXX"
              />
            </Form.Group>

            <Form.Group controlId="email" className="mb-3">
              <Form.Label className="fw-semibold">Email Address</Form.Label>
              <Form.Control
                type="email"
                required
                value={claim.email}
                onChange={(e) => setClaimForm({ ...claim, email: e.target.value })}
                placeholder="you@example.com"
              />
            </Form.Group>

            <Form.Group controlId="note" className="mb-3">
              <Form.Label className="fw-semibold">
                Where did you find the item?
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={claim.DescriptionPlace}
                onChange={(e) =>
                  setClaimForm({ ...claim, DescriptionPlace: e.target.value })
                }
                placeholder="Give details such as location, time, description, etc."
              />
            </Form.Group>

            <Form.Group controlId="image" className="mb-4">
              <Form.Label className="fw-semibold">
                Can you please provide a current item image
              </Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setClaimForm({ ...claim, image: reader.result }); // base64 image
                    };
                    reader.readAsDataURL(file);
                  }
                }}
              />
            </Form.Group>

            <div className="d-grid">
              <Button variant="success" type="submit">
                Submit Verification
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LostItemClaimForm;
