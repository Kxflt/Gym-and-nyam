import React, { useState } from 'react';
import { useAuth } from '../../context/authContext';
import { modifyExercise } from '../../services/exerciseService';

const ExerciseEdit = ({ exercise }) => {
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editedExercise, setEditedExercise] = useState({
    name: exercise.name,
    description: exercise.description,
    typologyId: exercise.typologyId,
    muscleGroupId: exercise.muscleGroupId,
  });
  const [photoFile, setPhotoFile] = useState(null);
  const handleEditExercise = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    // Check if each field has changed and append to formData accordingly
    if (editedExercise.name !== exercise.name) {
      formData.append('name', editedExercise.name);
    }
    if (editedExercise.description !== exercise.description) {
      formData.append('description', editedExercise.description);
    }
    if (editedExercise.typologyId !== exercise.typologyId) {
      formData.append('typologyId', editedExercise.typologyId);
    }
    if (editedExercise.muscleGroupId !== exercise.muscleGroupId) {
      formData.append('muscleGroupId', editedExercise.muscleGroupId);
    }
    if (photoFile) {
      formData.append('photo', photoFile);
    }

    try {
      const response = await modifyExercise(exercise.id, formData, user.token);
      if (response) {
        console.log('Exercise Updated Successfully!!!');
        console.log(response.data.exercise);
        setEditedExercise(response.data.exercise);
        setPhotoFile(null);
      } else {
        console.error('Failed to update the exercise');
      }
    } catch (error) {
      console.error('An error occurred', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancelEdit = () => {
    // Reset the form fields to their original values
    setEditedExercise({
      name: exercise.name,
      description: exercise.description,
      typologyId: exercise.typologyId,
      muscleGroupId: exercise.muscleGroupId,
      photo: exercise.photo,
    });
    setIsSubmitting(false);
  };

  return (
    <div>
      <h2>Edit exercise:</h2>
      <form onSubmit={handleEditExercise}>
        <div>
          <label>Exercise Name:</label>
          <input
            type="text"
            value={editedExercise.name}
            onChange={(e) =>
              setEditedExercise({
                ...editedExercise,
                name: e.target.value,
              })
            }
            required
          />
        </div>
        <div>
          <label>Exercise Description:</label>
          <textarea
            value={editedExercise.description}
            onChange={(e) =>
              setEditedExercise({
                ...editedExercise,
                description: e.target.value,
              })
            }
            required
          />
        </div>
        <div>
          <label>Exercise Typology:</label>
          <input
            type="text"
            value={editedExercise.typologyId}
            onChange={(e) =>
              setEditedExercise({
                ...editedExercise,
                typologyId: e.target.value,
              })
            }
            required
          />
        </div>
        <div>
          <label>Exercise Muscle Group:</label>
          <input
            type="text"
            value={editedExercise.muscleGroupId}
            onChange={(e) =>
              setEditedExercise({
                ...editedExercise,
                muscleGroupId: e.target.value,
              })
            }
            required
          />
        </div>
        <div>
          <label>Exercise Photo:</label>
          {/* Mostrar la imagen existente si no hay una nueva imagen seleccionada */}
          {!photoFile && exercise.photo && (
            <img
              src={`http://localhost:8000/${exercise.photo}`}
              alt={exercise.title}
            />
          )}
          {/* Entrada para seleccionar una nueva imagen*/}
          <input
            type="file"
            onChange={(e) => setPhotoFile(e.target.files[0])}
          />
        </div>
        {editedExercise.photo && (
          <img
            src={`http://localhost:8000/${editedExercise.photo}`}
            alt="Exercise"
          />
        )}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Updating exercise...' : 'Update exercise'}
        </button>
        <button type="button" onClick={handleCancelEdit}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ExerciseEdit;
