import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Avatar from '../../Components/avatar/Avatar';

import './nav-bar.css';

function NavBar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState('');

  const handleLogin = () => {
    // Lógica para iniciar sesión
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Lógica para cerrar sesión
    setIsAuthenticated(false);
  };

  
  const handleAvatarUpload = () => {
    setAvatarUrl(imageUrl);
  
  }

  return (
    
      <nav className='header-container'>
        <ul className='menu'>

      {isAuthenticated && avatarUrl && ( // Condición para mostrar el Avatar
        <div className="avatar-container">
          <img className="avatar" src={avatarUrl} alt="User Avatar" />
        </div>
      )}

        {!!isAuthenticated ? (
          <>
            <li>
              <NavLink to='/users'> Sign Up</NavLink>
            </li>
            <li>
              <NavLink to='/login' onClick={handleLogin}>
                Log in
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to='/exercises'>Exercises</NavLink>
            </li>
            <li>
              <NavLink to='/account'>Edit profile</NavLink>
            </li>
            <li>

              <NavLink to="/login" onClick={handleLogout}>Log Out</NavLink>

            </li>
          </>
        )}
      </ul>
      {isAuthenticated && ( // Condición para mostrar el componente Avatar
        <Avatar onUpload={handleAvatarUpload} />
      )}
    </nav>
  );
}

export default NavBar;
