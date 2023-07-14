import React from 'react';
import axios from 'axios';
import { CURRENT_USER_LOCAL_STORAGE } from '../utils/constants';
import { login, newUser, signUpAvatar, updateUser } from './authService';
import { createExercise, modifyExercise } from './exerciseService';

//Cogemos el token del localstorage => nos viene los datos de usuario junto al token al registrarnos.
const currentUser = JSON.parse(
  localStorage.getItem(CURRENT_USER_LOCAL_STORAGE)
);

const token = currentUser?.user;

const tokenRequired = (url) => {
  //Nos hace un destructuring de la URL, y el pathname esta dentro, siendo las unicas rutas publicas login y account, el resto seran privadas.
  const parsedUrl = new URL(url);

  //Por lo que a las únicas páginas que puede acceder serán la de login y newUser
  const publicRoutes = ['/login', '/newUser'];

  //Si necesita el token para las paginas privadas necesitaremos el token, por lo que si no tiene el token nos retornara falso, y si lo tenemos, sera true y podremos entrar.
  if (publicRoutes.includes(parsedUrl.pathname)) {
    return false;
  } else {
    return true;
  }
};

axios.interceptors.request.use(
  // Es parecido a un try/catch que utilizamos
  function (config) {
    if (token) {
      //El Bearer nos confirmará que el cliente tiene un token y esta autorizado para entrar en las redes privadas.
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    //Con este log entraremos a la info del token y del usuario.
    console.log('CONFIGURACIÓN', config.headers);
    return config;
  },
  function (error) {
    Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    // Si la respuesta contiene token (login y registro)
    if (response?.data?.token) {
      // Añadimos el token creado en el localstorage
      localStorage.setItem(
        CURRENT_USER_LOCAL_STORAGE,
        //Al no recoger objetos, lo transformamos en JSON.
        JSON.stringify(response.data)
      );
    }
    return response;
  },
  function (error) {
    console.log('error', error);
    // El token ha cadudcado
    if (
      error.response.status === 401 &&
      // Y la url anterior no es el login (sino se piden los todos y no da tiempo a setear el localStorage ya que no es inmediato)
      (error.config.url.indexOf('/login') !== -1 ||
        error.config.url.indexOf('/newUser') !== -1)
    ) {
      // Eliminamos los datos del localStorage
      localStorage.removeItem(CURRENT_USER_LOCAL_STORAGE);
      // Y redirigimos al login
      window.location.href = '/login';
    }

    return Promise.reject(error);
  }
);

//Se importa y exporta las mismas funciones para que recorran todo el código del axios para que implementen el token y que tipo de rutas se puede seguir.
export {
  signUpAvatar,
  updateUser,
  createExercise,
  modifyExercise,
  login,
  createExercise,
};
