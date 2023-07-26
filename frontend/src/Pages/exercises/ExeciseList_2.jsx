import React from 'react';

import useExercises from './useExercises';

const ExerciseList = () => {
  const { exercises } = useExercises();

  return (
    <div>
      {exercises &&
        exercises.map((exercise) => (
          <div key={exercise.id}>
            {console.log(exercise)}
            <h3>{exercise.title}</h3>
            <p>{exercise.description}</p>
            {exercise.photo && (
              <img
                src={`http://localhost:8000/${exercise.photo}`}
                alt={exercise.title}
              />
            )}
          </div>
        ))}
    </div>
  );
};

export default ExerciseList;
