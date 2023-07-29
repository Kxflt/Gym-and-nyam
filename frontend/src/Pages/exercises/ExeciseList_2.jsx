import React, { useState } from 'react';
import ExercisesFilter from '../../Components/ExercisesFilter/ExercisesFilter';
import useExercises from './useExercises';
import { useAuth } from '../../context/authContext';
import ExerciseEdit from '../../Components/ExercisesEdit/ExercisesEdit';
import ExerciseDelete from '../../Components/ExercisesDelete/ExercisesDelete';
import ExercisesCreation from '../../Components/ExercisesCreation/ExercisesCreation';

const ExerciseList = () => {
  const { user } = useAuth();
  const { exercises, setExercises } = useExercises();
  const [editingExerciseId, setEditingExerciseId] = useState(null);
  const [exercisesAdminMode, setExercisesAdminMode] = useState(false);
  const [deleteExerciseId, setDeleteExerciseId] = useState(false);

  const handleEditButtonClick = (exerciseId) => {
    setEditingExerciseId(exerciseId);
  };

  const handleEditComplete = () => {
    setEditingExerciseId(null);
  };

  const handleExercisesAdminButtonClick = () => {
    setExercisesAdminMode(true);
  };

  const handleExitAdminMode = () => {
    setExercisesAdminMode(false);
  };

  const handleDeleteButtonClick = (exerciseId) => {
    setDeleteExerciseId(exerciseId);
  };

  return (
    <>
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
              {!editingExerciseId && !exercisesAdminMode && (
                <button onClick={() => handleEditButtonClick(exercise.id)}>
                  Edit
                </button>
              )}
              <ExerciseDelete exerciseId={exercise.id} />
            </div>
          ))}
      </div>
      {!editingExerciseId && !exercisesAdminMode && (
        <button onClick={handleExercisesAdminButtonClick}>
          Exercises Admin
        </button>
      )}
      {exercisesAdminMode && (
        <>
          <ExercisesCreation
            user={user}
            setExercises={setExercises}
            onExitAdminMode={handleExitAdminMode}
          />
          <button onClick={handleExitAdminMode}>Back</button>
        </>
      )}
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
