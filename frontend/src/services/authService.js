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

export const signUpAvatar = (formData, config) => {
  return (
    axios.post('http://localhost:8000/newUser'),
    {
      formData,
      config,
    }
  );
};

export const updateUser = (formData, config) => {
  return (
    axios.put('http://localhost:8000/newUser'),
    {
      formData,
      config,
    }
  );
};
