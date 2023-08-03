// Importamos los prop-types y dependencias.
import { func, string, bool } from 'prop-types';
import React from 'react';
import classnames from 'classnames';

// Importamos los estilos.
import './button.css';

function Button({
    onClick,
    text = 'Continuar',
    error = false,
    isSelected = false,
    disabled,
}) {
    return (
        <button
            onClick={onClick}
            className={classnames('button', {
                'button-error': error,
                'button-selected': isSelected,
            })}
            disabled={disabled}
        >
            <span>{text}</span>
        </button>
    );
}

Button.propTypes = {
    onClick: func,
    text: string,
    error: bool,
    isSelected: bool,
};

export default Button;
