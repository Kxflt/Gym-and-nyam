import React, { useState, useEffect } from 'react';
import './profile.css';

const EditProfile = ({ user, onSave }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [avatar, setAvatar] = useState(user.avatar);

  const handleSave = () => {
    onSave({ name, email, avatar });
  };

  return (
    <>
      <p>
        <strong>Name:</strong>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </p>
      <p>
        <strong>Email:</strong>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </p>
      <p>
        <strong>Avatar:</strong>
        <input type="file" onChange={(e) => setAvatar(e.target.files[0])} />
      </p>
      <button onClick={handleSave}>Save</button>
    </>
  );
};

export default EditProfile;
