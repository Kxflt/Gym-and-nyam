import React from 'react';
import './input.css';
function InputInfo() {
  return (
    <>
      <label htmlFor='info' className='info-label'></label>
      <input type='text' className='info' />
    </>
  );
}

export default InputInfo;
