import React, { useState } from 'react';
import InputText from '../../Components/Shared/Input/InputText';
import Button from '../../Components/Shared/Button/Button';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/authContext';
import { validation } from '../../services/authService';
import Footer from '../../Components/Shared/Footer/Footer';
import './validate.css';

const ValidateUser = () => {
  const [code, setCode] = useState('');
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { validateUserCode } = useAuth();

  const handleActivateAccount = async (data) => {
    const { code } = data;
    setCode(code);
    try {
      validation(code); // Llama a la función de validación pasando el código
      validateUserCode(code);
    } catch (error) {
      console.error('Error de validación');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleActivateAccount)}>
        <InputText
          label='Pega tu código de validación'
          register={register('code', {
            required: true,
          })}
          errors={errors}
          registerName='code'
        />
        <Button type='submit' text='Activar' />
      </form>
      <Footer />
    </>
  );
};

export default ValidateUser;
