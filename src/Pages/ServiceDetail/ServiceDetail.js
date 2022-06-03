import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  return (
    <div className='text-center m-5'>
      <h2>Service Detail: {serviceId}</h2>
      <div className='text-center'>
        <Link to={`/checkout/${serviceId}`}>
          <button className='btn btn-sm btn-primary'>Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;