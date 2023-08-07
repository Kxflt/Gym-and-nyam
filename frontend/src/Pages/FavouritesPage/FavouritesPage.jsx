import React, { useState, useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import useFavourites from './useFavourites';
import './favouritesPage.css';

const ExerciseFavList = () => {
    const { exercises } = useFavourites();

    return (
        <main className="list-favs-exercises">
            <div className="fav-title">
                <h3 className="title-favs">MY FAVOURITES:</h3>
            </div>
            <div className="container-cards-favs">
                {exercises?.length > 0 ? (
                    exercises.map((exercise) => (
                        <div
                            className="exercise-container-fav"
                            key={exercise.id}
                        >
                            <div>
                                {exercise.photo && (
                                    <img
                                        src={`http://localhost:8000/${exercise.photo}`}
                                        alt={exercise.title}
                                    />
                                )}
                                <div className="exerc-fav-text">
                                    <h3 className="title-exercise-fav">
                                        {exercise.name}
                                    </h3>

                                    <p>{exercise.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No favorite exercises found.</p>
                )}
            </div>
        </main>
    );
};

export default ExerciseFavList;
