import React from 'react';
import InputPassword from '../../Components/Shared/Input/inputPassword';
import InputText from '../../Components/Shared/Input/InputText';
import Button from '../../Components/Shared/Button/Button';
import Footer from '../../Components/Shared/Footer/Footer';
import ImgLogo from '../../assets/logo2.png';
import './login.css';

function Login() {
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
