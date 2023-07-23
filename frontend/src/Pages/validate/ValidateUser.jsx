import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { validation } from '../../services/authService';
import Footer from '../../Components/Shared/Footer/Footer';
import NavBar from '../../Components/nav-bar/NavBar';

import './validate.css';

const ValidateUser = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search); //busca el query string de la url
  const registrationCode = queryParams.get('registrationCode'); //recoge el query param concreto

  useEffect(() => {
    const fetchValidateUser = async () => {
      const body = await validation(registrationCode);
      console.log(body);
    };

    fetchValidateUser();
  }, []);

  return (
    <>
      <NavBar />
      <h2>User Activated!!!</h2>
      <Footer />
    </>
  );
};

export default ValidateUser;
