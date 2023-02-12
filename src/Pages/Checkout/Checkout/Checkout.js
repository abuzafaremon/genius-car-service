import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user] = useAuthState(auth);

  const handlePlaceOrder = event => {
    event.preventDefault();
    const order = {
      name: user.displayName,
      email: user.email,
      service: service.name,
      serviceId: serviceId,
      address: event.target?.address?.value,
      phone: event.target?.phone?.value
    }
    axios.post('https://genius-car-service-server-zafaremon20.vercel.app/order', order)
      .then(response => {
        const { data } = response;
        if (data.insertedId) {
          toast('Your order id booked!!!');
        }
      })
  }
  return (
    <div className='text-center m-5 w-50 mx-auto'>
      <Helmet>
        <title>Checkout - Genius Car service</title>
      </Helmet>
      <h2>Checkout</h2>
      <h3>Please Order: {service.name}</h3>
      <form onSubmit={handlePlaceOrder}>
        <input className='form-control w-100 mb-2' type="text" name="name" id="name" value={user?.displayName} placeholder='Name' required disabled />
        <input className='form-control w-100 mb-2' type="email" value={user?.email} name="email" id="email" placeholder='Your Email' required disabled />
        <input className='form-control w-100 mb-2' type="text" value={service.name} name="service" id="service" placeholder='Service' required />
        <input className='form-control w-100 mb-2' type="text" name="address" id="address" placeholder='Address' required />
        <input className='form-control w-100 mb-2' type="number" name="phone" id="phone" placeholder='Phone' required />
        <input className='form-control btn btn-primary' type="submit" value="Place Order" />
      </form>
    </div>
  );
};

export default Checkout;