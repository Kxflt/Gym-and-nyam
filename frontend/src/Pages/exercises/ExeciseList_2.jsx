import React, { useState, useRef } from 'react';
import ExercisesFilter from '../../Components/ExercisesFilter/ExercisesFilter';
import useExercises from './useExercises';
import { useAuth } from '../../context/authContext';
import ExerciseEdit from '../../Components/ExercisesEdit/ExercisesEdit';
import ExerciseDelete from '../../Components/ExercisesDelete/ExercisesDelete';
import ExercisesCreation from '../../Components/ExercisesCreation/ExercisesCreation';
import LikeButton from '../../Components/like/Like';

const ExerciseList = () => {
  const { user } = useAuth();
  //Prueba para ver el pusheo
  const { exercises, setExercises, toogleLike } = useExercises();

  const [editingExerciseModal, setEditingExerciseModal] = useState(false);
  const [exercisesFormModal, setExercisesFormModal] = useState(false);

  const handleEditButtonClick = (exerciseId) => {
    setEditingExerciseModal(exerciseId);
  };

  const handleEditComplete = () => {
    setEditingExerciseModal(false);
  };

  const handleExercisesFormButtonClick = () => {
    setExercisesFormModal(true);
  };

  const handleExitFormMode = () => {
    setExercisesFormModal(false);
  };

  // Function to handle exercise edit complete
  const handleExerciseEditComplete = (editedExercise) => {
    // Find the index of the edited exercise in the exercises array
    const index = exercises.findIndex((ex) => ex.id === editedExercise.id);

    // Update the exercise in the exercises array with the updated exercise
    if (index !== -1) {
      const updatedExercises = [...exercises];
      updatedExercises[index] = editedExercise;
      setExercises(updatedExercises);
    }
  };

  return (
    <>
      {exercisesFormModal ? (
        <>
          <ExercisesCreation
            user={user}
            setExercises={setExercises}
            onExitAdminMode={handleExitFormMode}
          />
          <button onClick={handleExitFormMode}>Back</button>
        </>
      ) : (
        <>
          <ExercisesFilter setExercises={setExercises} token={user.token} />

          {exercises && exercises.length > 0 ? (
            exercises.map((exercise) => (
              <div key={exercise.id}>
                <h3>{exercise.name}</h3>
                <p>{exercise.description}</p>
                {exercise.photo && (
                  <img
                    src={`http://localhost:8000/${exercise.photo}`}
                    alt={exercise.title}
                  />
                )}
                {!editingExerciseModal && user.role === 'admin' && (
                  <div>
                    <button onClick={() => handleEditButtonClick(exercise.id)}>
                      Edit
                    </button>
                    <ExerciseDelete exerciseId={exercise.id} />
                  </div>
                )}
                <LikeButton
                  exerciseId={exercise.id}
                  likedByMe={exercise.likedByMe}
                  toogleLike={toogleLike}
                />
              </div>
            ))
          ) : (
            <p>No exercises found.</p>
          )}
          {!editingExerciseModal &&
            !exercisesFormModal &&
            user.role === 'admin' && (
              <button onClick={handleExercisesFormButtonClick}>
                Exercises Admin
              </button>
            )}
        </>
      )}

      {editingExerciseModal && (
        <ExerciseEdit
          exercise={exercises.find((ex) => ex.id === editingExerciseModal)}
          onEditComplete={handleEditComplete}
        />
      )}
    </>
  );
};

export default ExerciseList;
