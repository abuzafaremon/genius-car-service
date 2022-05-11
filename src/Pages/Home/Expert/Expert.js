import React from 'react';

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className='col-12 col-sm-6 col-md-4 g-4'>
      <div className="card">
        <img className='card-img-top' src={img} alt="" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  );
};

export default Expert;