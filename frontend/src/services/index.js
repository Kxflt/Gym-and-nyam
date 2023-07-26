import React from 'react';
import axios from 'axios';
import { CURRENT_USER_LOCAL_STORAGE } from '../utils/constants';
import {
  login,
  newUser,
  signUpAvatar,
  updateUser,
  profile,
} from './authService';
import {
  createExercise,
  modifyExercise,
  listExercises,
} from './exerciseService';

// Cogemos el token del localStorage
const currentUser = JSON.parse(
  localStorage.getItem(CURRENT_USER_LOCAL_STORAGE)
);

const token = currentUser?.token;

console.log(token);

axios.interceptors.request.use(
  function (config) {
    // Si tenemos token y el endpoint requiere autentificación
    if (token) {
      // Añadimos el header Bearer token a la config
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    console.log('CONFIG', config.headers);
    // IMPORTANTE: Siempre retornar la config, response o errores
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
      // Añadimos al localStorage el token
      localStorage.setItem(
        CURRENT_USER_LOCAL_STORAGE,
        JSON.stringify(response.data)
      );
    }
    return response;
  },

  function (error) {
    console.log('error', error);
    // Si nos devuelve que está no autorizado porque el token ha caducado
    if (
      error.response.status === 401 &&
      // Y la url anterior no es el login (sino se piden los todos y no da tiempo a setear el localStorage ya que no es inmediato)
      (error.config.url.indexOf('/login') !== -1 ||
        error.config.url.indexOf('/account') !== -1)
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
  newUser,
  createExercise,
  modifyExercise,
  login,
  createExercise,
  profile,
  listExercises,
};
