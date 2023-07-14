import React from 'react';
import axios from 'axios';
import InputText from '../../Components/Shared/Input/InputText';
import { EMAIL_REGEX } from '../../utils/constants';
import { useForm } from 'react-hook-form';
import Footer from '../../Components/Shared/Footer/Footer';
import Header from '../../Components/Shared/header/Header';
import Button from '../../Components/Shared/Button/Button';

function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email }) => {
    try {
      // Función del Context para iniciar sesión.
      await signIn(email);
      // Utilizamos esto por si hemos intentado entrar y no hemos podido, que borre el errorText y poder entrar
      setErrorText(null);
    } catch (error) {
      if (error.response?.status === 403 || error.response?.status === 402) {
        setErrorText('Contraseña no válida');
      }
      setErrorPopUp(true);
    }
  };
  {
    /*Conexion con Backend para que mande el mail con el codigo */
  }
  const handelSendCode = () => {
    axios.put('../../../controllers/users/sendRecoverPass.js ');
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          register={register('email', {
            required: true,
            pattern: EMAIL_REGEX,
            minLength: 8,
            maxLength: 100,
          })}
          errors={errors}
          registerName='email'
        />
        {/* Hay que mirar si tenemos las cosas  */}
        <Button text='Enviar' />
      </form>
      <Footer />
    </>
  );
}

export default ForgotPassword;
