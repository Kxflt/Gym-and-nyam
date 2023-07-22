import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import Avatar from '../../Components/avatar/Avatar';
import EditProfile from '../editProfile/EditProfile2';
const UserProfile = () => {
  const { user } = useAuth();
  const [editing, setEditing] = useState(false);

  const fetchUser = async () => {
    try {
      const response = await fetch('http:://localstore:8000/users/:userId'); // URL del backend
      const userData = await response.json();
      setUser(userData);
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
    }
  };

  useEffect(() => {
    // Simular llamada a una API para obtener los datos del usuario
    fetchUser();
  }, []);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = async (updatedUserData) => {
    try {
      const response = await fetch('http://localstore:8000/users/', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUserData),
      });

      if (response.ok) {
        fetchUser(); // Obtener los datos actualizados del usuario
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
        <EditProfile user={user} onSave={handleSave} />
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
