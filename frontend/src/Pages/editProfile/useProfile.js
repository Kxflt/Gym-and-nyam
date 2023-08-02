import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';
import NavBar from '../../Components/nav-bar/NavBar';

function editProfile() {
    const { updateProfile, user, registerUserAvatar } = useAuth();
    const [errorPopUp, setErrorPopUp] = useState(false);

    // Variable de estado para previsualizar la foto seleccionada
    const [avatarImg, setAvatarImg] = useState(user?.avatar_url);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        setValue('name', user?.name);
        setValue('surname', user?.surname);
        setValue('gender', user?.gender);
        setValue('email', user?.email);
        setValue('interest', user?.interest);
    }, []);

    const onSubmit = async (data) => {
        // Creamos un objeto de formData vacío
        const formData = new FormData();
        // Añadimos uno a uno los campos que necesitamos en backend
        formData.append('file', data.file[0]);
        formData.append('name', data.name);
        formData.append('surname', data.surname);
        formData.append('gender', data.gender);
        formData.append('email', data.email);
        formData.append('interest', data.email);

        // Agregamos el header para enviar form-data
        const config = {
            header: {
                'Content-Type': 'multipart/form-data',
            },
        };

        try {
            // Llamamos el servicio del signup con los parámetros esperados
            await updateProfile(formData, config);
        } catch (error) {
            // Mostraremos nuestro pop up genérico de error
            setErrorPopUp(true);
        }
    };

    const handleOnChangeAvatar = async (e) => {
        const target = e.target.files[0];
        const url = URL.createObjectURL(target);
        setAvatarImg(url);
        updateUse;
    };

    return {
        state: { register, errors, errorPopUp, avatarImg },
        actions: {
            handleSubmit,
            onSubmit,
            setErrorPopUp,
            handleOnChangeAvatar,
        },
    };
}

export default editProfile;
