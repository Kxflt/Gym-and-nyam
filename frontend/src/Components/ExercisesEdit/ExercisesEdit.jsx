import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { modifyExercise } from '../../services/exerciseService';

const ExerciseEdit = ({
    exercise,
    exercises,
    setExercises,
    setEditingExerciseModal,
}) => {
    const { user } = useAuth();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [editedExercise, setEditedExercise] = useState({
        name: exercise.name,
        description: exercise.description,
        typologyId: exercise.typologyId,
        muscleGroupId: exercise.muscleGroupId,
    });
    const [photoFile, setPhotoFile] = useState(null);

    // Función que permite editar un ejercicio.
    const handleEditExercise = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        const formData = new FormData();

        formData.append('name', editedExercise.name);
        formData.append('description', editedExercise.description);
        formData.append('typologyId', editedExercise.typologyId);
        formData.append('muscleGroupId', editedExercise.muscleGroupId);
        if (photoFile) {
            formData.append('photo', photoFile);
        }

        try {
            const { data } = await modifyExercise(
                exercise.id,
                formData,
                user.token
            );

            // Obtenemos un nuevo array de ejercicios donde modificaremos únicamente el ejercicio
            // que estamos editando.
            const updatedExercises = exercises.map((currentExercise) => {
                if (currentExercise.id === exercise.id) {
                    currentExercise = data.exercise;
                }

                return currentExercise;
            });

            // ACtualizamos el array de ejercicios en el State para que se recargue la lista.
            setExercises(updatedExercises);

            // Cerramos el modal.
            setEditingExerciseModal(false);
        } catch (error) {
            console.error('An error occurred', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <h2>Edit exercise:</h2>
            <form onSubmit={handleEditExercise}>
                <div>
                    <label>Exercise Name:</label>
                    <input
                        type="text"
                        value={editedExercise.name}
                        onChange={(e) =>
                            setEditedExercise({
                                ...editedExercise,
                                name: e.target.value,
                            })
                        }
                        required
                    />
                </div>
                <div>
                    <label>Exercise Description:</label>
                    <textarea
                        value={editedExercise.description}
                        onChange={(e) =>
                            setEditedExercise({
                                ...editedExercise,
                                description: e.target.value,
                            })
                        }
                        required
                    />
                </div>
                <div>
                    <label>Exercise Typology:</label>
                    <input
                        type="text"
                        value={editedExercise.typologyId}
                        onChange={(e) =>
                            setEditedExercise({
                                ...editedExercise,
                                typologyId: e.target.value,
                            })
                        }
                        required
                    />
                </div>
                <div>
                    <label>Exercise Muscle Group:</label>
                    <input
                        type="text"
                        value={editedExercise.muscleGroupId}
                        onChange={(e) =>
                            setEditedExercise({
                                ...editedExercise,
                                muscleGroupId: e.target.value,
                            })
                        }
                        required
                    />
                </div>
                <div>
                    <label>Exercise Photo:</label>
                    {/* Mostrar la imagen existente si no hay una nueva imagen seleccionada */}
                    {!photoFile && exercise.photo && (
                        <img
                            src={`http://localhost:8000/${exercise.photo}`}
                            alt={exercise.title}
                        />
                    )}
                    {/* Entrada para seleccionar una nueva imagen*/}
                    <input
                        type="file"
                        onChange={(e) => setPhotoFile(e.target.files[0])}
                    />
                </div>
                {editedExercise.photo && (
                    <img
                        src={`http://localhost:8000/${editedExercise.photo}`}
                        alt="Exercise"
                    />
                )}
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Updating exercise...' : 'Update exercise'}
                </button>
                <button
                    type="button"
                    onClick={() => setEditingExerciseModal(false)}
                >
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default ExerciseEdit;
