import axios from 'axios';

export const login = (email, password) => {
  return axios.post('http://localhost:8000/login', {
    email,
    password,
  });
};

/* export const confirmValidateCode = (registrationCode) => {
  return (
    axios.get('http://localhost:8000/users/validate/:regCode'),
    {
      registrationCode,
    }
  );
}; */

export const validation = (registrationCode) => {
  return (
    axios.put('http://localhost:8000/users/validate/:regCode'),
    {
      registrationCode,
    }
  );
};

export const newUser = (name, email, password) => {
  return axios.post('http://localhost:8000/users', {
    name,
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

export const updateUser = (formData, config) => {
  return (
    axios.put('http://localhost:8000/users'),
    {
      formData,
      config,
    }
  );
};

export const sendRecoverPass = () => {
  return axios.put('http://localhost:8000/users/password/recover'), {};
};

export const editPassword = (password) => {
  return (
    axios.put('http://localhost:8000/users/password'),
    {
      password,
    }
  );
};

export const profile = (name, email, password) => {
  return (
    axios.put('http://localhost:8000/users/:userId'),
    {
      name,
      email,
      password,
    }
  );
};
