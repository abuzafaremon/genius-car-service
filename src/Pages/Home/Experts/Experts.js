import React from 'react';
import './Experts.css'

import expert1 from '../../../images/experts/expert-1.png';
import expert2 from '../../../images/experts/expert-2.png';
import expert3 from '../../../images/experts/expert-3.png';
import expert4 from '../../../images/experts/expert-4.png';
import expert5 from '../../../images/experts/expert-5.png';
import expert6 from '../../../images/experts/expert-6.png';
import Expert from '../Expert/Expert';

const experts = [
  { id: 1, name: 'Will Smith', img: expert1 },
  { id: 2, name: 'Willson', img: expert2 },
  { id: 3, name: 'Dwayne Rock', img: expert3 },
  { id: 4, name: 'C. Ronaldo', img: expert4 },
  { id: 5, name: 'Neymar Jr', img: expert5 },
  { id: 6, name: 'Sara Daniyel', img: expert6 },
]

const Experts = () => {
  return (
    <div id='experts' className='container py-3'>
      <h2 className='text-center'>Our Experts</h2>
      <div className="row m-3">
        {
          experts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
        }
      </div>
    </div>
  );
};

export default Experts;