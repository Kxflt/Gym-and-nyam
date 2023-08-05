import React from 'react';
import { useState } from 'react';

const ExercisesCreation = ({ addExercise, setExercisesFormModal, loading }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [typologyId, setTypologyId] = useState('');
    const [muscleGroupId, setMuscleGroupId] = useState('');
    const [photo, setPhoto] = useState('');

    return (
        <>
            <div>
                <h2>Add exercise:</h2>
                <form
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
                        <label>Exercise Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Exercise Description:</label>
                        <textarea
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label>Exercise Typology::</label>
                        <select
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
                        <label>Exercise Muscle Group:</label>
                        <select
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
                        <div>
                            <label>Exercise Photo</label>
                            <input
                                type="file"
                                onChange={(e) => setPhoto(e.target.files[0])}
                                required
                            />
                        </div>
                    </div>
                    <button type="Submit" disabled={loading}>
                        {loading ? 'Adding exercise...' : 'Add exercise'}
                    </button>
                </form>
            </div>
        </>
    );
};

export default ExercisesCreation;
