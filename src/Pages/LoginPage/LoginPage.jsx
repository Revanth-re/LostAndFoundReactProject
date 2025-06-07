import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import { authentication } from '../../FireBaseConfig/Firebase';
import './LoginPage.css'; // External CSS
import { toast } from 'react-toastify';



const LoginPage = () => {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const userCredential = await signInWithEmailAndPassword(
        authentication,
        loginDetails.email,
        loginDetails.password
      );

      const user = userCredential.user;

      localStorage.setItem(
        'reactProjectUsers',
        JSON.stringify({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
      );
toast.success("You-are-Logged-in");
      navigate('/userdashBoard');
    } catch (err) {
      console.error('Login error:', err);
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h3 className="login-title">Login to Your Account</h3>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Control
              type="email"
              placeholder="Email address"
              required
              value={loginDetails.email}
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, email: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              required
              value={loginDetails.password}
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, password: e.target.value })
              }
            />
          </Form.Group>
          <Button className="login-btn" type="submit">
            Login
          </Button>
             <span>i dont have an account </span>
          <a href="/signup">signup</a>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
