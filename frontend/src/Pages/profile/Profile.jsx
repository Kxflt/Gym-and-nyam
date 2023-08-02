import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import Avatar from '../../Components/avatar/Avatar';
import EditProfile from '../editProfile/EditProfile2';

const UserProfile = () => {
    const { authUser, authUpdateUser, loading } = useAuth();
    const [editProfileModal, setEditProfileModal] = useState(false);

    return (
        <div className="profile">
            <Link className="back-profile" to="/">
                Back
            </Link>
            <h2>My Profile</h2>

            <Avatar class="avatar-profile" avatar={authUser.avatar} />
            {loading ? (
                <EditProfile
                    authUser={authUser}
                    authUpdateUser={authUpdateUser}
                    setEditProfileModal={setEditProfileModal}
                    loading={loading}
                />
            ) : (
                <>
                    <p>
                        <strong>Name:</strong> {authUser && authUser.name}
                    </p>
                    <p>
                        <strong>Surname:</strong> {authUser && authUser.surname}
                    </p>
                    <p>
                        <strong>Email:</strong> {authUser && authUser.email}
                    </p>
                    <p>
                        <strong>Gender:</strong> {authUser && authUser.gender}
                    </p>
                    <p>
                        <strong>Interest:</strong>{' '}
                        {authUser && authUser.interest}
                    </p>
                    <button
                        className="button-edit"
                        onClick={() => setEditProfileModal(true)}
                    >
                        EDIT PROFILE
                    </button>
                </>
            )}
        </div>
    );
};

export default UserProfile;
