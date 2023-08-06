import React from 'react';
import {
    EMAIL_REGEX,
    MAX_LENGTH_STRING,
    MIN_LENGTH_STRING,
} from '../../utils/constants';
import Button from '../../components/shared/button/Button';
import InputText from '../../Components/Shared/Input/InputText';
import useProfile from './useProfile';

import ErrorPopUp from '../../Components/Shared/errorPopUp/ErrorPopUp';

import './profile.css';

function Profile() {
    const {
        state: { register, errors, errorPopUp },
        actions: {
            handleSubmit,
            onSubmit,
            setErrorPopUp,
            handleOnChangeAvatar,
        },
    } = useProfile();

    return (
        <main className="edit-profile">
            <h1>Visual Example</h1>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="avatar-container">
                        <InputText
                            label="Name"
                            register={register('name', {
                                required: true,
                                maxLength: MAX_LENGTH_STRING,
                                minLength: MIN_LENGTH_STRING,
                            })}
                            errors={errors}
                            registerName="name"
                        />
                        <InputText
                            label="Email"
                            register={register('email', {
                                required: true,
                                pattern: EMAIL_REGEX,
                            })}
                            errors={errors}
                            registerName="email"
                        />
                        <div className="terms-container">
                            <input
                                type="checkbox"
                                {...register('terms', {
                                    required: true,
                                })}
                            />
                            <label>Accept terms and conditions</label>
                        </div>
                        {errors.terms?.type === 'required' && (
                            <span className="error">Field required</span>
                        )}
                        <Button text="Next" />
                    </div>
                </form>
            </div>
            <ErrorPopUp
                open={errorPopUp}
                onClose={() => setErrorPopUp(false)}
            />
        </main>
    );
}

export default Profile;
