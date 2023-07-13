import React from 'react';
import { func, string, bool } from "prop-types";
import classnames from "classnames";
import './button.css';

function Button({
  onClick,
  text = "Continuar",
  error = false,
  isSelected = false,
}) {
  return (
    <>
      <button
        onClick={onClick}
        className={classnames("button", {
          "button-error": error,
          "button-selected": isSelected,
        })}
      >
        <span>{text}</span>
      </button>
    </>
  );
}

Button.propTypes = {
  onClick: func,
  text: string,
  error: bool,
  isSelected: bool,
};

export default Button;