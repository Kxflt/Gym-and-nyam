export const handleErrorMessage = (err, setErrorMessage) => {
    if (err.response?.data?.message) {
        setErrorMessage(err.response.data.message);
    } else {
        setErrorMessage(
            'Ha ocurrido un error inesperado. Por favor, inténtelo de nuevo más tarde.'
        );
    }
};
