import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { deleteExercise } from '../../services/exerciseService';

const ExerciseDelete = ({ exerciseId }) => {
    const { user } = useAuth();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        try {
            setIsDeleting(true);

            const response = await deleteExercise(exerciseId, user.token);
            if (response) {
                console.log('Exercise Deleted Successfully!!!');
            } else {
                console.error('Failed to delete the exercise');
            }
        } catch (error) {
            console.error('An error occurred', error);
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <button onClick={handleDelete} disabled={isDeleting}>
            {isDeleting ? 'Deleting exercise...' : 'Delete exercise'}
        </button>
    );
};

export default ExerciseDelete;
