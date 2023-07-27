import React, { useState } from 'react';
import NavBar from '../../Components/nav-bar/NavBar';
import Footer from '../../Components/Shared/Footer/Footer';
import ExercisesFilter from '../../Components/ExercisesFilter/ExercisesFilter';
import useExercises from './useExercises';
const ExerciseList = () => {
  const { exercises } = useExercises();
  const [filteredExercises, setFilteredExercises] = useState(exercises);
  const [typologyFilter, setTypologyFilter] = useState('');
  const [muscleGroupFilter, setMuscleGroupFilter] = useState('');

  // Function to handle the filtering of exercises
  const handleFilterExercises = () => {
    const filteredExercises = exercises.filter((exercise) => {
      if (
        (typologyFilter === '' || exercise.typology === typologyFilter) &&
        (muscleGroupFilter === '' || exercise.muscleGroup === muscleGroupFilter)
      ) {
        return true; // Include the exercise in the filtered list
      }
      return false; // Exclude the exercise from the filtered list
    });

    setFilteredExercises(filteredExercises);
  };

  // Function to reset the filters
  const handleResetFilters = () => {
    setTypologyFilter('');
    setMuscleGroupFilter('');
    setFilteredExercises(exercises); // Reset the filtered list to the original list
  };
  //CONTINUO EL CODIGO POR AQUI.
  return (
    <>
      <NavBar />
      <div>
        <ExercisesFilter
          onChangeTypology={(value) => setTypologyFilter(value)}
          onChangeMuscleGroup={(value) => setMuscleGroupFilter(value)}
          onClickRemoveFilters={handleResetFilters}
        />
        {exercises &&
          exercises.map((exercise) => (
            <div key={exercise.id}>
              {console.log(exercise)}
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
      <Footer />
    </>
  );
};

export default ExerciseList;
