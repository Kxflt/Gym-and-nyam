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
      {/* El logo lo pondria en components, en la carpeta de logo, para poder
      exportarlo */}
      <img src={ImgLogo} alt='logo' />

      <div className='login'>
        <InputText />
        <InputPassword />
        <Button text='Login' />
        <div className='help'>
          <p>Forget Password</p>
          <p>Sign Up</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
