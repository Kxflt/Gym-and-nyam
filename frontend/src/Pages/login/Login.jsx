// Importamos las dependencias y los hooks.
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

// Importamos los componentes.
import { NavLink, Navigate } from 'react-router-dom';
import Button from '../../Components/Shared/Button/Button';

// Importamos los estilos.
import './login.css';

function Login() {
    const { authUser, authLogin, loading } = useAuth();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    // Si el usuario está logeado redirigimos a la página principal.
    if (authUser) return <Navigate to="/" />;

    return (
        <main className="login-container">
            <form
                className="form-login"
                onSubmit={(e) => {
                    e.preventDefault();

                    authLogin(email, pass);

                    setErrorMessage();
                }}
            >
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    // pattern={EMAIL_REGEX}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="pass">Password:</label>
                <input
                    type="password"
                    id="pass"
                    // pattern={PASSWORD_REGEX}
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    required
                />

                <span className="error">{errorMessage}</span>

                <Button text="LOG IN" disabled={loading} />

                <div className="help">
                    <p>
                        <NavLink to="/forgotPassword">Forgot Password</NavLink>
                    </p>
                    <p>
                        <NavLink to="/users">Sign Up</NavLink>
                    </p>
                </div>
            </form>
        </main>
    );
}

export default Login;
