import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Avatar from '../../Components/avatar/Avatar';
import { useAuth } from '../../context/authContext';

import './nav-bar.css';

function NavBar() {
  const { user } = useAuth();
  const [avatarImg, setAvatarImg] = useState(user?.avatar);
  const history = useNavigate();

  const handleLogout = () => {
    // Lógica para cerrar sesión
    setAvatarImg('');
    localStorage.removeItem('user'); // Elimina el user/token del localStorage
    history.push('/login'); // Redirige a la página de inicio de sesión después de cerrar sesión
  };

  // const handleAvatarUpload = (imageUrl) => {
  // setAvatarUrl(imageUrl);
  // };

  return (
    <nav className="header-container nav-bar">
      <ul className="menu">
        {!user ? (
          <>
            <li>
              <NavLink to="/users"> Sign Up</NavLink>
            </li>
            <li>
              <NavLink to="/login">Log in</NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/exercises">Exercises</NavLink>
            </li>
            <li>
              <NavLink to="/account">Edit profile</NavLink>
            </li>
            <li>
              <NavLink to="/login" onClick={handleLogout}>
                Log Out
              </NavLink>
            </li>
            <li className="Hi"> Hi, {user.name} </li>
            <li className="avatar-container">
              <Avatar class="avatar-nav" avatar={avatarImg} />
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
