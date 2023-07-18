import React, { useContext, createContext, useState, useEffect } from 'react';
import ValidateUser from '../Pages/validate/ValidateUser';

import { login, newUser, signUpAvatar } from '../services/authService';

//________________________________________
//TODO LO QUE METAMOS AQUI SERAN LAS FUNCIONES QUE LLAMAREMOS DESPUES EN LOS JSX , Como sera en Login.jsx como ejemplo
//________________________________________

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Variable para guardará los datos del usuario.
  const [user, setUser] = useState(null);

  // Variable donde almacenaremos el token.
  const [token, setToken] = useState(localStorage.getItem('token'));

  // Obtenemos la información del usuario si existe token.
  useEffect(() => {
    const fetchUser = async () => {
      // Obtenemos los datos del usuario.
      // Guardamos el usuario en el State.
    };

    // Si existe token obtenemos el usuario.
    if (token) fetchUser();
  }, [token]);

  // Loguearse.
  const signIn = async (email, password) => {
    try {
      //Llamamos al servicio.
      const body = await login(email, password);

      // Guardamos el token en el localStorage.
      localStorage.setItem('token', body.data.token);

      // Guardamos el token en el State.
      setToken(body.data.token);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  //Registrarse
  const registerUser = async (data) => {
    try {
      // Llamamos al servicio.
      const body = await newUser(
        data.name,
        data.email,
        data.password
        //SI MODIFICAMOS EL BACKEND DEBEREMOS METER AQUI EL RESTO DE COSAS QUE NECESITAMOS PARA QUE SE REGISTREN
      );

      // Guardamos el usuario en el State.
      setUser(body.data.user);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const registerUserAvatar = async (formData, config) => {
    try {
      // Llamamos al servicio del registro.
      const body = await signUpAvatar(formData, config);

      // Actualizamos el avatar del usuario. Para esto sería bueno que el endpoint de editar avatar retornara
      // el nombre que le asigna el backend a este avatar.
      setUser({
        ...user,
        avatar: 'elNuevoNombreDeAvatar.jpg',
      });
    } catch (error) {
      return Promise.reject(error);
    }
  };

  // Deslogueo.
  const logOut = () => {
    // Eliminamos el token del localStorage.
    localStorage.removeItem('token');

    // Eliminamos el usuario y el token del State.
    setUser(null);
    setToken(null);
  };

  // Actualizar usuario.
  const updateUser = async (formData, config) => {
    try {
      const body = await updateUser(formData, config);

      // Actualizamos los datos del usuario.
      setUser(body.data.user);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const checkUserExists = async (email) => {
    try {
      // Realiza una llamada a tu API para verificar si el usuario ya existe
      const response = await fetch(
        `https://localhost:8000/users?email=${email}`
      );
      const data = await response.json();

      // Devuelve true si el usuario existe, false si no existe
      return data.length > 0;
    } catch (error) {
      console.error('Error al verificar la existencia del usuario:', error);
      throw new Error('Error al verificar la existencia del usuario');
    }
  };

  const validateUserCode = async (registrationCode) => {
    try {
      const response = await validateUser(registrationCode);
      setUser(response.data.user);
    } catch (error) {
      console.error('Error al validar el código de registro:', error);
    }
  };

  // Todo lo que pongamos en la prop value van a ser los datos accesibles
  return (
    <AuthContext.Provider
      value={{
        signIn,
        registerUser,
        logOut,
        user,
        isAuthenticated: token,
        registerUserAvatar,
        updateUser,
        checkUserExists,
        validateUserCode,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
