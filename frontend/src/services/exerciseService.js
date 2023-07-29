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
          Authorization: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error; // Handle errors
  }
};

export const modifyExercise = async (id, formData, token) => {
  try {
    const response = await axios.put(
      `http://localhost:8000/exercises/${id}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
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

export const deleteExercise = async (id, token) => {
  try {
    const response = await axios.delete(
      `http://localhost:8000/exercises/${id}`,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
