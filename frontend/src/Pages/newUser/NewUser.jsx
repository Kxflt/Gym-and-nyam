// Importamos las dependencias y los hooks.
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useError } from '../../context/ErrorContext';

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
    const { setErrorMessage } = useError();

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [passRepeated, setPassRepeated] = useState('');
    const [gender, setGender] = useState('');
    const [interest, setInterest] = useState('');

    // Si el usuario está logeado redirigimos a la página principal.
    if (authUser) return <Navigate to="/" />;

    return (
        <main>
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

                    if (pass !== passRepeated) {
                        setErrorMessage('Las contraseñas no coinciden');
                    } else {
                        authRegister({
                            name,
                            surname,
                            email,
                            gender,
                            interest,
                            password: pass,
                        });
                    }
                }}
            >
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    placeholder="Name"
                    id="name"
                    // pattern={EMAIL_REGEX}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    minLength="3"
                    required
                />

                <label htmlFor="surname">Surname:</label>
                <input
                    type="text"
                    placeholder="Surname"
                    id="surname"
                    // pattern={EMAIL_REGEX}
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                    minLength="3"
                    maxLength="100"
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    // pattern={EMAIL_REGEX}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="pass">Password:</label>
                <input
                    type="password"
                    placeholder="Password"
                    id="pass"
                    // pattern={PASSWORD_REGEX}
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    minLength="8"
                    maxLength="100"
                    required
                />

                <label htmlFor="repeat-pass">Repeat Password:</label>
                <input
                    type="password"
                    placeholder="Repeat password"
                    id="repeat-pass"
                    // pattern={PASSWORD_REGEX}
                    value={passRepeated}
                    onChange={(e) => setPassRepeated(e.target.value)}
                    minLength="3"
                    maxLength="100"
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
        </main>
    );
}

export default NewUser;

{
    /* <InputText
label="Surname"
register={register('surname', {
  required: true,
  maxLength: MAX_LENGTH_STRING,
  minLength: MIN_LENGTH_STRING,
})}
errors={errors}
registerName="surname"
/>
 */
}
