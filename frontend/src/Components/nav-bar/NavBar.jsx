// Importamos las dependencias y componentes.
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Avatar from '../../Components/avatar/Avatar';

// Importamos los estilos.
import './nav-bar.css';

function NavBar() {
    const { authUser, authLogout } = useAuth();

    return (
        <nav className="header-container nav-bar">
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
                                    class="avatar-nav"
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
