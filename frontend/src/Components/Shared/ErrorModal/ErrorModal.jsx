import React, { useEffect, useRef } from 'react';
import { func, string } from 'prop-types';
import './ErrorModal.css';

const ErrorModal = ({ errorMessage, setErrorMessage }) => {
    const timeoutRef = useRef(null);

    // Eliminamos el modal a los 5 segundos.
    useEffect(() => {
        if (errorMessage) {
            clearTimeout(timeoutRef.current);

            timeoutRef.current = setTimeout(() => {
                setErrorMessage('');
            }, 5000);

            return () => {
                setErrorMessage('');
            };
        }
    }, [errorMessage, setErrorMessage]);

    return (
        errorMessage && (
            <div className="error-modal">
                <p>Error: {errorMessage}</p>
            </div>
        )
    );
};

ErrorModal.propTypes = {
    errorMessage: string.isRequired,
    setErrorMessage: func.isRequired,
};

export default ErrorModal;
