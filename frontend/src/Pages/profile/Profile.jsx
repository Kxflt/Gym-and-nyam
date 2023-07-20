import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import Avatar from '../../Components/avatar/Avatar';
const UserProfile = () => {
  const { user } = useAuth();
  /* useEffect(() => {
    // Simular  llamada a una API para obtener los datos del usuario
    //  llamada a  backend para obtener los datos del usuario actual
    const fetchUser = async () => {
      try {
        const response = await fetch('http:://localstore:8000/users/:userId'); //URL backend
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      }
    };

    fetchUser();
  }, []);
 */
  return (
    <div>
      <h2>My Profile</h2>
      <Avatar />
      <p>
        <strong>Name:</strong>
        {user.name}
      </p>
      <p>
        <strong>Email:</strong> {/* {user.email} */}
      </p>
      <p>
        <strong>More Info:</strong> {/* {user.registrationData} */}
      </p>
      <Link to='/'>Back</Link>
    </div>
  );
};

export default UserProfile;
