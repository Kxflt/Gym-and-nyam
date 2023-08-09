import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { useError } from '../../context/ErrorContext';

import { listFavExercisesService } from '../../services/exerciseService';

import { handleErrorMessage } from '../../utils/handleErrorMessage';

const useFavsExercises = () => {
    const { authToken } = useAuth();
    const { setErrorMessage } = useError();

    const [exercises, setExercises] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Realizamos una petición para obtener los ejercicios.
        const fetchExercises = async () => {
            try {
                setLoading(true);

                const body = await listFavExercisesService(searchParams);

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

    return {
        exercises,
        setSearchParams,
        setExercises,
        loading,
    };
};

export default useFavsExercises;
