// Importamos las dependencias y los hooks.
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

// Importamos los componentes.
import { Link } from 'react-router-dom';
import Avatar from '../../Components/avatar/Avatar';

import EditProfile from '../editProfile/EditProfile2';

const UserProfile = () => {
    const { authUser, authUpdateUser, authUpdateAvatar, loading } = useAuth();
    const [editProfileModal, setEditProfileModal] = useState(false);

    return (
        <div className="profile">
            {authUser && (
                <>
                    <Link className="back-profile" to="/">
                        Back
                    </Link>

                    <h2>My Profile</h2>

                    <Avatar class="avatar-profile" avatar={authUser.avatar} />

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
                            <p>
                                <strong>Name:</strong> {authUser.name}
                            </p>
                            <p>
                                <strong>Surname:</strong> {authUser.surname}
                            </p>
                            <p>
                                <strong>Email:</strong> {authUser.email}
                            </p>
                            <p>
                                <strong>Gender:</strong> {authUser.gender}
                            </p>
                            <p>
                                <strong>Interest:</strong> {authUser.interest}
                            </p>
                            <button
                                className="button-edit"
                                onClick={() => setEditProfileModal(true)}
                            >
                                EDIT PROFILE
                            </button>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default UserProfile;
