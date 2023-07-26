import React, { useState, useEffect } from 'react';
import './profile.css';

const EditProfile = ({ user, updateUser, setEditing }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [avatar, setAvatar] = useState(user.avatar);
  const [loading, setLoading] = useState(false);

  const handleOnSave = async () => {
    try {
      // Deshabilitamos el botón de enviar mientras se está procesando la petición.
      setLoading(true);

      // Creamos un objecto de tipo FormData.
      const formData = new FormData();

      // Añadimos al FormData anterior los campos que vamos a enviar al backend.
      formData.append('name', name);
      formData.append('email', email);
      formData.append('avatar', avatar);

      await updateUser(formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: user.token,
        },
      });

      // Si todo ha ido bien establecemos setEditing a false para volver a mostrar la información del usuario.
      setEditing(false);
    } catch (error) {
      console.error('Error al actualizar los datos del usuario:', error);
    } finally {
      // Habilitamos el botón de enviar.
      setLoading(false);
    }
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
      <button onClick={() => handleOnSave()} disabled={loading}>
        Save
      </button>
    </>
  );
};

export default EditProfile;
