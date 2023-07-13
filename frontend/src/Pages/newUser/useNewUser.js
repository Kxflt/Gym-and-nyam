import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

function useNewUser() {
  const [passwordError, setPasswordError] = useState(false);
  const [errorPopUp, setErrorPopUp] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { registerUser } = useAuth();

  const onSubmit = async (data) => {
    if (data.password !== data['repeat-password']) {
      // IMPORTANTE: Hacemos return porque sino se ejecutaría el siguiente código
      return setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    try {
      // Llamamos el servicio del signup con los parámetros esperados
      await registerUser(data);
      // Navegamos al dashboard
      navigate('/');
    } catch (error) {
      // Mostraremos pop up genérico de error
      setErrorPopUp(true);
    }
  };

  return {
    state: { register, errors, passwordError, errorPopUp },
    actions: { handleSubmit, onSubmit, setErrorPopUp },
  };
}

export default useNewUser;
