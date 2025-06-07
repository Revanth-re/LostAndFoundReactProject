import React, { use, useEffect, useState } from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import UserDashBoard from '../UserDashboard/UserDashBoard';
import { Routes,Route } from 'react-router-dom';
import { doc,updateDoc,arrayUnion,collection } from 'firebase/firestore';
import { db } from '../FireBaseConfig/Firebase';
import { getDocs } from 'firebase/firestore';
const ReviewComp = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: ''
  });

  const userdetails=JSON.parse(localStorage.getItem("reactProjectUsers"))
  console.log(userdetails);
  
// useEffect(()=>{
const fetchingReviews= async()=>{
    

              const RecruiterDocRef = doc(db, "FoundUsers", userdetails.displayName);
              console.log(RecruiterDocRef);
              
              
              await updateDoc(RecruiterDocRef, {
                Reviews: arrayUnion(formData)
              })
              alert("review-submitted")

    
}

// },[])
  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews(prev =>[...prev, formData]);
        fetchingReviews()

    // setFormData({ name: '', email: '', feedback: '', rating: '' })
  };
  
        useEffect(()=>{

            const fetchingData= async()=>{
                 const FoundDocs = await getDocs(collection(db, "FoundUsers"));
      let AllReviews = []
          FoundDocs.docs.forEach((doc) => {
            const individualItems = doc.data().Reviews || [];
            individualItems.forEach((item) =>
              AllReviews.push(item)
            );
          });
          setReviews(AllReviews)
            }
            fetchingData()
        },[])

  return (
    <Container className="my-5">
        {/* <UserDashBoard/> */}
             <h2 className="text-center mb-4">📝 Share Your Experience</h2>

      {/* Review Form */}
      <Form onSubmit={handleSubmit} className="mb-5 p-4 shadow-sm bg-light rounded">
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            required
            // value={formData.name}
            onChange={(e)=>setFormData({...formData,name:e.target.value})}


/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Your Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            required
            // value={formData.email}
            onChange={(e)=>setFormData({...formData,email:e.target.value})}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="rating">
          <Form.Label>Rating (1–5)</Form.Label>
          <Form.Select
            name="rating"
            required
            value={formData.rating}
            onChange={(e)=>setFormData({...formData,rating:e.target.value})}

>
            <option value="">Select rating</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="feedback">
          <Form.Label>Your Review</Form.Label> <br />
          <textarea
         
        //  type='textarea'
        style={{width:"83vw",borderRadius:"5px"}}
         rows={3}
        //  cols={10}
        placeholder='share your feed back'
                     onChange={(e)=>setFormData({...formData,feedback:e.target.value})}

/>
        </Form.Group>

        <div className="text-center">
          <Button type="submit" variant="primary">Submit Review</Button>
        </div>
      </Form>


<Container>
  <Row>
    {reviews.map((x, index) => (
      <Col key={index} md={6} lg={4} className="mb-4">
        <Card className="shadow-sm h-100">
          <Card.Body>
            <Card.Title className="text-primary">{x.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{x.email}</Card.Subtitle>
            <Card.Text>
              <strong>Rating:</strong> ⭐ {x.rating} / 5
            </Card.Text>
            <Card.Text>
              <strong>Feedback:</strong> {x.feedback}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>
      {/* Display Reviews */}
      
    </Container>
  );
};

export default ReviewComp;
