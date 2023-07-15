import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import './nav-bar.css';

function NavBar() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  const handleLogin = () => {
    // Lógica para iniciar sesión
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Lógica para cerrar sesión
    setIsAuthenticated(false);
   
 
  };
  

  return (
    
      <nav className='header-container'>
        <div>
          <img src='/original-multimedia/logo2.png' alt='logo' />
        </div>

        <ul className="menu"> {/* Deberiamos ver si tenemos que cambiar el isAuth por isLogin // hay que hablarlo */}
        {!!isAuthenticated ? (
          <>
            <li>
              <NavLink to="/users"> Sign Up</NavLink>
            </li>
            <li>
              <NavLink to="/login" onClick={handleLogin}>Log in</NavLink>
            </li>
          </>
        ) : ( 
          <>
            <li>
              <NavLink to="/exercises">Exercises</NavLink>
            </li>
            <li>
              <NavLink to ="/account">Edit profile</NavLink>
            </li>
            <li>
              <NavLink to="/login" onClick={handleLogout}>Cerrar sesión</NavLink>
            </li>
            </>
            
        )}
      </ul>
    </nav>
  );
};

export default NavBar;




