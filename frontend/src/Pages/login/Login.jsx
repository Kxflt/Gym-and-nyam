import React, { useState } from 'react';
import InputPassword from '../../Components/Shared/Input/inputPassword';
import InputText from '../../Components/Shared/Input/InputText';
import Button from '../../Components/Shared/Button/Button';
import Footer from '../../Components/Shared/Footer/Footer';
import ImgLogo from '../../assets/logo2.png';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import './login.css';

function Login() {
  const [errorText, setErrorText] = useState();

  //El useState es falso ya que en el momento que la recorra y lo necesitemos se convertira en true y accederemos a ella.
  const [errorPopUp, setErrorPopUp] = useState(false);
  //Lo utilizamos para que en caso de entrar, que nos redireccione al dashboard
  const navigate = useNavigate();

  //Son valores que nos proporciona el useForm,
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Utilizamos el signIn del Context
  const { signIn } = useAuth();

  //La función ciamdp enviamos los datos
  const onSubmit = async ({ email, password }) => {
    try {
      //Funcion del Context para iniciar sesión.
      await signIn(email, password);

      //Utilizamos esto por si hemos intentado entrar y no hemos podido, que borre el errorText y poder entrar
      setErrorText(null);

      navigate('/');
    } catch (error) {
      if (error.response?.status === 403 || error.response?.status === 402) {
        setErrorText('Email o contraseña no válida');
      }
      setErrorPopUp(true);
    }
  };
  //Aitor: Falta en el return meter ciertas funciones.
  return (
    <>
      {/* Hay que preguntar como hacer una funcion que nos traiga la img  */}
      <img src={ImgLogo} alt='logo' />
      <div className='login'>
        <InputText />
        <InputPassword />
        <div className='help'>
          <p>Forget Password</p>
          <p>Sign Up</p>
        </div>
        <Button text='Login' />
      </div>
      {/* <Logo /> */}
      <Footer />
    </>
  );
}

export default Login;
