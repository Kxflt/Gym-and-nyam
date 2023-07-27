import React, { useState, useEffect } from 'react';
import './profile.css';

const EditProfile = ({ user, updateUser, setEditing }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [surname, setSurname] = useState(user.surname);
  const [gender, setGender] = useState(user.gender);
  const [interest, setInterest] = useState(user.interest);
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
      formData.append('surname', surname);
      formData.append('email', email);
      formData.append('avatar', avatar);
      formData.append('gender', gender);
      formData.append('interest', interest);

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
        <strong>Surname:</strong>
        <input
          type="text"
          value={surname}
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
        <strong>Gender:</strong>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">--</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </p>

      <p>
        <strong>Interest:</strong>
        <select value={interest} onChange={(e) => setInterest(e.target.value)}>
          <option value="">--</option>
          <option value="Cardio">Cardio</option>
          <option value="Bodybuilding">Bodybuilding</option>
          <option value="Unknown">N/A</option>
        </select>
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
