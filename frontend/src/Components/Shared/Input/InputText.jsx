import React from 'react';
import { string, object } from 'prop-types';

import './input.css';

function InputText({ label, register, errors, registerName, errorMessage }) {
  return (
    <>
      {/* TODOS LOS ERRORES ESTAN RECOGIDOS DE BACKEND/newUserSchema, hasta que no se comience con el registro, no lo completaria para ser conscientes de que vamos colocando. */}

      {/* Utilizamos el label para poder asociar un texto con campo de entrada en el formulario */}
      {/* el {label} mostrará la etiqueta de los errores cuando haya algún fallo a la hora de registrarse. */}
      <label>{label}</label>

      {/* Utilizamos los ...register para poder acceder a todas las propiedades del registro */}
      <input type="text" placeholder={label} {...register} />

      {errors[registerName]?.type === 'required' && (
        <span className="error">Field Required</span>
      )}

      {errors[registerName]?.type === 'pattern' && (
        <span className="error">The email address is not valid</span>
      )}

      {errors[registerName]?.type === 'maxLength' && (
        <span className="error">Max 100 characters</span>
      )}

      {errors[registerName]?.type === 'minLength' && (
        <span className="error">Minimum 8 characters</span>
      )}
      {errors[registerName]?.type === 'repeat-password' && (
        <span className="error">Password must match.</span>
      )}
      {errors[registerName]?.type === 'email' && (
        <span className="error">This email is already registered.</span>
      )}

      {errorMessage && <span className="error">{errorMessage}</span>}
    </>
  );
}
/* Definimos las propiedades */
InputText.propTypes = {
  label: string,
  register: object,
  errors: object,
  registerName: string,
  errorMessage: string,
};
export default InputText;
