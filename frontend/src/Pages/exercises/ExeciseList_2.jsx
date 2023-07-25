import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExerciseList = () => {
  const [exercises, setExecises] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8000/exercises')
      .then((response) => {
        setExecises(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los ejercicios:', error);
      });
  }, []);

  return (
    <div>
      {exercises.map((exercise) => (
        <div key={exercise.id}>
          <h3>{exercise.title}</h3>
          <p>{exercise.description}</p>
          {exercise.imageUrl && (
            <img src={exercise.imageUrl} alt={exercise.title} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ExerciseList;
