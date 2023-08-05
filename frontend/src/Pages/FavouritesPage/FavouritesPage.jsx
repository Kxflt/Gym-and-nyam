import React, { useState, useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import useFavourites from './useFavourites';

const ExerciseFavList = () => {
    const { exercises } = useFavourites();

    return (
        <main className="list-favs-exercises">
            <h3>MY FAVOURITES:</h3>
            {exercises?.length > 0 ? (
                exercises.map((exercise) => (
                    <div className="exercise-container" key={exercise.id}>
                        <div className="front">
                            {/* cara frontal de la carta */}
                            <h3>{exercise.name}</h3>
                            {exercise.photo && (
                                <img
                                    src={`http://localhost:8000/${exercise.photo}`}
                                    alt={exercise.title}
                                />
                            )}
                            {/* Cara trasera de la carta */}
                            <div className="back">
                                <p>{exercise.description}</p>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No favorite exercises found.</p>
            )}
        </main>
    );
};

export default ExerciseFavList;
