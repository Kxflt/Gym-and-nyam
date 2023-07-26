import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import Avatar from '../../Components/avatar/Avatar';
import EditProfile from '../editProfile/EditProfile2';

const UserProfile = () => {
  const { user, updateUser } = useAuth();
  const [editing, setEditing] = useState(false);

  return (
    <div>
      <h2>My Profile</h2>
      <Avatar avatar={user.avatar} />
      {editing ? (
        <EditProfile
          user={user}
          updateUser={updateUser}
          setEditing={setEditing}
        />
      ) : (
        <>
          <p>
            <strong>Name:</strong> {user && user.name}
          </p>
          <p>
            <strong>Email:</strong> {user && user.email}
          </p>
          <p>
            <strong>More Info:</strong> {user && user.registrationData}
          </p>
          <button onClick={() => setEditing(true)}>Edit Profile</button>
        </>
      )}
      <Link to="/">Back</Link>
    </div>
  );
};

export default UserProfile;
