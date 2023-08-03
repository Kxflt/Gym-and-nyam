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
                    <ExercisesFilter
                        setSearchParams={setSearchParams}
                        loading={loading}
                    />

                    {exercises?.length > 0 ? (
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
                                {!editingExerciseModal &&
                                    authUser?.role === 'admin' && (
                                        <div>
                                            <button
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
                    {!editingExerciseModal &&
                        !exercisesFormModal &&
                        authUser?.role === 'admin' && (
                            <button
                                className="modalExercises"
                                onClick={() => setExercisesFormModal(true)}
                            >
                                EXERCISES ADMIN
                            </button>
                        )}
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
