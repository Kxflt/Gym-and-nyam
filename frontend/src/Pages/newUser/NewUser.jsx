import React from 'react';
import {
  EMAIL_REGEX,
  MAX_LENGTH_STRING,
  MIN_LENGTH_STRING,
} from '../../utils/constants';
import InputPassword from '../../Components/Shared/Input/inputPassword';
import InputText from '../../Components/Shared/Input/InputText';
import Button from '../../Components/Shared/Button/Button';
import useNewUser from './useNewUser';
import ErrorPopUp from '../../Components/Shared/errorPopUp/ErrorPopUp';
import Footer from '../../Components/Shared/Footer/Footer';

import './newUser.css';

function NewUser() {
  const {
    state: { register, errors, passwordError, errorPopUp },
    actions: { handleSubmit, onSubmit, setErrorPopUp },
  } = useNewUser();

  return (
    <>
      <div className='contenedor-registro'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputText
            label='Nombre'
            register={register('name', {
              required: true,
              maxLength: MAX_LENGTH_STRING,
              minLength: MIN_LENGTH_STRING,
            })}
            errors={errors}
            registerName='name'
          />

          {/* Hay que meter apellido en Backend */}
          <InputText
            label='Apellido'
            register={register('surname', {
              required: true,
              maxLength: MAX_LENGTH_STRING,
              minLength: MIN_LENGTH_STRING,
            })}
            errors={errors}
            registerName='surname'
          />

          <InputText
            label='Email'
            register={register('email', {
              required: true,
              pattern: EMAIL_REGEX,
            })}
            errors={errors}
            registerName='email'
          />
          {/* Hay que crear genero en backend */}
          <label>Género</label>
          <select {...register('gender', { required: true })}>
            <option value=''>--</option>
            <option value='Female'>Mujer</option>
            <option value='Male'>Hombre</option>
            <option value='Other'>Otro</option>
          </select>
          {errors.gender?.type === 'required' && (
            <span className='error'>Campo requerido</span>
          )}

          {/* Meter interes de ejercicios: cardio, etc y en base a eso mostrarle unos videos u otros al usario */}
          <label>Interés</label>
          <select {...register('interest', { required: true })}>
            <option value=''>--</option>
            <option value='Cardio'>Cardio</option>
            <option value='Musculacion'>Musculación</option>
          </select>

          <InputPassword
            label='Contraseña'
            register={register('password', {
              required: true,
              minLength: 8,
              maxLenght: 100,
            })}
            errors={errors}
            registerName='password'
          />

          <InputPassword
            label='Repite contraseña'
            register={register('repeat-password', {
              required: true,
            })}
            errors={errors}
            registerName='repeat-password'
          />

          {passwordError && (
            <span className='error'>Las contraseñas no coinciden</span>
          )}

          <div className='terms-container'>
            <input
              type='checkbox'
              {...register('terms', {
                required: true,
              })}
            />
            <label>Acepta términos y condiciones</label>
          </div>
          {errors.terms?.type === 'required' && (
            <span className='error'>Campo requerido</span>
          )}

          <Button text='Continuar' />
        </form>
      </div>
      <ErrorPopUp open={errorPopUp} onClose={() => setErrorPopUp(false)} />
      <Footer />
    </>
  );
}

export default NewUser;
