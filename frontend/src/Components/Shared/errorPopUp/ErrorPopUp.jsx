import React from 'react';
import PopUp from 'reactjs-popup';
import { bool, func, string } from 'prop-types';
import './errorPopUp.css';

function ErrorPopUp({ open, onClose, errorMessage }) {
  return (
    //open lanzará el mensaje y el onclose con el boton le dara la función de cerrarlo.
    <PopUp open={open} onClose={onClose}>
      <div className="popupmessage">
        <h2>Sorry!!!!!</h2>
        <p>{errorMessage}</p>
        <button className="close" onClick={onClose}>
          Close
        </button>
      </div>
    </PopUp>
  );
}

ErrorPopUp.propTypes = {
  open: bool,
  onClose: func,
  errorMessage: string,
};

export default ErrorPopUp;
