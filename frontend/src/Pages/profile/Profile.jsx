// Importamos las dependencias y los hooks.
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

// Importamos los componentes.
import { Link } from 'react-router-dom';
import Avatar from '../../Components/avatar/Avatar';

import EditProfile from '../editProfile/EditProfile2';
import './profile.css';

const UserProfile = () => {
    const { authUser, authUpdateUser, authUpdateAvatar, loading } = useAuth();
    const [editProfileModal, setEditProfileModal] = useState(false);

    return (
        <main className="profile-container">
            <div className="links-profiles">
                <Link className="back-profile" to="/">
                    Back
                </Link>
            </div>
            <div className="profile">
                {authUser && (
                    <>
                        <h2>My Profile</h2>

                        <Avatar
                            className="avatar-profile"
                            avatar={authUser.avatar}
                        />

                        {editProfileModal ? (
                            <EditProfile
                                authUser={authUser}
                                authUpdateUser={authUpdateUser}
                                setEditProfileModal={setEditProfileModal}
                                authUpdateAvatar={authUpdateAvatar}
                                loading={loading}
                            />
                        ) : (
                            <>
                                <div className="inputs-profile">
                                    <p className="name-user">
                                        <strong>Name:</strong> {authUser.name}
                                    </p>
                                    <p className="surname-user">
                                        <strong>Surname:</strong>{' '}
                                        {authUser.surname}
                                    </p>
                                    <p className="email-user">
                                        <strong>Email:</strong> {authUser.email}
                                    </p>
                                    <p className="gender-user">
                                        <strong>Gender:</strong>{' '}
                                        {authUser.gender}
                                    </p>
                                    <p className="interest-user">
                                        <strong>Interest:</strong>{' '}
                                        {authUser.interest}
                                    </p>

                                    <button
                                        className="button-edit"
                                        onClick={() =>
                                            setEditProfileModal(true)
                                        }
                                    >
                                        EDIT PROFILE
                                    </button>
                                </div>
                                <Link
                                    className="my-favourites"
                                    to="/favourites"
                                >
                                    MY FAVOURITE EXERCISES
                                </Link>
                            </>
                        )}
                    </>
                )}
            </div>
        </main>
    );
};

export default UserProfile;
