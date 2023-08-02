import { axiosInstance } from './axiosInstance';

// Registro de usuario.
export const registerService = async ({
    name,
    surname,
    email,
    password,
    gender,
    interest,
}) => {
    await axiosInstance.post('/users', {
        name,
        surname,
        email,
        password,
        gender,
        interest,
    });
};

// Login de usuario.
export const loginService = async (email, password) => {
    const res = await axiosInstance.post('/users/login', {
        email,
        password,
    });

    return res.data;
};

/* export const confirmValidateCode = (registrationCode) => {
  return (
    axiosInstance.get('/users/validate/:regCode'),
    {
      registrationCode,
    }
  );
}; */

// Validación de usuario.
export const validationService = async (registrationCode) => {
    await axiosInstance.put(`/users/validate/${registrationCode}`);
};

// Obtener perfil privado del usuario.
export const getPrivateUserProfileService = async () => {
    const res = await axiosInstance.get('/users');

    return res.data;
};

// Actualización de avatar de usuario.
export const signUpAvatarService = async (formData, config) => {
    const res = await axiosInstance.post('/users', {
        formData,
        config,
    });

    return res.data;
};

/* export const sendRecoverPass = (recoverPassCode) => {
  return (
    axiosInstance.put('/users/password/recover'),
    {
      recoverPassCode,
    }
    ); 
  }; */

// Enviar correo de recuperación de contraseña a un usuario.
export const sendRecoverPassService = async (email, recoverPassCode) => {
    await axiosInstance.put('/users/password/recover', {
        email,
        recoverPassCode,
    });
};

// Recuperar contraseña utilizando el código de recuperación.
export const editPassword = async (recoverPassCode, newPass) => {
    await axiosInstance.put('/users/password/recover/change', {
        recoverPassCode,
        newPass,
    });
};

// Actualización general del usuario.
export const updateUserService = async (formData, config) => {
    const res = await axiosInstance.put('/users', formData, config);

    return res.data;
};
