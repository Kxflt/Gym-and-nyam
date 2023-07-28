import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { EMAIL_REGEX } from '../../utils/constants';
import { sendRecoverPass } from '../../services/authService';
import Button from '../../Components/Shared/Button/Button';
import InputText from '../../Components/Shared/Input/InputText';
import ErrorPopUp from '../../Components/Shared/errorPopUp/ErrorPopUp';
import NewPassword from '../../Components/newPassword/NewPassword';
import NavBar from '../../Components/nav-bar/NavBar';
import Footer from '../../Components/Shared/Footer/Footer';
import './forgotPassword.css';

function ForgotPassword() {
  const [errorText, setErrorText] = useState(null);
  const [errorPopUp, setErrorPopUp] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const sendValidationCode = async (email) => {
  //   try {
  //     await sendRecoverPass(email);
  //     // Envío exitoso del código de validación
  //     console.log('Código de validación enviado exitosamente');
  //   } catch (error) {
  //     console.error('Error al enviar el código de validación:', error);
  //     throw error;
  // };

  const onSubmit = async ({ email }) => {
    try {
      setErrorText(null);
      await sendRecoverPass(email);
      console.log('Código de validación enviado.');
      setShowNewPassword(true);
      // Envío exitoso del código de validación, puedes realizar las acciones necesarias aquí
    } catch (error) {
      console.log('Error al enviar el código.');
      setErrorText('Ha ocurrido un error al enviar el código de validación.');
      setErrorPopUp(true);
    }
  };

  return (
    <>
      {!showNewPassword ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputText
            label="Email"
            register={register('email', {
              required: true,
              pattern: EMAIL_REGEX,
            })}
            errors={errors}
            registerName="email"
          />
          <Button text="Enviar" type="submit" />
        </form>
      ) : (
        <NewPassword />
      )}
      {errorPopUp && (
        <ErrorPopUp message={errorText} onClose={() => setErrorPopUp(false)} />
      )}
    </>
  );
}

export default ForgotPassword;
