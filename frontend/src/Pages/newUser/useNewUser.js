import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

function useNewUser() {
  const [passwordError, setPasswordError] = useState(false);
  const [errorPopUp, setErrorPopUp] = useState(false);
  const [formErrors, setFormErrors] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { checkUserExists, registerUser } = useAuth();
  const onSubmit = async (data) => {
    if (data.password !== data['repeat-password']) {
      setPasswordError(true);
      return { passwordError: true };
    } else {
      setPasswordError(false);
    }

    try {
      const userExists = await checkUserExists(data.email);
      if (userExists) {
        setErrorPopUp(true);
        setFormErrors({ userExists: 'Ya existe un usuario con ese email' });
        return { userExists: true };
      }

      await registerUser(data);
      return null;
    } catch (error) {
      setErrorPopUp(true);
      console.error('Error al registrar el usuario:', error);
      if (error.response && error.response.status === 403) {
        // If the error status is 403, handle the email in use error
        setFormErrors({ userExists: true });
        return { userExists: true };
      } else {
        setFormErrors({ serverError: true }); // Set formErrors for server error
        return { serverError: true };
      }
    }
  };
  return {
    state: { register, errors, passwordError, errorPopUp, formErrors },
    actions: { handleSubmit, onSubmit, setErrorPopUp, setFormErrors },
  };
}

export default useNewUser;
