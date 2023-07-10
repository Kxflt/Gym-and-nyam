import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import Button from '../Shared/Button/Button';
import './nav-bar.css';

function NavBar() {
  const { isAuthenticated, user, logOut } = useAuth();
  return (
    <nav className='header-container'>
      {isAuthenticated ? (
        <>
          <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='exercises'>Exercises</NavLink>
            <NavLink to='profile'>Profile</NavLink>
          </div>
          <div>
            <span>{`Hola, ${user.name}`}</span>
            <Button text='Log Out' onClick={logout} error />
          </div>
        </>
      ) : (
        <div>
          <NavLink to='login'>Log In</NavLink>
          <NavLink to='signup'>Sign Up</NavLink>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
