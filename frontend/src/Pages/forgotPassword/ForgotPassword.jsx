import React, { useState } from 'react';
import { sendRecoverPassService } from '../../services/authService';
import Button from '../../Components/Shared/Button/Button';
import NewPassword from '../../Components/NewPassword/NewPassword';

import './forgotPassword.css';

function ForgotPassword() {
    const [errorText, setErrorText] = useState(null);
    const [errorPopUp, setErrorPopUp] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [email, setEmail] = useState('');

    const handleSubmit = async ({ email }) => {
        try {
            setErrorText(null);
            await sendRecoverPassService(email);
            setShowNewPassword(true);
            // Envío exitoso del código de validación, puedes realizar las acciones necesarias aquí
        } catch (error) {
            setErrorText(
                'Ha ocurrido un error al enviar el código de validación.'
            );
            setErrorPopUp(true);
        }
    };

    return (
        <main>
            {!showNewPassword ? (
                <form
                    className="forgot-pass-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit({ email });
                    }}
                >
                    <input
                        className="email-forg-pass"
                        placeholder="Insert your email address and check your inbox. We'll send you a recovery pass."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <Button text="Enviar" type="submit" />
                </form>
            ) : (
                <NewPassword />
            )}
        </main>
    );
}

export default ForgotPassword;
