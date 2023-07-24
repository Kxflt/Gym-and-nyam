import React from 'react';
import PropTypes from 'prop-types';
import ExerciseBody from './ExerciseBody/ExerciseBody';
import ExerciseFooter from './ExerciseFooter/ExerciseFooter';
import ExerciseHeader from './ExerciseHeader/ExerciseHeader';
import useExercise from './useExercises';
import './exercises.css';

const Exercise = ({ exercise, deleteExercise, loading }) => {
  const { exercises, toogleLike, setSearchParams, errMsg } = useExercise();
  return (
    <li className="exercise">
      <ExerciseHeader name={exercise.name} />
      <ExerciseBody text={exercise.description} image={exercise.photo} />
      <ExerciseFooter
        exerciseId={exercise.id}
        // likes={exercises.likes}
        // likedByMe={exercises.likedByMe}
        // toogleLike={toogleLike}
        deleteExercise={deleteExercise}
        loading={loading}
      />
    </li>
  );
};

Exercise.PropTypes = {
  exercise: PropTypes.object,
  // toogleLike: PropTypes.func,
  deleteExercise: PropTypes.func,
  loading: PropTypes.bool,
};

export default Exercise;
