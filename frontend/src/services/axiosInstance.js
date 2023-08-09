import axios from 'axios';

import { TOKEN_LOCAL_STORAGE_KEY } from '../utils/constants';

/* Creamos una instancia de Axios. Establecemos la URL base del servidor y el tiempo máximo de espera en milisegundos. */
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 5000,
});

// Interceptor que añade el token de forma automática a la petición si existe.
axiosInstance.interceptors.request.use(
    (config) => {
        // Cogemos el token del localStorage
        const authToken = JSON.parse(
            localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY)
        );

        // Si tenemos token y el endpoint requiere autentificación
        if (authToken) {
            // Añadimos el header token a la config
            config.headers['Authorization'] = `${authToken}`;
        }

        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

// Interceptor que guarda automáticamente el token en localStorage.
axiosInstance.interceptors.response.use(
    (response) => {
        // Si la respuesta contiene token lo almacenamos en el localStorage.
        if (response?.data?.data?.token) {
            // Añadimos el token.
            localStorage.setItem(
                TOKEN_LOCAL_STORAGE_KEY,
                JSON.stringify(response.data.data.token)
            );
        }

        return response;
    },

    (err) => {
        console.log('error', err);

        if (
            err.response.status === 401 &&
            err.config.url.indexOf('/users/login') !== -1
        ) {
            localStorage.removeItem(TOKEN_LOCAL_STORAGE_KEY);
        }

        return Promise.reject(err);
    }
);

export { axiosInstance };
