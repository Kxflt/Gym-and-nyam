import React, { useState, useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import ExercisesFilter from '../../Components/ExercisesFilter/ExercisesFilter';
import useExercises from './useExercises';
import ExerciseEdit from '../../Components/ExercisesEdit/ExercisesEdit';
import ExercisesCreation from '../../Components/ExercisesCreation/ExercisesCreation';
import LikeButton from '../../Components/like/Like';

import './exercises.css';

const ExerciseList = () => {
    const { authUser } = useAuth();

    const {
        exercises,
        setExercises,
        setSearchParams,
        addExercise,
        modifyExercise,
        toogleLike,
        deleteExercise,
        loading,
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
                        <button onClick={() => setExercisesFormModal(false)}>
                            Back
                        </button>
                    </>
                )
            ) : (
                <>
                    <div className="exercise-and-filter">
                        <div className="filter-edit">
                            <ExercisesFilter
                                className="filter"
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
                                        EXERCISES ADMIN
                                    </button>
                                )}
                        </div>

                        {exercises?.length > 0 ? (
                            exercises.map((exercise) => (
                                <div
                                    className="exercise-container"
                                    key={exercise.id}
                                >
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
                                                    Edit
                                                </button>
                                                <button
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
                                                    Eliminar
                                                </button>
                                            </div>
                                        )}
                                    <LikeButton
                                        exerciseId={exercise.id}
                                        likedByMe={exercise.likedByMe}
                                        toogleLike={toogleLike}
                                    />
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
