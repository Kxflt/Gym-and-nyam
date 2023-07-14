import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav-bar.css';

function NavBar() {
  return (
    <>
      <nav className='header-container'>
        <img src='/original-multimedia/logo2.png' alt='logo' />

        <NavLink className='Home' to='/'>
          Home
        </NavLink>
        <NavLink className='Exercises' to='/exercises'>
          Exercises
        </NavLink>
        <NavLink className='Profile' to='/profile'>
          Profile
        </NavLink>
      </nav>
    </>
  );
}

export default NavBar;
