import React from 'react';
import { EMAIL_REGEX, MAX_LENGTH_STRING, MIN_LENGTH_STRING } from '../../utils/constants';
import Button from "../../components/shared/button/Button";
import InputText from "../../Components/Shared/Input/InputText";
 import useProfile from "./useProfile"; 
/* import avatar from "../../assets/avatar.png"; */
import ErrorPopUp from "../../Components/Shared/errorPopUp/ErrorPopUp";

import "./profile.css";

function Profile() {
    const {
        state: { register, errors, errorPopUp /*, avatarImg */ },
        actions: { handleSubmit, onSubmit, setErrorPopUp, handleOnChangeAvatar },
    } = useProfile();

    return (
      <>
        
        <h1>Ejemplo visual</h1>
            <div class="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='avatar-container'>
                      {/*  <div className="avatar-container">
            <img src={avatarImg ? avatarImg : avatar} alt="avatar" />
            <input
              type="file"
              {...register("file", {
                required: true,
              })}
              onChange={handleOnChangeAvatar}
            />
          </div>
          {errors.file?.type === "required" && (
            <span className="error">Campo requerido</span>
          )}
*/}
            <InputText 
            label="Nombre"
            register={register('name', {
              required: true,
              maxLength: MAX_LENGTH_STRING,
              minLength: MIN_LENGTH_STRING,
            })}
            errors={errors}
            registerName="name"
            
          />

          {/* Hay que meter apellido en Backend */}
          {/*  <InputText 
            label="Apellido"
            register={register('surname', {
              required: true,
              maxLength: MAX_LENGTH_STRING,
              minLength: MIN_LENGTH_STRING,
            })}
            errors={errors}
            registerName='surname'
          />  */}

          <InputText 
            label="Email"
            register={register('email', {
              required: true,
              pattern: EMAIL_REGEX,
            })}
            errors={errors}
            registerName='email' 
            /* errorMessage={errors.email && errors.email.message} */
          />
          {/* Hay que crear genero en backend */}
          {/* <label>Género</label>
          <select {...register('gender', { required: true })}>
            <option value=''>--</option>
            <option value='Female'>Mujer</option>
            <option value='Male'>Hombre</option>
            <option value='Other'>Otro</option>
          </select>
          {errors.gender?.type === 'required' && (
            <span className='error'>Campo requerido</span>
          )}   */}

           {/* Meter interes de ejercicios: cardio, etc y en base a eso mostrarle unos videos u otros al usario */}
          {/*  <label>Interés</label>
          <select {...register('interest', { required: true })}>
            <option value=''>--</option>
            <option value='Cardio'>Cardio</option>
            <option value='Musculacion'>Musculación</option>
            <option value='Desconocido'>Desconocido</option>
             {errors.interest?.type === 'required' && (
            <span className='error'>Campo requerido</span>
          )}
            
          </select>   */}
         <div className="terms-container">
            <input
              type="checkbox"
              {...register("terms", {
                required: true,
              })}
            />
            <label>Acepta términos y condiciones</label>
          </div>
          {errors.terms?.type === "required" && (
            <span className="error">Campo requerido</span>
          )}

          <Button text="Continuar" />

    

          </div> 
                </form>
            
            </div>
            <ErrorPopUp open={errorPopUp} onClose={() => setErrorPopUp(false)} />

        
        </>

    )

}

export default Profile; 