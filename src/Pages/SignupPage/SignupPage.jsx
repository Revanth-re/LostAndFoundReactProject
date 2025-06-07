import React, { useState } from 'react';
import { authentication } from '../../FireBaseConfig/Firebase';
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../../FireBaseConfig/Firebase';
import {
  createUserWithEmailAndPassword,
  updateProfile
} from 'firebase/auth';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SignUpPage.css'; // External CSS
import { toast } from 'react-toastify';
const SignUpPage = () => {
  const navigate = useNavigate();
  const [SignupDetails, setSignupDetails] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleForm = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const accountCreated = await createUserWithEmailAndPassword(
        authentication,
        SignupDetails.email,
        SignupDetails.password
      );

      await updateProfile(accountCreated.user, {
        displayName: SignupDetails.name
      });

      await setDoc(doc(db, 'users', SignupDetails.name), {
        name: SignupDetails.name,
        email: SignupDetails.email
      })

      await setDoc(doc(db, 'FoundUsers', SignupDetails.name), {
        name: SignupDetails.name,
        email: SignupDetails.email
      });

      toast.success("Signup successFull")
      navigate('/loginPage');
    } catch (err) {
      console.error(err);
      setError('Registration failed. Please check inputs or try again later.');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h3 className="signup-title">Create a New Account</h3>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleForm}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter your name"
              required
              onChange={(e) =>
                setSignupDetails({ ...SignupDetails, name: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Email address"
              required
              onChange={(e) =>
                setSignupDetails({ ...SignupDetails, email: e.target.value })
              }
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              required
              onChange={(e) =>
                setSignupDetails({ ...SignupDetails, password: e.target.value })
              }
            />
          </Form.Group>

          <Button className="signup-btn" type="submit">
            Sign Up
          </Button> <br />
          <span>i already have an account </span>
          <a href="/loginPage">login</a>
        </Form>
      </div>
    </div>
  );
};

export default SignUpPage;
