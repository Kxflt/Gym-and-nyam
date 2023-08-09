import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../context/authContext';
import ExercisesFilter from '../../Components/ExercisesFilter/ExercisesFilter.jsx';

import ExerciseEdit from '../../Components/ExercisesEdit/ExercisesEdit';
import ExercisesCreation from '../../Components/ExercisesCreation/ExercisesCreation';
import LikeButton from '../../Components/Like/Like';
import FavButton from '../../Components/Favourite/Favourite';
import useExercises from './useExercises';
import './exercisesList.css';

const ExerciseList = () => {
    const { authUser } = useAuth();

    const {
        exercises,
        setSearchParams,
        addExercise,
        modifyExercise,
        toogleLike,
        deleteExercise,
        loading,
        addFavourite,
    } = useExercises();

    const [exercise, setExercise] = useState(null);
    const [editingExerciseModal, setEditingExerciseModal] = useState(false);
    const [exercisesFormModal, setExercisesFormModal] = useState(false);

    return (
        <main className="list-exercises">
            {exercisesFormModal ? (
                authUser.role === 'admin' && (
                    <>
                        <ExercisesCreation
                            addExercise={addExercise}
                            setExercisesFormModal={setExercisesFormModal}
                            loading={loading}
                        />
                        <button
                            className="back-add-ex"
                            onClick={() => setExercisesFormModal(false)}
                        >
                            BACK
                        </button>
                    </>
                )
            ) : (
                <>
                    <div className="exercise-and-filter">
                        <div className="filter-edit">
                            <ExercisesFilter
                                setSearchParams={setSearchParams}
                                loading={loading}
                            />
                            {!editingExerciseModal &&
                                !exercisesFormModal &&
                                authUser?.role === 'admin' && (
                                    <button
                                        className="modalExercises"
                                        onClick={() =>
                                            setExercisesFormModal(true)
                                        }
                                    >
                                        ADMIN ZONE: ADD EXERCISE
                                    </button>
                                )}
                        </div>

                        {exercises?.length > 0 ? (
                            exercises.map((exercise) => (
                                <div
                                    className="exercise-container"
                                    key={exercise.id}
                                >
                                    <div>
                                        {exercise.photo && (
                                            <img
                                                src={`http://localhost:8000/${exercise.photo}`}
                                                alt={exercise.title}
                                            />
                                        )}
                                        <div className="info-exercise">
                                            <h3 className="h3-ex">
                                                {exercise.name}
                                            </h3>

                                            <p className="p-ex">
                                                {exercise.description}
                                            </p>
                                        </div>
                                    </div>

                                    {!editingExerciseModal &&
                                        authUser?.role === 'admin' && (
                                            <div className="edit-button">
                                                <button
                                                    className="edit"
                                                    onClick={() => {
                                                        setExercise(exercise);
                                                        setEditingExerciseModal(
                                                            true
                                                        );
                                                    }}
                                                >
                                                    EDIT
                                                </button>
                                                <button
                                                    className="delete"
                                                    onClick={() => {
                                                        if (
                                                            confirm(
                                                                '¿Deseas eliminar este ejercicio?'
                                                            )
                                                        ) {
                                                            deleteExercise(
                                                                exercise.id
                                                            );
                                                        }
                                                    }}
                                                    disabled={loading}
                                                >
                                                    DELETE
                                                </button>
                                            </div>
                                        )}
                                    <div className="like-favourite">
                                        <LikeButton
                                            exerciseId={exercise.id}
                                            likedByMe={exercise.likedByMe}
                                            toogleLike={toogleLike}
                                        />

                                        <FavButton
                                            exerciseId={exercise.id}
                                            favByMe={exercise.favByMe}
                                            addFavourite={addFavourite}
                                        />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No exercises found.</p>
                        )}
                    </div>
                </>
            )}

            {editingExerciseModal && (
                <ExerciseEdit
                    exercise={exercise}
                    modifyExercise={modifyExercise}
                    setEditingExerciseModal={setEditingExerciseModal}
                    loading={loading}
                />
            )}
        </main>
    );
};

export default ExerciseList;
