import React from 'react';
import { useState } from 'react';
import { useAuth } from '../../context/authContext';

import { createExercise } from '../../services/exerciseService';

const ExercisesCreation = () => {
  const [exerciseName, setExerciseName] = useState('');
  const [exerciseDescription, setExerciseDescription] = useState('');
  const [typology, setTypology] = useState('');
  const [muscleGroup, setMuscleGroup] = useState('');
  const [exercisePhoto, setExercisePhoto] = useState('');

  //   const { user } = useAuth();

  const handleAddExercise = async () => {
    // Construir el objeto formData con los valores de los estados
    const formData = {
      name: exerciseName,
      description: exerciseDescription,
      typology: typology,
      muscleGroup: muscleGroup,
      photo: exercisePhoto,
    };

    try {
      // Llamar a la función externa createExercise para enviar los datos al servidor
      const response = await createExercise(formData);
      if (response) {
        console.log('Exercise Added Successfully!!!');
        // Resetear los estados para limpiar el formulario
        setExerciseName('');
        setExerciseDescription('');
        setTypology('');
        setMuscleGroup('');
        setExercisePhoto('');
      } else {
        console.error('Failed to add an exercise');
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };

  return (
    <>
      <div>
        <h2>Add exercise:</h2>
        <form onSubmit={handleAddExercise}>
          <div>
            <label>Exercise Name:</label>
            <input
              type="text"
              value={exerciseName}
              onChange={(e) => setExerciseName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Exercise Description:</label>
            <textarea
              type="text"
              value={exerciseDescription}
              onChange={(e) => setExerciseDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Exercise Typology:</label>
            <input
              type="text"
              value={typology}
              onChange={(e) => setTypology(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Exercise Muscle Group:</label>
            <input
              type="text"
              value={muscleGroup}
              onChange={(e) => setMuscleGroup(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Exercise Photo</label>
            <input
              type="file"
              value={exercisePhoto}
              onChange={(e) => setExercisePhoto(e.target.files[0])}
              required
            />
          </div>
          <button type="Submit">Add Exercise</button>
        </form>
      </div>
    </>
  );
};

export default ExercisesCreation;
