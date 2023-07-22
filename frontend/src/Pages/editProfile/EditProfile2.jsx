import React, { useState, useEffect } from 'react';

const EditProfile = ({ user, onSave }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [registrationData, setRegistrationData] = useState(
    user.registrationData
  );

  const handleSave = () => {
    onSave({ name, email, registrationData });
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
        <strong>More Info:</strong>
        <textarea
          value={registrationData}
          onChange={(e) => setRegistrationData(e.target.value)}
        />
      </p>
      <button onClick={handleSave}>Save</button>
    </>
  );
};

export default EditProfile;
