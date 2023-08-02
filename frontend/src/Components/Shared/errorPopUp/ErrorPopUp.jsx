// Importamos los prop-types y dependencias.
import { bool, func, string } from 'prop-types';
import React from 'react';

// Importamos los componentes.
import PopUp from 'reactjs-popup';

// Importamos los estilos.
import './errorPopUp.css';

function ErrorPopUp({ showErrorPopUp, setShowErrorPopUp, errorMessage }) {
    return (
        //open lanzará el mensaje y el onclose con el boton le dara la función de cerrarlo.
        <PopUp
            showErrorPopUp={showErrorPopUp}
            setShowErrorPopUp={setShowErrorPopUp}
        >
            <div className="popupmessage">
                <h2>Sorry!!!!!</h2>
                <p>{errorMessage}</p>
                <button
                    className="close"
                    onClick={() => setShowErrorPopUp(false)}
                >
                    Close
                </button>
            </div>
        </PopUp>
    );
}

ErrorPopUp.propTypes = {
    showErrorPopUp: bool.isRequired,
    setShowErrorPopUp: func.isRequired,
    errorMessage: string.isRequired,
};

export default ErrorPopUp;
