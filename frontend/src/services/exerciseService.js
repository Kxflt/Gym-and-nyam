import axios from 'axios';

// Crear ejercicio (administrador)
export const createExercise = async ({
  name,
  description,
  photo,
  typology,
  muscleGroup,
}) => {
  return await axios
    .post('http://localhost:8000/exercises', {
      name,
      description,
      photo,
      typology,
      muscleGroup,
    })
    .then((response) => {
      return response.data; //manejar la respuesta del servidor cuando se completa la solicitud.
    })
    .catch((error) => {
      throw error; //maneja los errores
    });
};
export const modifyExercise = (
  name,
  description,
  photo,
  typology,
  muscleGroup
) => {
  return (
    axios.put('http://localhost:8000/exercises/:id'),
    {
      name,
      description,
      photo,
      typology,
      muscleGroup,
    }
  );
};
export const listExercises = (
  name,
  description,
  photo,
  typology,
  muscleGroup
) => {
  return (
    axios.get('http://localhost:8000/exercises/:id'),
    {
      name,
      description,
      photo,
      typology,
      muscleGroup,
    }
  );
};
