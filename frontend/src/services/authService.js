import axios from 'axios';

export const login =  (email, password) => {
  return axios.post('http://localhost:8000/login', {
    email,
    password,
  });
};

export const newUser = (name, surname, gender, interest,email, password) => {
  return axios.post('http://localhost:8000/users', {
    name,
    surname,
    gender,
    interest,
    email,
    password,
    
  });
};

export const signUpAvatar = (formData, config) => {
  return (
    axios.post('http://localhost:8000/users'),
    {
      formData,
      config,
    }
  );
};

export const updateUser =  (formData, config) => {
  return (
    axios.put('http://localhost:8000/users'),
    {
      formData,
      config,
    }
  );
};
