import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { editPassword } from '../../services/authService';

const NewPassword = () => {
    const navigate = useNavigate();
    const [recoverPassCode, setRecoverPassCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordConfirm, setNewpasswordConfirm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [confirmations, setConfirmations] = useState('');

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            if (newPassword === newPasswordConfirm) {
                const newPass = newPassword;

                if (newPass === '') {
                    throw new Error('An error occur with your passwords');
                }

                setConfirmations(await editPassword(recoverPassCode, newPass));

                setErrorMessage(confirmations);

                navigate('/login');
            } else {
                setErrorMessage('Passwords dont match');
            }
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="recover-card">
            <div className="imput2Recover">
                <form onSubmit={handleSubmit}>
                    <div className="firstLabel">
                        <label htmlFor="editRecoverPassCode">
                            Reset your password:
                        </label>
                    </div>
                    <div>
                        <label htmlFor="recoverPassCode">Recovery Pass:</label>
                        <input
                            id="recoverPassCode"
                            value={recoverPassCode}
                            onChange={(e) => setRecoverPassCode(e.target.value)}
                            required
                        />
                        <label htmlFor="newPassword">New Password:</label>
                        <input
                            type="password"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            minLength="8"
                            maxLength="100"
                        />
                        <label htmlFor="newpasswordConfirm">
                            Confirm new Password:
                        </label>
                        <input
                            type="password"
                            id="newPasswordConfirm"
                            value={newPasswordConfirm}
                            onChange={(e) =>
                                setNewpasswordConfirm(e.target.value)
                            }
                            required
                            minLength="8"
                            maxLength="100"
                        />
                    </div>
                    <span className="error">{errorMessage}</span>
                    <div className="buttonEdit" onClick={handleSubmit}>
                        <button>Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewPassword;
