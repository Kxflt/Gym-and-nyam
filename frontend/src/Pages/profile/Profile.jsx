import React, { useState, useEffect } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simular una llamada a una API para obtener los datos del usuario
    // Aquí deberías hacer la llamada a tu backend para obtener los datos del usuario actual
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

  if (!user) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Perfil de Usuario</h1>
      <p><strong>Nombre:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Datos de registro:</strong> {user.registrationData}</p>
    </div>
  );
};

export default UserProfile;
