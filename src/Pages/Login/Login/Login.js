import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import './Login.css';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';


const Login = () => {
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error
  ] = useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';

  const handleSubmit = event => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);

    // emailRef.current.value = '';
    // passwordRef.current.value = '';
  }

  const handleShowPassword = () => {
    const pass = passwordRef.current;
    if (pass.type === "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  }

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
    auth
  );

  if (user) {
    navigate(from, { replace: true });
  }
  if (loading || sending) {
    return <Loading />
  }
  let errorElement;
  if (error) {
    errorElement =

      <p className='text-danger'>Error: {error?.message}</p>

  }

  const navigateRegister = () => {
    navigate('/register');
  }

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast('Email Sent');
    }
    else {
      toast('Please enter your email address');
    }
  }
  return (
    <div className='login container w-50 mx-auto m-5 shadow'>
      <Helmet>
        <title>Login - Genius Car Service</title>
      </Helmet>
      <h2 className='text-center text-primary mb-2'>Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" >
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" id="email" required />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Control ref={passwordRef} type="password" placeholder="Password" id="password" required />
          <Form.Check onClick={handleShowPassword} type="checkbox" label="Show Password" />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button className='w-100' variant="primary" type="submit">
          Login
        </Button>
      </Form>
      {errorElement}
      <p>Forgot Password? <button className='btn btn-link mb-1 text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
      <p>New to genius car? <Link to='/register' className='text-primary text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;