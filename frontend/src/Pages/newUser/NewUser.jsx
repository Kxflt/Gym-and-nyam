import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  EMAIL_REGEX,
  MAX_LENGTH_STRING,
  MIN_LENGTH_STRING,
  PASSWORD_REGEX,
} from '../../utils/constants';
import InputPassword from '../../Components/Shared/Input/inputPassword';
import InputText from '../../Components/Shared/Input/InputText';
import Button from '../../Components/Shared/Button/Button';
import useNewUser from './useNewUser';
import ErrorPopUp from '../../Components/Shared/errorPopUp/ErrorPopUp';
import Footer from '../../Components/Shared/Footer/Footer';

import './newUser.css';

function NewUser() {
  const navigate = useNavigate(); // Inicializa useNavigate

  const {
    state: { register, errors, passwordError, errorPopUp, formErrors },
    actions: { handleSubmit, onSubmit, setErrorPopUp, setFormErrors },
  } = useNewUser();

  const handleFormSubmit = async (data) => {
    // Lógica para manejar el envío del formulario y redirección
    const errors = await onSubmit(data);

    setFormErrors(errors); // Set the form errors received from onSubmit
    if (!errors) {
      navigate('/login'); // Redirige a la ruta '/login' después de enviar el formulario
    }
  };

  return (
    <>
      <div className="contenedor-registro">
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <InputText
            label="Name"
            register={register('name', {
              required: true,
              maxLength: MAX_LENGTH_STRING,
              minLength: MIN_LENGTH_STRING,
            })}
            errors={errors}
            registerName="name"
          />

          {/* Hay que meter apellido en Backend */}
          {/*  <InputText 
            label="Apellido"
            register={register('surname', {
              required: true,
              maxLength: MAX_LENGTH_STRING,
              minLength: MIN_LENGTH_STRING,
            })}
            errors={errors}
            registerName='surname'
          />  */}

          <InputText
            label="Email"
            register={register('email', {
              required: true,
              pattern: EMAIL_REGEX,
            })}
            errors={errors}
            registerName="email"
            errorMessage={
              formErrors && formErrors.userExists
                ? formErrors.userExists // Display the userExists error message from formErrors
                : undefined
            }
            /* errorMessage={errors.email && errors.email.message} */
          />
          {/* Hay que crear genero en backend */}
          {/* <label>Género</label>
          <select {...register('gender', { required: true })}>
            <option value=''>--</option>
            <option value='Female'>Mujer</option>
            <option value='Male'>Hombre</option>
            <option value='Other'>Otro</option>
          </select>
          {errors.gender?.type === 'required' && (
            <span className='error'>Campo requerido</span>
          )}   */}

          {/* Meter interes de ejercicios: cardio, etc y en base a eso mostrarle unos videos u otros al usario */}
          {/*  <label>Interés</label>
          <select {...register('interest', { required: true })}>
            <option value=''>--</option>
            <option value='Cardio'>Cardio</option>
            <option value='Musculacion'>Musculación</option>
            <option value='Desconocido'>Desconocido</option>
             {errors.interest?.type === 'required' && (
            <span className='error'>Campo requerido</span>
          )}
            
          </select>   */}

          <InputPassword
            label="Password"
            register={register('password', {
              required: true,
              minLength: 8,
              maxLenght: 100,
              pattern: PASSWORD_REGEX,
            })}
            errors={errors}
            registerName="password"
          />

          <InputPassword
            label="Repeat password"
            register={register('repeat-password', {
              required: true,
              pattern: PASSWORD_REGEX,
            })}
            errors={errors}
            registerName="repeat-password"
          />
          {formErrors && formErrors.userExists && (
            <span className="error">{formErrors.userExists}</span>
          )}

          {passwordError && (
            <span className="error">Las contraseñas no coinciden</span>
          )}

          <div className="terms-container">
            <input
              type="checkbox"
              {...register('terms', {
                required: true,
              })}
            />
            <label>Accept Terms and Conditions</label>
          </div>
          {errors.terms?.type === 'required' && (
            <span className="error">Campo requerido</span>
          )}

          <Button text="Continue" />
        </form>
      </div>
      <ErrorPopUp
        open={errorPopUp}
        onClose={() => setErrorPopUp(false)}
        errorMessage={
          formErrors
            ? formErrors.userExists
              ? 'Este email ya está en uso'
              : formErrors.serverError
              ? 'Error al registrar el usuario'
              : ''
            : ''
        }
      />

      <Footer />
    </>
  );
}

export default NewUser;
