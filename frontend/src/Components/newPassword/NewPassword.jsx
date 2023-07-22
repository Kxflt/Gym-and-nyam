import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../Shared/Button/Button';
import InputText from '../Shared/Input/InputText';
import InputPassword from '../Shared/Input/inputPassword';
import { PASSWORD_REGEX } from '../../utils/constants';

function NewPassword() {
  const [errorText, setErrorText] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({
    recoverPassCode,
    newPassword,
    confirmPassword,
  }) => {
    setErrorText(null);

    // You can add your logic here to handle the form submission and password change.
    // For example, you can compare newPassword and confirmPassword and make the necessary API call to update the password.

    // Example logic to handle password change:
    if (newPassword !== confirmPassword) {
      setErrorText("Passwords don't match.");
    } else {
      // Make the API call to change the password here.
      console.log('Password change API call');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          label="Recovery Code"
          register={register('recoverPassCode', {
            required: true,
          })}
          errors={errors}
        />
        <InputPassword
          label="New Password"
          register={register('newPassword', {
            required: true,
            pattern: PASSWORD_REGEX,
            minLength: 7,
            maxLength: 100,
          })}
          errors={errors}
        />
        <InputPassword
          label="Confirm Password"
          register={register('confirmPassword', {
            required: true,
            pattern: PASSWORD_REGEX,
            minLength: 7,
            maxLength: 100,
          })}
          errors={errors}
        />
        <span className="error">{errorText}</span>
        <Button text="Confirm changes" type="submit" />
      </form>
    </>
  );
}

export default NewPassword;
