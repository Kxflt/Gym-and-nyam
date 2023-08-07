import React, { useState, useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import useFavourites from './useFavourites';
import './favouritesPage.css';

const ExerciseFavList = () => {
    const { exercises } = useFavourites();

    return (
        <main className="list-favs-exercises">
            <div className="fav-title">
                <h3>MY FAVOURITES:</h3>
            </div>
            {exercises?.length > 0 ? (
                exercises.map((exercise) => (
                    <div className="exercise-container" key={exercise.id}>
                        <div>
                            {exercise.photo && (
                                <img
                                    src={`http://localhost:8000/${exercise.photo}`}
                                    alt={exercise.title}
                                />
                            )}
                            <h3>{exercise.name}</h3>

                            <div>
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
