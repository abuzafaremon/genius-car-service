import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';


const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('https://frozen-eyrie-09644.herokuapp.com/service')
      .then(res => res.json())
      .then(data => setServices(data));
  }, [])
  return (
    <div id='services' className='container py-3'>
      <h3 className='text-center'>Services: {services.length}</h3>
      <div className="row">
        {
          services.map(service => <Service key={service._id} service={service}></Service>)
        }
      </div>
    </div>
  );
};

export default Services;