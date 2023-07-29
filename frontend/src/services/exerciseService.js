import axios from 'axios';
// Crear ejercicio (administrador)
// Crear ejercicio (administrador)
export const createExercise = async (formData, token) => {
  try {
    const response = await axios.post(
      'http://localhost:8000/exercises',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: token, // Set the correct content type for file uploads
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error; // Handle errors
  }
};

export const modifyExercise = (
  name,
  description,
  photo,
  typologyId,
  muscleGroupId
) => {
  return (
    axios.put('http://localhost:8000/exercises/:id'),
    {
      name,
      description,
      photo,
      typologyId,
      muscleGroupId,
    }
  );
};
export const listExercises = (
  name,
  description,
  photo,
  typologyId,
  muscleGroupId
) => {
  return (
    axios.get('http://localhost:8000/exercises/:id'),
    {
      name,
      description,
      photo,
      typologyId,
      muscleGroupId,
    }
  );
};
