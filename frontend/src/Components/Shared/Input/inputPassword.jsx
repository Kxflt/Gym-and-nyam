import React from "react";
import { string, object } from "prop-types";
import "./input.css";

function InputPassword({ label, register, errors, registerName }) {
  return (
    <>
      <label>{label}</label>
      <input type="password" {...register} />
      {errors[registerName]?.type === "required" && (
        <span className="error">Campo requerido</span>
      )}
      {errors[registerName]?.type === "minLength" && (
        <span className="error">Mínimo 8 caracteres</span>
      )}
    </>
  );
}

InputPassword.propTypes = {
  label: string,
  register: object,
  errors: object,
  registerName: string,
};

export default InputPassword;
