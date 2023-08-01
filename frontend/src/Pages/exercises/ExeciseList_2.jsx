import React, { useState, useRef } from 'react';
import { useAuth } from '../../context/authContext';
import ExercisesFilter from '../../Components/ExercisesFilter/ExercisesFilter';
import useExercises from './useExercises';
import ExerciseEdit from '../../Components/ExercisesEdit/ExercisesEdit';
import ExercisesCreation from '../../Components/ExercisesCreation/ExercisesCreation';
import LikeButton from '../../Components/like/Like';
import { deleteExercise } from '../../services/exerciseService';

const ExerciseList = () => {
  const { user } = useAuth();
  const { exercises, setExercises, toogleLike, deleteExercise } =
    useExercises();

  const [exercise, setExercise] = useState(null);
  const [editingExerciseModal, setEditingExerciseModal] = useState(false);
  const [exercisesFormModal, setExercisesFormModal] = useState(false);

  return (
    <>
      {exercisesFormModal ? (
        <>
          <ExercisesCreation
            user={user}
            exercises={exercises}
            setExercises={setExercises}
            setExercisesFormModal={setExercisesFormModal}
          />
          <button onClick={() => setExercisesFormModal(false)}>Back</button>
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
                    <button
                      onClick={() => {
                        setExercise(exercise);
                        setEditingExerciseModal(true);
                      }}
                    >
                      Edit
                    </button>
                    <button onClick={() => deleteExercise(exercise.id)}>
                      Eliminar
                    </button>
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
              <button onClick={() => setExercisesFormModal(true)}>
                Exercises Admin
              </button>
            )}
        </>
      )}

      {editingExerciseModal && (
        <ExerciseEdit
          exercise={exercise}
          exercises={exercises}
          setExercises={setExercises}
          setEditingExerciseModal={setEditingExerciseModal}
        />
      )}
    </>
  );
};

export default ExerciseList;
