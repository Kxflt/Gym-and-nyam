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

export const likeExerciseService = async (id, likedByMe, token) => {
  // Definimos si vamos a eliminar o a crear el like.
  const method = likedByMe ? 'delete' : 'post';

  try {
    const response = await axios({
      method, // Pass the method here
      url: `http://localhost:8000/exercises/${id}/likes`, // Correctly construct the URL
      headers: {
        Authorization: token,
      },
    });

    // Optionally, you can return the response data if needed.
    return response.data;
  } catch (error) {
    // Handle errors here if needed.
    if (error.response) {
      throw new Error(error.response.data.message);
    } else if (error.request) {
      console.error('No se recibió una respuesta del servidor.');
    } else {
      console.error('Error al enviar la solicitud:', error.message);
    }
    throw error; // Re-throw the error to be handled in the calling code.
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
