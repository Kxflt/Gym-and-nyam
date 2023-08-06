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
                        <li>
                            <NavLink to="/users"> Sign Up</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">Log in</NavLink>
                        </li>
                    </>
                ) : (
                    <>
                        {!isHomepage && ( // Mostrar el enlace solo si NO estamos en la homepage
                            <li>
                                <NavLink exact to="/">
                                    Homepage
                                </NavLink>
                            </li>
                        )}
                        <li>
                            <NavLink to="/exercises">Exercises</NavLink>
                        </li>
                        <li>
                            <NavLink to="/account">Edit profile</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login" onClick={authLogout}>
                                Log Out
                            </NavLink>
                        </li>
                        <li className="Hi"> Hi, {authUser.name} </li>
                        <li className="avatar-container">
                            {authUser?.avatar && (
                                <Avatar
                                    className="avatar-nav"
                                    avatar={authUser.avatar}
                                />
                            )}
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default NavBar;
