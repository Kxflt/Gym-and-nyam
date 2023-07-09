import React from 'react';
import './button.css';

function Button({ text }) {
  return (
    <>
      <button className='button'>{text}</button>
    </>
  );
}

export default Button;
