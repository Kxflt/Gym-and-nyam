import React from 'react';
import { useState } from 'react';
import './ExercisesCreation.css';

const ExercisesCreation = ({ addExercise, setExercisesFormModal, loading }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [typologyId, setTypologyId] = useState('');
    const [muscleGroupId, setMuscleGroupId] = useState('');
    const [photo, setPhoto] = useState('');

    return (
        <main className="add-exercise-container">
            <div>
                <h2 className="add-title-exercise">Add exercise:</h2>
                <form
                    className="form-add-exercise"
                    onSubmit={async (e) => {
                        e.preventDefault();

                        await addExercise({
                            name,
                            description,
                            typologyId,
                            muscleGroupId,
                            photo,
                        });

                        // Cerramos el modal tras agregar el ejercicio.
                        setExercisesFormModal(false);
                    }}
                >
                    <div>
                        <label className="add-ex">Exercise Name:</label>
                        <input
                            className="add-name-form"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="add-ex">Exercise Description:</label>
                        <textarea
                            className="add-description-form"
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="add-ex">Exercise Typology::</label>
                        <select
                            className="add-typology-form"
                            type="text"
                            value={typologyId}
                            onChange={(e) => setTypologyId(e.target.value)}
                            required
                        >
                            <option value="">--</option>
                            <option value="1">Cardio</option>
                            <option value="2">BodyBuilding</option>
                        </select>
                    </div>

                    <div>
                        <label className="add-ex">Exercise Muscle Group:</label>
                        <select
                            className="add-muscleGroup-form"
                            type="text"
                            value={muscleGroupId}
                            onChange={(e) => setMuscleGroupId(e.target.value)}
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
                        <label className="add-ex">Exercise Photo</label>
                        <input
                            className="add-pic-form"
                            type="file"
                            onChange={(e) => setPhoto(e.target.files[0])}
                            required
                        />
                    </div>

                    <button
                        className="ex-button-add"
                        type="Submit"
                        disabled={loading}
                    >
                        {loading ? 'Adding exercise...' : 'Add exercise'}
                    </button>
                </form>
            </div>
        </main>
    );
};

export default ExercisesCreation;
