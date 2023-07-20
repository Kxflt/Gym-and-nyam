import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { EMAIL_REGEX, PASSWORD_REGEX } from '../../utils/constants';
import InputPassword from '../../Components/Shared/Input/inputPassword';
import InputText from '../../Components/Shared/Input/InputText';
import Button from '../../Components/Shared/Button/Button';
import Footer from '../../Components/Shared/Footer/Footer';
import ErrorPopUp from '../../Components/Shared/errorPopUp/ErrorPopUp';
import './login.css';

// IMPORTANTE_______________________________
/* Aitor: Hay que hacer el css del pop up, en el momento que haga la prueba de como funciona la pag lo modificaré. */
//_________________________________________
function Login() {
  const [errorText, setErrorText] = useState();

  //El useState es falso ya que en el momento que la recorra y lo necesitemos se convertira en true y accederemos a ella.
  const [errorPopUp, setErrorPopUp] = useState(false);

  //Son valores que nos proporciona el useForm,
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Utilizamos el signIn del Context
  const { signIn, token } = useAuth();

  // Si existe un token redireccionamos a la página principal.
  if (token) <Navigate to='/' />;

  //La función ciamdp enviamos los datos
  const onSubmit = async ({ email, password }) => {
    try {
      await signIn(email, password);
      //localStorage.setItem('token', token);
      setErrorText(null);

      //Utilizamos esto por si hemos intentado entrar y no hemos podido, que borre el errorText y poder entrar
      setErrorText(null);
    } catch (error) {
      if (error.response?.status === 403 || error.response?.status === 402) {
        setErrorText('Email o contraseña no válida');
      }
      setErrorPopUp(true);
    }
  };

  return (
    <>
      <img src='/original-multimedia/logo2.png' alt='logo' className='logo2' />

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          label='Email'
          register={register('email', {
            required: true,
            pattern: EMAIL_REGEX,
          })}
          errors={errors}
          registerName='email'
        />

        <InputPassword
          label='Password'
          register={register('password', {
            required: true,
            pattern: PASSWORD_REGEX,
            minLength: 8,
            maxLength: 100,
          })}
          errors={errors}
          registerName='password'
        />

        <span className='error'>{errorText}</span>

        {/* {user.role === 'admin' ? <p>Eres Admin</p> : <p>No eres admin</p>}

        {user.role === 'admin' && <p>Eres admin </p>}

        {user.role === 'normal' && <p>Eres un user normal </p>} */}

        {/* En el momento que tengamos estos dos archivos, modificar de la 77 a 80 */}
        <Button text='Login' />
        <div className='help'>
          <p>Forgot Password</p>
          <p>Sign Up</p>
        </div>
      </form>

      {/* En la funcion importada, en el open, metemos la variable del useState.
      Al cerrarlo, el setErrorPopUp vuelve a false para desaparecer. */}
      <ErrorPopUp open={errorPopUp} onClose={() => setErrorPopUp(false)} />
      <Footer />
    </>
  );
}

export default Login;
