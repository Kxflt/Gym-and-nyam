// Importamos las dependencias y los hooks.
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

// Importamos los componentes.
import { NavLink, Navigate } from 'react-router-dom';
import Button from '../../Components/Shared/Button/Button';
import ErrorPopUp from '../../Components/Shared/errorPopUp/ErrorPopUp';

// Importamos las contantes.
import {
    EMAIL_REGEX,
    MAX_LENGTH_STRING,
    MIN_LENGTH_STRING,
    PASSWORD_REGEX,
} from '../../utils/constants';

// Importamos los estilos.
import './newUser.css';

function NewUser() {
    const { authUser, authRegister } = useAuth();

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [gender, setGender] = useState('');
    const [interest, setInterest] = useState('');
    const [showErrorPopUp, setShowErrorPopUp] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // Si el usuario está logeado redirigimos a la página principal.
    if (authUser) return <Navigate to="/" />;

    return (
        <>
            <div className="logo-container">
                <img
                    src="/original-multimedia/logo2.png"
                    alt="logo"
                    className="logo2"
                />
            </div>

            <form
                onSubmit={(e) => {
                    e.preventDefault();

                    authRegister({
                        name,
                        surname,
                        email,
                        gender,
                        interest,
                        password: pass,
                    });

                    setErrorMessage('Pikachu');
                }}
            >
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    // pattern={EMAIL_REGEX}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label htmlFor="surname">Surname:</label>
                <input
                    type="text"
                    id="surname"
                    // pattern={EMAIL_REGEX}
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    required
                />

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

                <label htmlFor="gender">Gender:</label>
                <select
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                >
                    <option value="">--</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                </select>

                <label htmlFor="interest">Interest:</label>
                <select
                    id="interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    required
                >
                    <option value="">--</option>
                    <option value="Cardio">Cardio</option>
                    <option value="Bodybuilding">Bodybuilding</option>
                    <option value="Unknown">N/A</option>
                </select>

                <span className="error">{errorMessage}</span>

                <Button text="REGISTER" />

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
        </>
    );
}

export default NewUser;
