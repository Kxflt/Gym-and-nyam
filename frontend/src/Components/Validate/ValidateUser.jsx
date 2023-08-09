// Importamos las dependencias y los hooks.
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

// Importamos los estilos.
import './validate.css';

const ValidateUser = () => {
    const location = useLocation();
    const { authValidateUser } = useAuth();

    const [activationMessage, setActivationMessage] = useState('');

    const queryParams = new URLSearchParams(location.search); //busca el query string de la url
    const registrationCode = queryParams.get('registrationCode'); //recoge el query param concreto

    useEffect(() => {
        const fetchData = async () => {
            try {
                await authValidateUser(registrationCode);

                setActivationMessage('User activated! :)');
            } catch (err) {
                setActivationMessage('Activation failed! :(');
            }
        };

        if (registrationCode) fetchData();
    }, [registrationCode]);

    return (
        <main>
            <h2>{activationMessage}!</h2>
        </main>
    );
};

export default ValidateUser;
