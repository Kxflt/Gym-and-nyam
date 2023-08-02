import axios from 'axios';

import { TOKEN_LOCAL_STORAGE_KEY } from '../utils/constants';

// Creamos una instancia de Axios. Establecemos la URL base del servidor y el tiempo máximo
// de espera en milisegundos.
const axiosInstance = axios.create({
  baseUrl: import.meta.env.VITE_API_URL,
  timeout: 5000,
});

// Cogemos el token del localStorage
const authToken = JSON.parse(localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY));

// Interceptor que añade el token de forma automática a la petición si existe.
axiosInstance.interceptors.request.use(
  function (config) {
    // Si tenemos token y el endpoint requiere autentificación
    if (authToken) {
      // Añadimos el header token a la config
      config.headers['Authorization'] = `${authToken}`;
    }
    console.log('CONFIG', config.headers);
    // IMPORTANTE: Siempre retornar la config, response o errores
    return config;
  },
  function (error) {
    Promise.reject(error);
  }
);

// Interceptor que guarda automáticamente el token en localStorage.
axiosInstance.interceptors.response.use(
  (response) => {
    console.log(response);

    // Si la respuesta contiene token (si el usuario hace login) lo almacenamos en el localStorage.
    if (response?.data?.data?.token) {
      // Añadimos al localStorage el token.
      localStorage.setItem(
        CURRENT_USER_LOCAL_STORAGE,
        JSON.stringify(response.data.data.token)
      );
    }

    return response;
  },

  (error) => {
    console.log('error', error);

    // Si el código de estado del error es 401 (no autorizado) y la dirección de la solicitud contiene "/users/login"
    // eliminamos el token del localStorage.
    if (
      error.response.status === 401 &&
      error.config.url.indexOf('/users/login') !== -1
    ) {
      localStorage.removeItem(CURRENT_USER_LOCAL_STORAGE);
    }

    return Promise.reject(error);
  }
);

export { axiosInstance };
