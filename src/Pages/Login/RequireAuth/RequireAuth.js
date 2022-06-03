import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

  if (loading || sending) {
    return <Loading />
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  if (user.providerData[0].providerId === 'password' & !user.emailVerified) {
    return <div className='mx-auto shadow m-5 px-4 py-5 text-center border rounded' style={{ 'width': '80vw', 'maxWidth': '410px' }}>
      <h2 className='text-danger'>Your Email is not verified</h2>
      <h5 className='text-warning'>Please Verify your email address</h5>
      <button className="btn btn-primary btn-sm" onClick={async () => {
        await sendEmailVerification();
        toast('Email Sent')
      }}>Send Verification Email Again</button>
    </div>
  }
  return children;
};

export default RequireAuth;