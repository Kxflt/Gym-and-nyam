import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useError } from '../../context/ErrorContext';

import {
    createExerciseService,
    likeExerciseService,
    listExercisesService,
    deleteExerciseService,
    modifyExerciseService,
} from '../../services/exerciseService';

import { handleErrorMessage } from '../../utils/handleErrorMessage';

const useExercises = () => {
    const { authToken } = useAuth();
    const { setErrorMessage } = useError();

    const [exercises, setExercises] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);

    //__________________________________________

    //CREAR LA FUNCION CREAR EJERCICIO Y MODIFICAR EJERCICIO AQUI!!!
    //__________________________________________
    useEffect(() => {
        // Realizamos una petición para obtener los ejercicios.
        const fetchExercises = async () => {
            try {
                setLoading(true);

                const body = await listExercisesService(searchParams);

                setExercises(body.data.exercises);
            } catch (err) {
                handleErrorMessage(err, setErrorMessage);
            } finally {
                setLoading(false);
            }
        };

        // Si existe un usuario buscamos los ejercicios.
        if (authToken) fetchExercises();
    }, [searchParams, setErrorMessage]);

    // Función que crea un ejercicio en la base de datos y actualiza el State.
    const addExercise = async ({
        name,
        description,
        typologyId,
        muscleGroupId,
        photo,
    }) => {
        try {
            setLoading(true);

            const formData = new FormData();
            formData.append('name', name);
            formData.append('description', description);
            formData.append('typologyId', typologyId);
            formData.append('muscleGroupId', muscleGroupId);
            formData.append('photo', photo);

            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            };

            const body = await createExerciseService(formData, config);

            // Actualizamos el State.
            setExercises([body.data.exercise, ...exercises]);
        } catch (err) {
            handleErrorMessage(err, setErrorMessage);
        } finally {
            setLoading(false);
        }
    };

    // Función que edita un ejercicio en la base de datos y actualiza el State.
    const modifyExercise = async ({
        exerciseId,
        name,
        description,
        typologyId,
        muscleGroupId,
        photo,
    }) => {
        try {
            setLoading(true);

            console.log(
                exerciseId,
                name,
                description,
                typologyId,
                muscleGroupId,
                photo
            );

            const formData = new FormData();
            formData.append('name', name);
            formData.append('description', description);
            formData.append('typologyId', typologyId);
            formData.append('muscleGroupId', muscleGroupId);

            if (photo) formData.append('photo', photo);

            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            };

            const body = await modifyExerciseService(
                exerciseId,
                formData,
                config
            );

            const updatedExercises = exercises.map((exercise) => {
                if (exercise.id === exerciseId) {
                    return body.data.exercise;
                }

                return exercise;
            });

            // Actualizamos el State.
            setExercises(updatedExercises);
        } catch (err) {
            handleErrorMessage(err, setErrorMessage);
        } finally {
            setLoading(false);
        }
    };

    // Función que agrega o elimina un like.
    const toogleLike = async (exerciseId, likedByMe) => {
        try {
            setLoading(true);

            // Actualizamos el like en la base de datos.
            await likeExerciseService(exerciseId, likedByMe);

            // Modificamos el array de ejercicios creando un nuevo array donde modificamos unicamente el ejercicio
            // sobre el que modificamos el like.
            const updatedExercises = exercises.map((exercise) => {
                // Modificamos la propiedad "likedByMe" del ejercicio sobre el que hicimos like.
                if (exercise.id === exerciseId) {
                    exercise.likedByMe = !exercise.likedByMe;
                }

                return exercise;
            });

            // Ahora debemos actualizar el like en el State.
            setExercises(updatedExercises);
        } catch (err) {
            handleErrorMessage(err, setErrorMessage);
        } finally {
            setLoading(false);
        }
    };

    // Función que elimina un ejercicio de la base de datos y del State.
    const deleteExercise = async (exerciseId) => {
        try {
            setLoading(true);

            // Eliminamos el ejercicio de la base de datos.
            await deleteExerciseService(exerciseId);

            // Eliminamos el ejercicio del State.
            setExercises((exercises) =>
                exercises.filter((exercise) => exercise.id !== exerciseId)
            );
        } catch (err) {
            handleErrorMessage(err, setErrorMessage);
        } finally {
            setLoading(false);
        }
    };

    return {
        exercises,
        setSearchParams,
        setExercises,
        addExercise,
        modifyExercise,
        toogleLike,
        deleteExercise,
        loading,
    };
};

export default useExercises;
