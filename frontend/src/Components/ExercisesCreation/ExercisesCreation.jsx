import React from 'react';
import { useState } from 'react';
import { createExercise } from '../../services/exerciseService';

const ExercisesCreation = ({
  user,
  exercises,
  setExercises,
  setExercisesFormModal,
}) => {
  const [exerciseName, setExerciseName] = useState('');
  const [exerciseDescription, setExerciseDescription] = useState('');
  const [typologyId, setTypologyId] = useState('');
  const [muscleGroupId, setMuscleGroupId] = useState('');
  const [photo, setPhoto] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddExercise = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('name', exerciseName);
    formData.append('description', exerciseDescription);
    formData.append('typologyId', typologyId);
    formData.append('muscleGroupId', muscleGroupId);
    formData.append('photo', photo);

    try {
      const { data } = await createExercise(formData, user.token);

      // Creamos un nuevo array de ejercicios en el que incluiremos el nuevo ejercicio.
      const newExercises = [data.exercise, ...exercises];

      // Actualizamos el array de ejercicios en el State.
      setExercises(newExercises);

      // Cerramos el modal.
      setExercisesFormModal(false);
    } catch (error) {
      console.error('An error occurred', error);
    } finally {
      setIsSubmitting(false);
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
              value={typologyId}
              onChange={(e) => setTypologyId(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Exercise Muscle Group:</label>
            <input
              type="text"
              value={muscleGroupId}
              onChange={(e) => setMuscleGroupId(e.target.value)}
              required
            />
          </div>
          <div>
            <div>
              <label>Exercise Photo</label>
              <input
                type="file"
                onChange={(e) => setPhoto(e.target.files[0])}
                required
              />
            </div>
          </div>
          <button type="Submit" disabled={isSubmitting}>
            {isSubmitting ? 'Adding exercise...' : 'Add exercise'}
          </button>
        </form>
      </div>
    </>
  );
};

export default ExercisesCreation;
