import { useContext, createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CURRENT_USER_LOCAL_STORAGE } from '../utils/constants';
import { login } from '../services/authService';
//import {login , signUp , signUpAvatar, updateAccount}

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
      const response = await signUp();
    } catch (error) {}
  };
}

export default AuthContext;
