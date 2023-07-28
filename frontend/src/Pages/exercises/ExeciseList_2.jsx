import React, { useState } from 'react';
import NavBar from '../../Components/nav-bar/NavBar';
import Footer from '../../Components/Shared/Footer/Footer';
import ExercisesFilter from '../../Components/ExercisesFilter/ExercisesFilter';
import useExercises from './useExercises';
import { useAuth } from '../../context/authContext';

const ExerciseList = () => {
  const { user } = useAuth();
  const { exercises, setExercises } = useExercises();

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
            </div>
          ))}
      </div>
    </>
  );
};

export default ExerciseList;
