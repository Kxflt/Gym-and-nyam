import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { EMAIL_REGEX } from '../../utils/constants';
import InputPassword from '../../Components/Shared/Input/inputPassword';
import InputText from '../../Components/Shared/Input/InputText';
import Button from '../../Components/Shared/Button/Button';
import Footer from '../../Components/Shared/Footer/Footer';
import ImgLogo from '../../assets/logo2.png';
import ErrorPopUp from '../../Components/Shared/errorPopUp/ErrorPopUp';
import './login.css';

// IMPORTANTE_______________________________
/* Aitor: Hay que hacer el css del pop up, en el momento que haga la prueba de como funciona la pag lo modificaré. */
//_________________________________________
function Login() {
  const [errorText, setErrorText] = useState();

  //El useState es falso ya que en el momento que la recorra y lo necesitemos se convertira en true y accederemos a ella.
  const [errorPopUp, setErrorPopUp] = useState(false);
  //Lo utilizamos para que en caso de entrar, que nos redireccione al dashboard
  const navigate = useNavigate();

  //Son valores que nos proporciona el useForm,
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Utilizamos el signIn del Context
  const { signIn } = useAuth(); /* undefined. //BUSCAR SOLUCION A ESTO// */

  //La función ciamdp enviamos los datos
  const onSubmit = async ({ email, password }) => {
    try {
      //Funcion del Context para iniciar sesión.
      await signIn(email, password);

      //Utilizamos esto por si hemos intentado entrar y no hemos podido, que borre el errorText y poder entrar
      setErrorText(null);

      navigate('/');
    } catch (error) {
      if (error.response?.status === 403 || error.response?.status === 402) {
        setErrorText('Email o contraseña no válida');
      }
      setErrorPopUp(true);
    }
  };
  //Aitor: Falta en el return meter ciertas funciones.
  return (
    <>
      {/* Hay que preguntar como hacer una funcion que nos traiga la img  */}
      <img src={ImgLogo} alt='logo' />

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* por aqui */}
        <InputText
          label='Email'
          register={register('email', {
            required: true,
            pattern: EMAIL_REGEX,
          })}
          errors={errors}
          registerName='email'
        />

        <InputPassword
          label='Contraseña'
          register={register('password', {
            required: true,
            minLength: 8,
            maxLength: 100,
          })}
          errors={errors}
          registerName='password'
        />

        <span className='error'>{errorText}</span>

        {/* En el momento que tengamos estos dos archivos, modificar de la 77 a 80 */}
        <div className='help'>
          <p>Forget Password</p>
          <p>Sign Up</p>
        </div>
        <Button text='Login' />
      </form>

      {/* En la funcion importada, en el open, metemos la variable del useState.
      Al cerrarlo, el setErrorPopUp vuelve a false para desaparecer. */}
      <ErrorPopUp open={errorPopUp} onClose={() => setErrorPopUp(false)} />
      <Footer />
    </>
  );
}

export default Login;
