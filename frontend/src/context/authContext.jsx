// Importamos las dependencias y los hooks.
import React, { useContext, createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useError } from './ErrorContext';

// Importamos los servicios del usuario.
import {
    loginService,
    registerService,
    getPrivateUserProfileService,
    signUpAvatarService,
    updateUserService,
    validationService,
    sendRecoverPassService,
} from '../services/authService';

// Importamos la función que maneja los errores.
import { handleErrorMessage } from '../utils/handleErrorMessage';

// Importamos la constante con el nombre del token.
import { TOKEN_LOCAL_STORAGE_KEY } from '../utils/constants';

//________________________________________
//TODO LO QUE METAMOS AQUI SERAN LAS FUNCIONES QUE LLAMAREMOS DESPUES EN LOS JSX , Como sera en Login.jsx como ejemplo
//________________________________________

// Creamos el contexto.
const AuthContext = createContext();

// Creamos y exportamos el componente Provider.
export function AuthProvider({ children }) {
    const navigate = useNavigate();
    const { setErrorMessage } = useError();

    const [authToken, setAuthToken] = useState(
        localStorage.getItem(TOKEN_LOCAL_STORAGE_KEY)
    );
    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(false);

    // Si existe un token en el localStorage tratamos de obtener los datos del usuario.
    useEffect(() => {
        const fetchUser = async () => {
            try {
                setLoading(true);

                const body = await getPrivateUserProfileService();

                setAuthUser(body.data.user);
            } catch (err) {
                handleErrorMessage(err, setErrorMessage);
            } finally {
                setLoading(false);
            }
        };

        if (authToken) fetchUser();
    }, [authToken]);

    // Función que registra a un usuario en la base de datos.
    const authRegister = async (data) => {
        try {
            setLoading(true);

            // Llamamos al servicio.
            await registerService(
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

            // Si todo ha ido bien redirijo a login.
            navigate('/login');
        } catch (err) {
            handleErrorMessage(err, setErrorMessage);
        } finally {
            setLoading(false);
        }
    };

    // Función que logea a un usuario almacenando el token en el Stage. No es necesario almacenar el token en el
    // localStorage ya que hemos configurado un interceptor que lo hace por nosotros.
    const authLogin = async (email, pass) => {
        try {
            setLoading(true);

            //Llamamos al servicio.
            const body = await loginService(email, pass);

            // Guardamos el token en el State.
            setAuthToken(body.data.token);

            // Redirigimos a la página principal.
            navigate('/');
        } catch (err) {
            handleErrorMessage(err, setErrorMessage);
        } finally {
            setLoading(false);
        }
    };

    // Función que elimina el token del State y del localStorage. También elimina el usuario.
    const authLogout = () => {
        localStorage.removeItem(TOKEN_LOCAL_STORAGE_KEY);
        setAuthToken(null);
        setAuthUser(null);
    };

    // Función que actualiza el avatar del usuario en la base de datos y en el State.
    const authUpdateAvatar = async (avatar) => {
        try {
            setLoading(true);

            // Creamos un objeto de formData vacío
            const formData = new FormData();

            // Añadimos uno a uno los campos que necesitamos en backend
            formData.append('avatar', avatar);

            // Agregamos el header para enviar form-data.
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            };

            // Llamamos al servicio del registro de avatar.
            const body = await signUpAvatarService(formData, config);

            // Actualizamos el avatar del usuario. Para esto sería bueno que el endpoint de editar avatar retornara
            // el nombre que le asigna el backend a este avatar.
            setAuthUser({
                ...authUser,
                avatar: body.data.avatar.name,
            });
        } catch (err) {
            handleErrorMessage(err, setErrorMessage);
        } finally {
            setLoading(false);
        }
    };

    // Función que actualiza varios datos del usuario en labase de datos y en el State.
    const authUpdateUser = async (data) => {
        try {
            setLoading(true);

            // Creamos un objeto de formData vacío
            const formData = new FormData();

            // Añadimos uno a uno los campos que necesitamos en backend
            formData.append('name', data.name);
            formData.append('surname', data.surname);
            formData.append('gender', data.gender);
            formData.append('email', data.email);
            formData.append('interest', data.interest);

            // Agregamos el header para enviar form-data.
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            };

            const body = await updateUserService(formData, config);

            // Creamos un objeto con los nuevos datos del usuario.
            const newUserData = {
                ...authUser,
                ...body.data.user,
            };

            // Actualizamos los datos del usuario en el State.
            setAuthUser(newUserData);
        } catch (err) {
            handleErrorMessage(err, setErrorMessage);
        } finally {
            setLoading(false);
        }
    };

    // Función que valida a un usuario en la base de datos.
    const authValidateUser = async (registrationCode) => {
        try {
            setLoading(true);

            await validationService(registrationCode);

            // Tras validar redireccionamos a login.
            navigate('/login');
        } catch (err) {
            handleErrorMessage(err, setErrorMessage);
        } finally {
            setLoading(false);
        }
    };

    // Función que manda al usuario un código de recuperación para modificar la contraseña.
    const authSendEmailUser = async (recoverPassCode) => {
        try {
            setLoading(true);

            await sendRecoverPassService(recoverPassCode);

            // Tras validar el email navegamos
            navigate('/forgotPassword');
        } catch (err) {
            handleErrorMessage(err, setErrorMessage);
        } finally {
            setLoading(false);
        }
    };

    // Todo lo que pongamos en la prop value van a ser los datos accesibles
    return (
        <AuthContext.Provider
            value={{
                authToken,
                authUser,
                authRegister,
                authLogin,
                authLogout,
                authUpdateAvatar,
                authUpdateUser,
                authValidateUser,
                authSendEmailUser,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
