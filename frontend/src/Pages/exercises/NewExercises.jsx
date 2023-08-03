import React, { useState, useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import useExercises from './useExercises';

import './exercises.css';

const ExerciseList = () => {
    const { authToken } = useAuth();
    const { exercises, loading } = useExercises();

    return (
        <div>
            {exercises &&
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
                    </div>
                ))}
        </div>
    );
};

export default ExerciseList;
