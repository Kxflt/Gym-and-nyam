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
      <img src={ImgLogo} alt='logo' />
      <div className='login'>
        <InputText />
        <InputPassword />
        <Button text='Login' />
      </div>
    </>
  );
}

export default Login;
