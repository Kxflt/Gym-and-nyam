import { axiosInstance } from './axiosInstance';

// Crear ejercicio (administrador)
export const createExerciseService = async (formData, config) => {
    const response = await axiosInstance.post('/exercises', formData, config);

    return response.data;
};

export const likeExerciseService = async (id, likedByMe) => {
    // Definimos si vamos a eliminar o a crear el like.
    const method = likedByMe ? 'delete' : 'post';

    const response = await axiosInstance[method](`/exercises/${id}/likes`);

    return response.data;
};

export const favExerciseService = async (id, favByMe) => {
    // Definimos si vamos a eliminar o a crear el favorito.
    const method = favByMe ? 'delete' : 'post';

    const response = await axiosInstance[method](`/exercises/${id}/favourites`);

    return response.data;
};

export const modifyExerciseService = async (id, formData, config) => {
    const response = await axiosInstance.put(
        `/exercises/${id}`,
        formData,
        config
    );

    return response.data;
};

export const listExercisesService = async (searchParams) => {
    const res = await axiosInstance.get(
        `/exercises?${searchParams.toString()}`
    );

    return res.data;
};

export const deleteExerciseService = async (id) => {
    const response = await axiosInstance.delete(`/exercises/${id}`);

    return response.data;
};

export const listFavExercisesService = async (searchParams) => {
    const res = await axiosInstance.get(
        `/favourites?${searchParams.toString()}`
    );

    return res.data;
};
