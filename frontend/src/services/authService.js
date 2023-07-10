import axios from 'axios';

export const login = (email, password) => {
  return axios.post('http://localhost:8000/login', {
    email,
    password,
  });
};

export const newUser = (name, email, password) => {
  return axios.post('http://localhost:8000/newUser', {
    name,
    email,
    password,
  });
};

//Faltaria la subida de foto cuando modifique perfil y modificar perfil
