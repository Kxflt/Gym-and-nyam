import React from 'react';
import { EMAIL_REGEX, MAX_LENGTH_STRING } from '../../utils/constants';
import InputPassword from '../../Components/Shared/Input/inputPassword';
import InputText from '../../Components/Shared/Input/InputText';
import InputInfo from '../../Components/Shared/Input/inputInfo';
import Button from '../../Components/Shared/Button/Button';
import './newUser.css';

function NewUser() {
  return (
    <>
      <div className='contenedor'>
        <div>
          <label htmlFor='info' className='info-label'>
            Nombre
          </label>
          <InputInfo />
        </div>

        <div>
          <label htmlFor='info' className='info-label'>
            Apellido
          </label>
          <InputInfo />
        </div>
        <div>
          <label htmlFor='info' className='info-label'>
            Email
          </label>
          <InputText />
        </div>
        <div>
          <label htmlFor='info' className='info-label'>
            Contraseña
          </label>
          <InputPassword />
        </div>
        <div>
          <label htmlFor='info' className='info-label'>
            Repite contraseña
          </label>
          <InputPassword />
        </div>
      </div>

      <Button text='Enviar' />
    </>
  );
}

export default NewUser;
