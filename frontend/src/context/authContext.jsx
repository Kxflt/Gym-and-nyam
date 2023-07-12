import React from 'react';
import { useContext, createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CURRENT_USER_LOCAL_STORAGE } from '../utils/constants';

//________________________________________
//TODO LO QUE METAMOS AQUI SERAN LAS FUNCIONES QUE LLAMAREMOS DESPUES EN LOS JSX , Como sera en Login.jsx como ejemplo
//________________________________________

const AuthContext = createContext();

//Miramos en el localstorage si se encuentra el currentUser, (usuario con token)
const currentUser = JSON.parse(
  //verificamos si el currentUser esta en el localstorage
  localStorage.getItem(CURRENT_USER_LOCAL_STORAGE)
);

export function AuthProvider({ children }) {
  //Variable para guardar los datos del usuario, con esto podremos poner en el header Hola ${name} si lo necesitamos.
  const [user, setUser] = useState(currentUser?.user);

  //Variable con la que guardamos si esta o no esta logueado, el !! hace que al recorrerlo ve si esta o no, un if/else muy comprimido
  const [isAuthenticated, setIsAuthenticated] = useState(!!currentUser);

  const navigate = useNavigate();

  //Loguearse
  const signIn = async (email, password) => {
    try {
      //Llamamos al servicio
      const response = await login(email, password);
      // Guardamos que se ha autentificado
      setIsAuthenticated(true);
      //Guardamos los datos del usuario.
      setUser(response.data.user);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  //Registrarse
  const registerUser = async (data) => {
    try {
      //LLamamos al servicio
      const response = await signUp(
        data.name,
        data.email,
        data.password
        //SI MODIFICAMOS EL BACKEND DEBEREMOS METER AQUI EL RESTO DE COSAS QUE NECESITAMOS PARA QUE SE REGISTREN
      );

      //Guardamos que es autentificado
      setIsAuthenticated(true);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const registerUserAvatar = async (formData, config) => {
    try {
      // Llamamos al servicio del registro
      const response = await signUpAvatar(formData, config);
      // Guardamos que se ha autentificado
      setIsAuthenticated(true);
      // Guardamos los datos de usuario
      setUser(response.data.user);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  // Deslogueo
  const logOut = () => {
    // Eliminamos el currentUser del localStorage
    localStorage.clear(CURRENT_USER_LOCAL_STORAGE);
    // Modifiamos el isAuthenticated a false
    setIsAuthenticated(false);
    // Eliminamos los datos de usuario guardados
    setUser(undefined);
    // Navegamos al login
    navigate('login');
  };

  const updateUser = async (formData, config) => {
    try {
      const response = await updateAccount(formData, config);
      setUser(response.data.user);
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
        isAuthenticated,
        registerUserAvatar,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
