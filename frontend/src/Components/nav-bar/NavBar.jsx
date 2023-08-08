// Importamos las dependencias y componentes.
import React, { useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Avatar from '../../Components/avatar/Avatar';

// Importamos los estilos.
import './nav-bar.css';

function NavBar() {
    const { authUser, authLogout } = useAuth();
    const location = useLocation();
    const isHomepage = location.pathname === '/' || location.pathname === '/';

    return (
        <nav className="header-container">
            <ul className="menu">
                {!authUser ? (
                    <>
                        <li className="signup-nav">
                            <NavLink to="/users"> Sign Up</NavLink>
                        </li>
                        <li className="login-nav">
                            <NavLink to="/login">Log in</NavLink>
                        </li>
                    </>
                ) : (
                    <>
                        <div className="nav-profile-container-1">
                            {!isHomepage && ( // Mostrar el enlace solo si NO estamos en la homepage
                                <li className="nav-homepage">
                                    <NavLink exact to="/">
                                        Homepage
                                    </NavLink>
                                </li>
                            )}
                            <li className="nav-exercises">
                                <NavLink to="/exercises">Exercises</NavLink>
                            </li>

                            <li className="nav-edit-profile">
                                <NavLink to="/account">Edit profile</NavLink>
                            </li>
                        </div>

                        <div className="nav-profile-container">
                            <li className="avatar-container">
                                {authUser?.avatar && (
                                    <Avatar avatar={authUser.avatar} />
                                )}
                            </li>
                            <li className="Hi"> Hi, {authUser.name} </li>

                            <li className="nav-logout">
                                <NavLink to="/login" onClick={authLogout}>
                                    Log Out
                                </NavLink>
                            </li>
                        </div>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default NavBar;
