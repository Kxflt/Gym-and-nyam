import { useEffect, useState } from 'react';
import { useAuth } from '../../context/authContext';
import {
  likeExerciseService,
  deleteExercise,
} from '../../services/exerciseService';

const useExercises = () => {
  const { user } = useAuth();

  const [exercises, setExercises] = useState([]);
  const [errMsg, setErrMsg] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Realizamos una petición para obtener los ejercicios.
    const fetchExercises = async () => {
      try {
        setLoading(true);

        const res = await fetch(`http://localhost:8000/exercises`, {
          headers: {
            Authorization: user.token,
          },
        });

        const body = await res.json();

        if (!res.ok) {
          throw new Error(body.message);
        }

        setExercises(body.data.exercises);
      } catch (err) {
        setErrMsg(err.message);
      } finally {
        setLoading(false);
      }
    };

    // Call fetchExercises when the pageNumber or itemsPerPage change.
    if (user.token) fetchExercises();
  }, [user.token]);

  // Función que agrega o elimina un like.
  const toogleLike = async (exerciseId, likedByMe) => {
    try {
      setLoading(true);

      // Actualizamos el like en la base de datos.
      await likeExerciseService(exerciseId, likedByMe, user.token);

      // Modificamos el array de ejercicios (creando uno nuevo).
      const updatedExercises = exercises.map((exercise) => {
        // Modificamos la propiedad "likedByMe" del ejercicio sobre el que hicimos like.
        if (exercise.id === exerciseId) {
          exercise.likedByMe = !exercise.likedByMe;
        }

        return exercise;
      });

      // Ahora debemos actualizar el like en el State.
      setExercises(updatedExercises);
    } finally {
      setLoading(false);
    }
  };

  // Función que permite filtrar ejercicios por keyword, grupo muscular, etc.

  // Función que elimina un ejercicio del State.
  const deleteExercise = async (exerciseId) => {
    try {
      setLoading(true);

      // Eliminamos el ejercicio de la base de datos.
      await deleteExercise(exerciseId, user.token);

      // Eliminamos el ejercicio del State.
      setExercises((exercises) =>
        exercises.filter((exercise) => exercise.id !== exerciseId)
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    exercises,
    setExercises,
    toogleLike,
    deleteExercise,
    errMsg,
    loading,
  };
};

export default useExercises;
