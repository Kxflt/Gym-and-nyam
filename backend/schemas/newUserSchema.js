const joi = require('joi');

const newUserSchema = joi.object().keys({
  email: joi
    .string()
    .email()
    .required()
    .error((errors) => {
      if (errors[0].code === 'any.required') {
        return new Error('Se requiere un email.');
      } else {
        return new Error('El email no es válido.');
      }
    }),
  name: joi
    .string()
    .min(3)
    .max(20)
    .required()
    .error((errors) => {
      if (errors[0].code === 'any.required') {
        return new Error('Se require un nombre.');
      } else {
        return new Error(
          'El nombre requiere de mínimo 3 letras y máximo 20 letras.'
        );
      }
    }),

  surname: joi
    .string()
    .min(3)
    .max(100)
    .required()
    .error((errors) => {
      if (errors[0].code === 'any.required') {
        return new Error('Se require un apellido.');
      } else {
        return new Error(
          'El apellido requiere de mínimo 3 letras y máximo 100 letras.'
        );
      }
    }),

  gender: joi
    .string()
    .required()
    .error((errors) => {
      if (errors[0].code === 'any.required') {
        return new Error('Se require un género.');
      } else {
        return new Error('Debes elegir entre las 3 opciones.');
      }
    }),

  interest: joi
    .string()
    .required()
    .error((errors) => {
      if (errors[0].code === 'any.required') {
        return new Error('Se require un interes.');
      } else {
        return new Error('Ya que te has apuntado, elige, majete.');
      }
    }),
  password: joi
    .string()
    .min(8)
    .max(100)
    .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()\-=_+{};':"|,.<>/?`~]).*$/)
    .error((errors) => {
      switch (errors[0].code) {
        case 'any.required':
          return new Error('Se requiere una contraseña');

        case 'string.pattern.base':
          return new Error(
            'La contraseña debe tener al menos una letra mayúscula, una letra minúscula y un signo de puntuación'
          );

        default:
          return new Error('La contraseña debe tener entre 8 y 100 caracteres');
      }
    }),
});

module.exports = newUserSchema;
