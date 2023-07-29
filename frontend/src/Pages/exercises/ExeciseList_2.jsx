import React, { useState } from 'react';

import ExercisesFilter from '../../Components/ExercisesFilter/ExercisesFilter';
import useExercises from './useExercises';
import ExercisesCreation from '../../Components/ExercisesCreation/ExercisesCreation';
import { useAuth } from '../../context/authContext';

const ExerciseList = () => {
  const { user } = useAuth();
  const { exercises, setExercises } = useExercises();
  const [editing, setEditing] = useState(false);

  return (
    <>
      <div>
        <ExercisesFilter setExercises={setExercises} token={user.token} />
        {editing ? (
          <ExercisesCreation user={user} setEditing={setEditing} />
        ) : (
          exercises &&
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
          ))
        )}
      </div>
      <button onClick={() => setEditing(true)}>Exercises Admin</button>
    </>
  );
};

export default ExerciseList;
