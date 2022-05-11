import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div className='text-center m-5'>
      <h2>Service Detail: {serviceId}</h2>
      <div className='text-center'>
        <Link to='/checkout'>
          <button className='btn btn-sm btn-primary'>Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;