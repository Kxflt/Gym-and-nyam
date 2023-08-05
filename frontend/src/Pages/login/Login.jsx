// Importamos las dependencias y los hooks.
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

// Importamos los componentes.
import { NavLink, Navigate } from 'react-router-dom';
import Button from '../../Components/Shared/Button/Button';
import ErrorPopUp from '../../Components/Shared/errorPopUp/ErrorPopUp';

// Importamos las constantes.
import { EMAIL_REGEX, PASSWORD_REGEX } from '../../utils/constants';

// Importamos los estilos.
import './login.css';

// IMPORTANTE_______________________________
/* Aitor: Hay que hacer el css del pop up, en el momento que haga la prueba de como funciona la pag lo modificaré. */
//_________________________________________
function Login() {
    const { authUser, authLogin, loading } = useAuth();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [showErrorPopUp, setShowErrorPopUp] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // Si el usuario está logeado redirigimos a la página principal.
    if (authUser) return <Navigate to="/" />;

    return (
        <main>
            {/* <div className="logo-container">
                <img
                    src="/original-multimedia/logo2.png"
                    alt="logo"
                    className="logo2"
                />
            </div> */}

            <form
                onSubmit={(e) => {
                    e.preventDefault();

                    authLogin(email, pass);

                    setErrorMessage('Pikachu');
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
                        <NavLink to="/users">Sing Up</NavLink>
                    </p>
                </div>
            </form>

            {/* No funciona */}
            <ErrorPopUp
                showErrorPopUp={showErrorPopUp}
                setShowErrorPopUp={setShowErrorPopUp}
                errorMessage={errorMessage}
            />
        </main>
    );
}

export default Login;
