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
    photo: exercise.photo,
  });

  const handleEditExercise = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('name', editedExercise.name);
    formData.append('description', editedExercise.description);
    formData.append('typologyId', editedExercise.typologyId);
    formData.append('muscleGroupId', editedExercise.muscleGroupId);
    formData.append('photo', editedExercise.photo);

    try {
      const response = await modifyExercise(exercise.id, formData, user.token);
      if (response) {
        console.log('Exercise Updated Successfully!!!');
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
          <input
            type="file"
            onChange={(e) =>
              setEditedExercise({
                ...editedExercise,
                photo: e.target.files[0],
              })
            }
          />
        </div>
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
