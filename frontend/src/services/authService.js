import axios from 'axios';

export const login = (email, password) => {
  return axios.post('http://localhost:8000/users/login', {
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

export const validation = async (registrationCode) => {
  try {
    return await axios.put(
      `http://localhost:8000/users/validate/${registrationCode}`
    );
  } catch (error) {
    console.log(error.response.data);
  }
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
    axios.put('http://localhost:8000/users/:userId'),
    {
      formData,
      config,
    }
  );
};

/* export const sendRecoverPass = (recoverPassCode) => {
  return (
    axios.put('http://localhost:8000/users/password/recover'),
    {
      recoverPassCode,
    }
  ); 
}; */
export const sendRecoverPass = (email, recoverPassCode) => {
  return axios.put('http://localhost:8000/users/password/recover', {
    email,
    recoverPassCode,
  });
};

export const editPassword = (recoverPassCode, newPass) => {
  return (
    axios.put('http://localhost:8000/users/password'),
    {
      recoverPassCode,
      newPass,
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
