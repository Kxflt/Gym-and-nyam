import React from 'react';
import { useAuth } from '../../../context/authContext';
import PropTypes from 'prop-types';
import LikeButton from '../../../Components/like/Like';

const ExerciseFooter = ({
  exerciseId,
  // likes,
  // likedByMe,
  // toggleLike,
  deleteExercise,
  loading,
}) => {
  const { user } = useAuth();

  //Crear o eliminar like de un ejercicio

  //   const handleLike = async (e) => {
  //     try {
  //       e.target.claseList.toggle('like');
  //       await toggleLike(e, exerciseId, likedByMe);
  //     } catch (err) {
  //       alert(err.message);
  //     }
  //   };

  //Eliminar un ejercicio
  const handleDeleteExercise = async () => {
    try {
      if (confirm('Do you want to delete this exercise?')) {
        deleteExercise(exerciseId);
      }
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <footer>
      <div>
        <div>
          {/* <div
                    className={`heart ${likedByMe && 'like'}`}
                    onClick={(e) => handleLike(e)}
                ></div> */}

          <LikeButton />
          {/* <FavButton/> */}
        </div>
        {user && role === 'admin' && (
          <button onClick={() => handleDeleteExercise()} disabled={loading}>
            Delete
          </button>
        )}
      </div>
    </footer>
  );
};

ExerciseFooter.propTypes = {
  exerciseId: PropTypes.number,
  // likedByMe: PropTypes.any,
  // likes: PropTypes.number,
  // toogleLike: PropTypes.func,
  deleteExercise: PropTypes.func,
  loading: PropTypes.bool,
};

export default ExerciseFooter;
