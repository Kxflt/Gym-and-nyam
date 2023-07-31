import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuth } from '../../context/authContext';
import ExerciseDelete from '../../Components/ExercisesDelete/ExercisesDelete';
import LikeButton from '../../Components/like/Like';

const ExerciseItem = ({ exercise }) => {
  const { user } = useAuth();
  const [editingExerciseId, setEditingExerciseId] = useState(null);
  const [likedByMe, setLikedByMe] = useState(false);

  useEffect(() => {
    const likedByMeLocalStorage = localStorage.getItem(
      `likedByMe_${exercise.id}`
    );
    setLikedByMe(likedByMeLocalStorage === 'true');
  }, [exercise.id]);

  const toggleLike = async () => {
    try {
      setLoading(true);

      // Call the likeExerciseService to send the like request to the server
      await likeExerciseService(exercise.id, likedByMe, user.token);

      // Update the likedByMe state and save it to local storage
      const updatedLikedByMe = !likedByMe;
      setLikedByMe(updatedLikedByMe);
      localStorage.setItem(
        `likedByMe_${exercise.id}`,
        updatedLikedByMe.toString()
      );
    } catch (error) {
      console.error('Error liking the exercise:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEditButtonClick = (exerciseId) => {
    setEditingExerciseId(exerciseId);
  };

  const handleEditComplete = () => {
    setEditingExerciseId(null);
  };

  return (
    <div key={exercise.id}>
      <h3>{exercise.name}</h3>
      <p>{exercise.description}</p>
      {exercise.photo && (
        <img
          src={`http://localhost:8000/${exercise.photo}`}
          alt={exercise.title}
        />
      )}
      {!editingExerciseId && (
        <div>
          <button onClick={() => handleEditButtonClick(exercise.id)}>
            Edit
          </button>
          <ExerciseDelete exerciseId={exercise.id} />
        </div>
      )}
      <LikeButton
        exercise={exercise}
        likedByMe={likedByMe}
        toggleLike={toggleLike}
      />
    </div>
  );
};

export default ExerciseItem;
