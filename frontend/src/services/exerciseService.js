import axios from 'axios';

//Crear ejercicio (administrador)
export const createExercise = (
  name,
  description,
  photo,
  typology,
  muscleGroup
) => {
  return (
    axios.post('http://localhost:8000/exercises'),
    {
      name,
      description,
      photo,
      typology,
      muscleGroup,
    }
  );
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
