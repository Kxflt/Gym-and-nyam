import { useEffect, useState } from 'react';
import { useAuth } from '../../context/authContext';

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

    // Si existe token llamamos a la función anterior.
    if (user.token) fetchExercises();
  }, [user]);

  // Función que agrega o elimina un like.
  const toogleLike = async (e, exerciseId, likedByMe) => {
    try {
      setLoading(true);

      // Actualizamos el like en la base de datos.
      await likeExerciseService(exerciseId, likedByMe, user);

      // Ahora debemos actualizar el like en el State.
      setExercises(
        exercises.map((exercise) => {
          // Vamos a modificar únicamente el ej cuyo id recibamos como argumento.
          if (exercise.id === exerciseId) {
            // Comprobamos si el div donde aparece el corazón tiene la clase like.
            const hasLikeClass = e.target.classList.contains('like');

            // Si tiene la clase like aumentamos los likes de este tweet en +1, de lo contrario
            // los decrementamos en -1.
            if (hasLikeClass) {
              exercise.likes++;
            } else {
              exercise.likes--;
            }

            // Invertimos el valor de likedByMe.
            exercise.likedByMe = !exercise.likedByMe;
          }

          // Retornamos el tweet actual.
          return exercise;
        })
      );
    } finally {
      setLoading(false);
    }
  };

  // Función que elimina un tweet del State.
  const deleteExercise = async (exerciseId) => {
    try {
      setLoading(true);

      // Eliminamos el ej de la base de datos.
      await deleteExerciseService(exerciseId, user);

      // Eliminamos el ej del State.
      setExercises(exercises.filter((exercise) => exercise.id !== exerciseId));
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
