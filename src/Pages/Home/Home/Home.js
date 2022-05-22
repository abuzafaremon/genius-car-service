import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Genius Car Service</title>
      </Helmet>
      <Banner></Banner>
      <Services></Services>
      <Experts></Experts>
    </div>
  );
};

export default Home;