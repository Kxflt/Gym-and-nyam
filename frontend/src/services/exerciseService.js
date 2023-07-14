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
    axios.post('http://localhost:8000/newExercises'),
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
    axios.put('http://localhost:8000/modifyExercise'),
    {
      name,
      description,
      photo,
      typology,
      muscleGroup,
    }
  );
};
