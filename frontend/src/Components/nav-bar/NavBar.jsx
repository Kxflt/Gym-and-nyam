import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav-bar.css';

function NavBar() {
  return (
    <nav className='header-container'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='exercises'>Exercises</NavLink>
      <NavLink to='profile'>Profile</NavLink>
    </nav>
  );
}

export default NavBar;
