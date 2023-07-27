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
            <strong>Surname:</strong> {user && user.surname}
          </p>
          <p>
            <strong>Email:</strong> {user && user.email}
          </p>
          <p>
            <strong>Gender:</strong> {user && user.gender}
          </p>
          <p>
            <strong>Interest:</strong> {user && user.interest}
          </p>
          <button onClick={() => setEditing(true)}>Edit Profile</button>
        </>
      )}
      <Link to="/">Back</Link>
    </div>
  );
};

export default UserProfile;
