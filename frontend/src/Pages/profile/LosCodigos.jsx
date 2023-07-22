import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../Components/avatar/Avatar';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [registrationData, setRegistrationData] = useState('');

  useEffect(() => {
    // Simular llamada a una API para obtener los datos del usuario
    const fetchUser = async () => {
      try {
        const response = await fetch('http:://localstore:8000/users/:userId'); // URL del backend
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      }
    };

    fetchUser();
  }, []);

  const handleEdit = () => {
    setEditing(true);
    setName(user.name);
    setEmail(user.email);
    setRegistrationData(user.registrationData);
  };

  const handleSave = async () => {
    // Actualizar los datos en el backend
    try {
      const response = await fetch('http://localstore:8000/users/:userId', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          registrationData,
        }),
      });

      if (response.ok) {
        // Obtener los datos actualizados del usuario
        const updatedUserData = await response.json();
        setUser(updatedUserData);
        setEditing(false);
      } else {
        console.error('Error al guardar los cambios del usuario');
      }
    } catch (error) {
      console.error('Error al actualizar los datos del usuario:', error);
    }
  };

  return (
    <div>
      <h2>My Profile</h2>
      <Avatar />
      {editing ? (
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
          <button onClick={handleEdit}>Edit Profile</button>
        </>
      )}
      <Link to="/">Back</Link>
    </div>
  );
};

export default UserProfile;

/* _________________________________________________ */
