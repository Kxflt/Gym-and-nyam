import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { validation } from '../../services/authService';

const RecoverPass = () => {
    const location = useLocation();

    //Busca el query string de la url
    const queryParams = new URLSearchParams(location.search);

    //Recoge el query param concreto
    const registrationCode = queryParams.get('registrationCode');

    useEffect(() => {
        const fetchValidateUser = async () => {
            const body = await validation(registrationCode);
        };

        fetchValidateUser();
    }, []);

    return <h2>Activacion usuario</h2>;
};

export default RecoverPass;
