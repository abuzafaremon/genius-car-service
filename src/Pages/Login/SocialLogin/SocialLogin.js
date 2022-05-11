import React from 'react';
import './SocialLogin.css';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook2.png';
import github from '../../../images/social/github.png';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
  const navigate = useNavigate();
  let errorElement;

  if (error || error1 || error2) {
    errorElement = <p className='text-danger'>Error: {error?.message}{error1?.message}</p>

  }

  if (loading || loading1 || loading2) {
    return <Loading />
  }

  if (user || user1 || user2) {
    navigate('/');
  }

  return (
    <div >
      <div className="divider w-75 mx-auto d-flex align-items-center justify-content-center mb-3">
        <span></span>
        <p className='px-2 my-0'>Or</p>
        <span></span>
      </div>
      {errorElement}
      <div className='social-login d-flex flex-column'>
        <button onClick={() => signInWithGoogle()} className='social-btn btn btn-info d-flex justify-content-center align-items-center mb-2'>
          <img className='social-icon' src={google} alt="" />
          <span className=''>Google Log In</span>
        </button>
        <button onClick={() => signInWithFacebook()} className='social-btn btn btn-info d-flex justify-content-center align-items-center mb-2'>
          <img className='social-icon' src={facebook} alt="" />
          <span className=''>Facebook Log In</span>
        </button>
        <button onClick={() => signInWithGithub()} className='social-btn btn btn-info d-flex justify-content-center align-items-center mb-2'>
          <img className='social-icon' src={github} alt="" />
          <span className=''>Github Log In</span>
        </button>

      </div>
    </div>
  );
};

export default SocialLogin;