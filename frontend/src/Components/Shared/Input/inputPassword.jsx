import React from 'react';
import { string, object } from 'prop-types';

import './input.css';

function InputPassword({ label, register, errors, registerName }) {
  return (
    <>
      {/* TODOS LOS ERRORES ESTAN RECOGIDOS DE BACKEND/newUserSchema, hasta que no se comience con el registro, no lo completaria para ser conscientes de que vamos colocando. */}

      {/* Utilizamos el label para poder asociar un texto con campo de entrada en el formulario */}
      {/* el {label} mostrará la etiqueta de los errores cuando haya algún fallo a la hora de registrarse. */}
      <label>{label}</label>

      {/* Utilizamos los ...register para poder acceder a todas las propiedades del registro */}
      <input type='password' placeholder='Password' {...register} />

      {errors[registerName]?.type === 'required' && (
        <span className='error'>Campo requerido.</span>
      )}

      {errors[registerName]?.type === 'pattern' && (
        <span className='error'>
          La contraseña tiene que contener una letra mayúscula, una minúscula,
          un número y un carácter especial.
        </span>
      )}
      {errors[registerName]?.type === 'maxLength' && (
        <span className='error'>Máximo 100 carácteres.</span>
      )}

      {errors[registerName]?.type === 'minLength' && (
        <span className='error'>Mínimo 8 carácteres.</span>
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