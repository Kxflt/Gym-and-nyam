import React from 'react';
import PopUp from 'reactjs-popup';
import { bool, func } from 'prop-types';
import './errorPopUp.css';

function ErrorPopUp({ open, onClose }) {
  return (
    //open lanzará el mensaje y el onclose con el boton le dara la función de cerrarlo.
    <PopUp open={open} onClose={onClose}>
      <div className='popupmessage'>
        <h2>Sorry!!!!!</h2>
        <p>Try again in a few minutes</p>
        <button className='close' onClick={onClose}>
          Close
        </button>
      </div>
    </PopUp>
  );
}

ErrorPopUp.propTypes = {
  open: bool,
  onClose: func,
};

export default ErrorPopUp;
