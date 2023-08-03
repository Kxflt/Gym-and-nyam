import React, { useState } from 'react';

const ExerciseEdit = ({
    exercise,
    modifyExercise,
    setEditingExerciseModal,
    loading,
}) => {
    const [editedExercise, setEditedExercise] = useState({
        name: exercise.name,
        description: exercise.description,
        typologyId: exercise.typologyId,
        muscleGroupId: exercise.muscleGroupId,
    });

    const [photoFile, setPhotoFile] = useState(null);

    return (
        <div>
            <h2>Edit exercise:</h2>
            <form
                onSubmit={async (e) => {
                    e.preventDefault(e);

                    await modifyExercise({
                        exerciseId: exercise.id,
                        name: editedExercise.name,
                        description: editedExercise.description,
                        typologyId: editedExercise.typologyId,
                        muscleGroupId: editedExercise.muscleGroupId,
                        photo: photoFile,
                    });

                    // Si el ejercicio ha sido modificado correctamente cerramos el modal.
                    setEditingExerciseModal(false);
                }}
            >
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
                <button type="submit" disabled={loading}>
                    {loading ? 'Updating exercise...' : 'Update exercise'}
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
