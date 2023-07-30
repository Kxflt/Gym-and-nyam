import React, { useState, useRef } from 'react';
import ExercisesFilter from '../../Components/ExercisesFilter/ExercisesFilter';
import useExercises from './useExercises';
import { useAuth } from '../../context/authContext';
import ExerciseEdit from '../../Components/ExercisesEdit/ExercisesEdit';
import ExerciseDelete from '../../Components/ExercisesDelete/ExercisesDelete';
import ExercisesCreation from '../../Components/ExercisesCreation/ExercisesCreation';

const ExerciseList = () => {
  const { user } = useAuth();
  const itemsPerPage = 5; //DECIDIR CUANTOS POR PAGINA
  const [pageNumber, setPageNumber] = useState(1);
  const { exercises, setExercises } = useExercises(pageNumber, itemsPerPage);
  const [editingExerciseId, setEditingExerciseId] = useState(null);
  const [exercisesFormMode, setExercisesFormMode] = useState(false);

  const handleEditButtonClick = (exerciseId) => {
    setEditingExerciseId(exerciseId);
  };

  const handleEditComplete = () => {
    setEditingExerciseId(null);
  };

  const handleExercisesFormButtonClick = () => {
    setExercisesFormMode(true);
  };

  const handleExitFormMode = () => {
    setExercisesFormMode(false);
  };

  const handlePageChange = (newPageNumber) => {
    setPageNumber(newPageNumber);
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
      {exercisesFormMode ? (
        <>
          <ExercisesCreation
            user={user}
            setExercises={setExercises}
            onExitAdminMode={handleExitFormMode}
          />
          <button onClick={handleExitFormMode}>Back</button>
        </>
      ) : (
        <div>
          <ExercisesFilter setExercises={setExercises} token={user.token} />
          {exercises &&
            exercises.map((exercise) => (
              <div key={exercise.id}>
                <h3>{exercise.name}</h3>
                <p>{exercise.description}</p>
                <p>{exercise.muscleGroupId}</p>
                <p>{exercise.typologyId}</p>
                {exercise.photo && (
                  <img
                    src={`http://localhost:8000/${exercise.photo}`}
                    alt={exercise.title}
                  />
                )}
                {!editingExerciseId && (
                  <div>
                    <button onClick={() => handleEditButtonClick(exercise.id)}>
                      Edit
                    </button>
                    <ExerciseDelete exerciseId={exercise.id} />
                  </div>
                )}
              </div>
            ))}
          {!editingExerciseId && !exercisesFormMode && (
            <button onClick={handleExercisesFormButtonClick}>
              Exercises Admin
            </button>
          )}
        </div>
      )}

      {/* Pagination controls */}
      <div>
        <button
          disabled={pageNumber === 1}
          onClick={() => handlePageChange(pageNumber - 1)}
        >
          Previous Page
        </button>
        <span>Page {pageNumber}</span>
        <button onClick={() => handlePageChange(pageNumber + 1)}>
          Next Page
        </button>
      </div>

      {editingExerciseId && (
        <ExerciseEdit
          exercise={exercises.find((ex) => ex.id === editingExerciseId)}
          onEditComplete={handleEditComplete}
        />
      )}
    </>
  );
};

export default ExerciseList;
