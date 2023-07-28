import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { validation } from '../../services/authService';

const RecoverPass = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search); //busca el query string de la url
  const registrationCode = queryParams.get('registrationCode'); //recoge el query param concreto

  useEffect(() => {
    const fetchValidateUser = async () => {
      const body = await validation(registrationCode);
    };

    fetchValidateUser();
  }, []);

  return <h2>Activacion usuario</h2>;
};

export default RecoverPass;
