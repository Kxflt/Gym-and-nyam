import React, { useContext, createContext, useState, useEffect } from 'react';
import ValidateUser from '../Pages/validate/ValidateUser';

import {
  login,
  newUser,
  signUpAvatar,
  updateUserService,
} from '../services/authService';

import { modifyExercise } from '../services/exerciseService';

//________________________________________
//TODO LO QUE METAMOS AQUI SERAN LAS FUNCIONES QUE LLAMAREMOS DESPUES EN LOS JSX , Como sera en Login.jsx como ejemplo
//________________________________________

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Variable para guardará los datos del usuario.
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  );

  // Loguearse.
  const signIn = async (email, password) => {
    try {
      //Llamamos al servicio.
      const body = await login(email, password);

      // Guardamos el usuario en el localStorage.
      localStorage.setItem('user', JSON.stringify(body.data.data));

      // Guardamos el usuario en el State.
      setUser(body.data.data);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  //Registrarse
  const registerUser = async (data) => {
    try {
      // Llamamos al servicio.
      const body = await newUser(
        {
          name: data.name,
          surname: data.surname,
          email: data.email,
          gender: data.gender,
          interest: data.interest,
          password: data.password,
        }
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
    // Eliminamos el user del localStorage.
    localStorage.removeItem('user');

    // Eliminamos el usuario
    setUser(null);
  };

  // Actualizar usuario.
  const updateUser = async (formData, config) => {
    try {
      const body = await updateUserService(formData, config);

      // Creamos un objeto con los nuevos datos del usuario.
      const newUserData = {
        ...user,
        ...body.data.data.user,
      };

      // Actualizamos los datos del usuario en el State.
      setUser(newUserData);

      // Actualizamos los datos del usuario en el localStorage.
      localStorage.setItem('user', JSON.stringify(newUserData));
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const validateUserCode = async (registrationCode) => {
    try {
      const response = await ValidateUser(registrationCode);
      setUser(response.data.user);
    } catch (error) {
      console.error('Error al validar el código de registro:', error);
    }
  };

  const updateExercise = async (formData, config) => {
    try {
      const updatedExercise = await modifyExercise(formData, config); // Replace with your exercise update function (e.g., modifyExercise)

      // Do any necessary data manipulation or validation with the updated exercise if needed

      // Update the exercise data in the local state
      setExercise(updatedExercise);

      // Optionally, update the exercise data in the local storage
      localStorage.setItem('exercise', JSON.stringify(updatedExercise));

      // Return the updated exercise data if needed
      return updatedExercise;
    } catch (error) {
      return Promise.reject(error);
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
        registerUserAvatar,
        updateUser,
        validateUserCode,
        updateExercise,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
