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
import NavBar from '../../Components/nav-bar/NavBar';

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

          <InputText
            label="Surname"
            register={register('surname', {
              required: true,
              maxLength: MAX_LENGTH_STRING,
              minLength: MIN_LENGTH_STRING,
            })}
            errors={errors}
            registerName="surname"
          />

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
          <div>
            <label>Gender:</label>
            <select {...register('gender', { required: true })}>
              <option value="">--</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender?.type === 'required' && (
              <span className="error">Field required</span>
            )}
          </div>
          <div>
            <label>Interest:</label>
            <select {...register('interest', { required: true })}>
              <option value="">--</option>
              <option value="Cardio">Cardio</option>
              <option value="Bodybuilding">Bodybuilding</option>
              <option value="Unknown">N/A</option>
            </select>
            {errors.interest?.type === 'required' && (
              <span className="error">Field required</span>
            )}
          </div>

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
            <span className="error">Passwords don't match</span>
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
            <span className="error">Field required</span>
          )}

          <Button text="REGISTER" />
        </form>
      </div>
      <ErrorPopUp
        open={errorPopUp}
        onClose={() => setErrorPopUp(false)}
        errorMessage={
          formErrors
            ? formErrors.userExists
              ? 'Email is already registed'
              : formErrors.serverError
              ? 'Error registering user'
              : ''
            : ''
        }
      />
    </>
  );
}

export default NewUser;
