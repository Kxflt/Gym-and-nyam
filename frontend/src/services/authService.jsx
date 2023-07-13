import axios from 'axios';

export const login = async (email, password) => {
  return axios.post('http://localhost:8000/login', {
    email,
    password,
  });
};

export const newUser = async (name, email, password) => {
  return axios.post('http://localhost:8000/newUser', {
    name,
    email,
    password,
  });
};

export const signUpAvatar = async (formData, config) => {
  return (
    axios.post('http://localhost:8000/newUser'),
    {
      formData,
      config,
    }
  );
};

export const updateUser = async (formData, config) => {
  return (
    axios.put('http://localhost:8000/newUser'),
    {
      formData,
      config,
    }
  );
};
