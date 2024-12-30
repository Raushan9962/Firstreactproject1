import React from 'react';
import './Passing.css';

const Passing1 = (props) => {

    const { Data: date, title, amount } =props ;

  const month = date.toLocaleString('en-us', { month: 'long' });
  const day = date.toLocaleString('en-us', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <div className='Passing-item'>
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className="passing-item_description">
        <h2>{title}</h2>
        <div className='Passing-item_price'>${amount}</div>
      </div>
    </div>
  );
};

export default Passing1;
