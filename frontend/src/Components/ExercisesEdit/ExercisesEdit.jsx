import React, { useState, useCallback } from 'react';
import './exerciseEdit.css';

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
    const muscleInput = useCallback((inputElement) => {
        if (inputElement) {
            inputElement.focus();
        }
    });
    return (
        <div className="edit-container">
            <div className="title">
                <h2>Edit exercise:</h2>
            </div>
            <div className="form-content">
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
                    <div className="exercises-edit">
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
                            <select
                                type="text"
                                value={editedExercise.typologyId}
                                onChange={(e) =>
                                    setEditedExercise({
                                        ...editedExercise,
                                        typologyId: e.target.value,
                                    })
                                }
                                required
                            >
                                <option value="">--</option>
                                <option value="1">Cardio</option>
                                <option value="2">BodyBuilding</option>
                            </select>
                        </div>
                        <div>
                            <label>Exercise Muscle Group:</label>
                            <select
                                ref={muscleInput}
                                type="text"
                                value={editedExercise.muscleGroupId}
                                onChange={(e) =>
                                    setEditedExercise({
                                        ...editedExercise,
                                        muscleGroupId: e.target.value,
                                    })
                                }
                                required
                            >
                                <option value="">--</option>
                                <option value="1">Biceps</option>
                                <option value="2">Triceps</option>
                                <option value="3">Forearm</option>
                                <option value="4">Shoulders</option>
                                <option value="5">Back</option>
                                <option value="6">Chest</option>
                                <option value="7">Abdomen</option>
                                <option value="8">Legs</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="photo-label">Exercise Photo:</label>
                        {/* Mostrar la imagen existente si no hay una nueva imagen seleccionada */}
                        {!photoFile && exercise.photo && (
                            <img
                                className="image"
                                src={`http://localhost:8000/${exercise.photo}`}
                                alt={exercise.title}
                            />
                        )}
                        {/* Entrada para seleccionar una nueva imagen*/}
                        <input
                            className="photo"
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
                    <div className="update-cancel">
                        <button type="submit" disabled={loading}>
                            {loading
                                ? 'Updating exercise...'
                                : 'Update exercise'}
                        </button>
                        <button
                            type="button"
                            onClick={() => setEditingExerciseModal(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ExerciseEdit;
