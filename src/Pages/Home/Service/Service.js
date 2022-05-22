import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
  const { _id, name, img, description, price } = service;
  const navigate = useNavigate();
  const navigateToServiceDetail = id => {
    navigate(`/service/${id}`);
  }
  return (
    <div className='col-12 col-sm-6 col-md-4 g-3'>
      <div className='service text-center pb-2'>
        <img width='100%' className='img-fluid' src={img} alt="" />
        <h3>{name}</h3>
        <p>Price: {price}</p>
        <p><small>{description}</small></p>
        <button onClick={() => { navigateToServiceDetail(_id) }} className='btn btn-sm btn-primary'>Book:{name}</button>
      </div>
    </div>
  );
};

export default Service;