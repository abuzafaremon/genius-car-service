import React from 'react';
import './NotFound.css';
import _404 from '../../../images/404.jpg';

const NotFound = () => {
  return (
    <div className='not-found'>
      <img src={_404} alt="" />
    </div>
  );
};

export default NotFound;