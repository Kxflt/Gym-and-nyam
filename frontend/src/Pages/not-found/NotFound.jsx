import React from 'react';
import { useState } from 'react';
import Title from '../../Components/Shared/title/Title';
import NavBar from '../../Components/nav-bar/NavBar';
import Footer from '../../Components/Shared/Footer/Footer';
import Button from '../../Components/Shared/Button/Button';
function NotFound() {
  const [Text, setText] = useState();
  return (
    <>
      <NavBar />
      <Title text='Pagina no encontrada' />
      <a href='/'>
        <Button text='ET go home' />
      </a>
      <Footer />
    </>
  );
}
export default NotFound;
