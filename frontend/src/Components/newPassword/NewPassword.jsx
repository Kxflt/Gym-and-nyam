import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { editPassword } from '../../services/authService';
import { PASSWORD_REGEX } from '../../utils/constants';
import Button from '../Shared/Button/Button';
import InputText from '../Shared/Input/InputText';
import InputPassword from '../Shared/Input/inputPassword';

function NewPassword() {
    const [errorText, setErrorText] = useState();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async ({
        recoverPassCode,
        newPassword,
        confirmPassword,
    }) => {
        setErrorText(null);

        // You can add your logic here to handle the form submission and password change.
        // For example, you can compare newPassword and confirmPassword and make the necessary API call to update the password.

        if (newPassword !== confirmPassword) {
            setErrorText("Passwords don't match.");
        } else {
            try {
                await editPassword(recoverPassCode, newPassword);
            } catch (error) {
                // Handle errors if the API call fails.
                console.error('Error changing password:', error);
                setErrorText('Failed to change password. Please try again.');
            }
        }
    };

    return (
        <>
            <form className="newPass" onSubmit={handleSubmit(onSubmit)}>
                <InputText
                    label="Recovery Code"
                    register={register('recoverPassCode', {
                        required: true,
                    })}
                    errors={errors}
                />
                <InputPassword
                    label="New Password"
                    register={register('newPassword', {
                        required: true,
                        pattern: PASSWORD_REGEX,
                        minLength: 7,
                        maxLength: 100,
                    })}
                    errors={errors}
                />
                {/* Creo que falta la condicion de si hacen match las contraseñas redirigir a login, y si no hacen match
                 que salga el modal error */}
                <InputPassword
                    label="Confirm Password"
                    register={register('confirmPassword', {
                        required: true,
                        pattern: PASSWORD_REGEX,
                        minLength: 7,
                        maxLength: 100,
                    })}
                    errors={errors}
                />
                <span className="error">{errorText}</span>

                <Button text="Confirm changes" type="submit" />
            </form>
        </>
    );
}

export default NewPassword;
