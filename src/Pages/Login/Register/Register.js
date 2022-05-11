import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Register.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();
  const passwordRef = useRef();
  const navigateLogin = () => {
    navigate('/login');
  }
  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checked;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    alert('Updated profile');
    navigate('/');
  }
  if (user) {
    console.log('user', user);
  }
  if (loading || updating) {
    return <Loading />
  }
  const handleShowPassword = () => {
    const pass = passwordRef.current;
    if (pass.type === "password") {
      pass.type = "text";
    } else {
      pass.type = "password";
    }
  }
  return (
    <div className='register container mx-auto w-50 m-5'>
      <h2 className='text-primary text-center mb-2'>Please Register</h2>
      <form onSubmit={handleRegister}>
        <input className='form-control mb-3' type="name" name="name" id="name" placeholder='Your Name' required />
        <div className="mb-3">
          <input className='form-control' type="email" name="email" id="email" placeholder='Your Email' required />
          <span><small>We'll never share your email with anyone else.</small></span>
        </div>
        <div className="mb-3">
          <input className='form-control' ref={passwordRef} type="password" name="password" id="password" placeholder='Password' required />
          <div className='d-flex align-items-center' style={{ 'gap': '5px' }}>
            <input onClick={handleShowPassword} type="checkbox" name='showPassword' id='showPassword' />
            <label htmlFor='showPassword'> Show Password</label>
          </div>
        </div>
        <div className='d-flex align-items-center' style={{ 'gap': '5px' }}>
          <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
          <label className={agree ? 'text-success' : 'text-danger'} htmlFor='terms'>Accept Terms and Condition</label>
        </div>
        <input className='btn btn-primary btn-sm mb-3 w-100' type="submit" value="Register" disabled={!agree} />
      </form>
      <p>Already have an account? <Link to='/login' className='text-primary text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;