import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { EMAIL_REGEX } from '../../utils/constants';
import { sendRecoverPassService } from '../../services/authService';
import Button from '../../Components/Shared/Button/Button';
import InputText from '../../Components/Shared/Input/InputText';
import ErrorPopUp from '../../Components/Shared/errorPopUp/ErrorPopUp';
import NewPassword from '../../Components/newPassword/NewPassword';
import './forgotPassword.css';

function ForgotPassword() {
    const [errorText, setErrorText] = useState(null);
    const [errorPopUp, setErrorPopUp] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // const sendValidationCode = async (email) => {
    //   try {
    //     await sendRecoverPass(email);
    //     // Envío exitoso del código de validación
    //     console.log('Código de validación enviado exitosamente');
    //   } catch (error) {
    //     console.error('Error al enviar el código de validación:', error);
    //     throw error;
    // };

    const onSubmit = async ({ email }) => {
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
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <InputText
                        className="email-forg-pass"
                        placeholder="Insert your email address and check your inbox. We'll send you a recovery pass."
                        register={register('email', {
                            required: true,
                            pattern: EMAIL_REGEX,
                        })}
                        errors={errors}
                        registerName="email"
                    />
                    <Button text="Enviar" type="submit" />
                </form>
            ) : (
                <NewPassword />
            )}
            {errorPopUp && (
                <ErrorPopUp
                    message={errorText}
                    onClose={() => setErrorPopUp(false)}
                />
            )}
        </main>
    );
}

export default ForgotPassword;
