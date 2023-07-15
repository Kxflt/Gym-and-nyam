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
  const { registerUser, checkUserExists } = useAuth();

  const onSubmit = async (data) => {
    if (data.password !== data['repeat-password']) {
      // IMPORTANTE: Hacemos return porque sino se ejecutaría el siguiente código
      return setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    try {
      // Verificar si el usuario ya existe
      const userExists = await checkUserExists(data.email);
      if (userExists) {
        setErrorPopUp(true); // Mostrar error de usuario existente
        return; // Detener la ejecución si el usuario ya existe
      }

      // Llamamos el servicio del signup con los parámetros esperados
      await registerUser(data);
      // Navegamos al dashboard
      navigate('/login');
    } catch (error) {
      setErrorPopUp(true);
      console.error('Error al registrar el usuario:', error);
    }
  };

  return {
    state: { register, errors, passwordError, errorPopUp },
    actions: { handleSubmit, onSubmit, setErrorPopUp },
  };
}

export default useNewUser;
