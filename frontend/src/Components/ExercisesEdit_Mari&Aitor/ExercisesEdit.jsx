import React, { useState } from 'react';

import './exercisesEdit.css';
// import Button from '../Shared/Button/Button'
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
        <main className="edit-form-container">
            <div>
                <h2 className="ex-title-edit">Edit exercise:</h2>
                <form
                    className="form-edition-exercise"
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
                        <label className="ex-edit">Exercise Name:</label>
                        <input
                            className="edit-name-form"
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
                        <label className="ex-edit">Exercise Description:</label>
                        <textarea
                            className="edit-description-form"
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
                        <label className="ex-edit">Exercise Typology:</label>
                        <select
                            className="edit-typology-form"
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
                        <label className="ex-edit">
                            Exercise Muscle Group:
                        </label>
                        <select
                            className="edit-muscleGroup-form"
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
                    <div>
                        <label className="ex-edit">Exercise Photo:</label>
                        <br></br>
                        {/* Mostrar la imagen existente si no hay una nueva imagen seleccionada */}
                        {!photoFile && exercise.photo && (
                            <img
                                className="edit-pic"
                                src={`http://localhost:8000/${exercise.photo}`}
                                alt={exercise.title}
                            />
                        )}
                        {/* Entrada para seleccionar una nueva imagen*/}
                        <br></br>
                        <input
                            className="edit-img"
                            type="file"
                            onChange={(e) => setPhotoFile(e.target.files[0])}
                        />
                    </div>
                    {editedExercise.photo && (
                        <img
                            className="edit-pic-2"
                            src={`http://localhost:8000/${editedExercise.photo}`}
                            alt="Exercise"
                        />
                    )}
                    <div className="buttons-edit-form">
                        <button
                            className="edit-update"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? 'UPDATING...' : 'UPDATE EXERCISE'}
                        </button>
                        <button
                            className="edit-cancel"
                            type="button"
                            onClick={() => setEditingExerciseModal(false)}
                        >
                            CANCEL
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default ExerciseEdit;
