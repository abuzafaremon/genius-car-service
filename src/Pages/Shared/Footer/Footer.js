import React from 'react';
import './Footer.css'

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className='text-center bg-dark text-light py-2'>
      <p className='m-0'><small>Copyright &copy; {year} All right reserved</small></p>
    </footer>
  );
};

export default Footer;