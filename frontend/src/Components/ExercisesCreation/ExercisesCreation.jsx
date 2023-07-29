import React from 'react';
import { useState } from 'react';
import { useAuth } from '../../context/authContext';
import { Link } from 'react-router-dom';
import { createExercise } from '../../services/exerciseService';

const ExercisesCreation = () => {
  const [exerciseName, setExerciseName] = useState('');
  const [exerciseDescription, setExerciseDescription] = useState('');
  const [typologyId, setTypologyId] = useState('');
  const [muscleGroupId, setMuscleGroupId] = useState('');
  const [photo, setPhoto] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { user } = useAuth();

  const handleAddExercise = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const formData = new FormData(); // Use FormData to handle file uploads
    formData.append('name', exerciseName);
    formData.append('description', exerciseDescription);
    formData.append('typologyId', typologyId);
    formData.append('muscleGroupId', muscleGroupId);
    formData.append('photo', photo); // Append the file object to the FormData

    try {
      const response = await createExercise(formData, user.token);
      if (response) {
        console.log('Exercise Added Successfully!!!');
        setExerciseName('');
        setExerciseDescription('');
        setTypologyId('');
        setMuscleGroupId('');
        setPhoto(null); // Reset the file state as well
        setEditing(false);
      } else {
        console.error('Failed to add an exercise');
      }
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
          <div>
            <Link onClick={() => setIsFormVisible(false)}>
              Back to exercises
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default ExercisesCreation;
