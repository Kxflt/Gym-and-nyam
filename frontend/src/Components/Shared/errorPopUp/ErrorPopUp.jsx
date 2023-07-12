import PopUp from 'reactjs-popup';
import { bool, func } from 'prop-types';
import './errorPopUp.css';

function ErrorPopUp(open, onClose) {
  return (
    //open lanzará el mensaje y el onclose con el boton le dara la función de cerrarlo.
    <PopUp open={open} onClose={onClose}>
      <div className='popupmessage'>
        <h2>Lo sentimos</h2>
        <p>Inténtelo de nuevo más tarde</p>
        <button className='close' onClick={onClose}>
          Aceptar
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
