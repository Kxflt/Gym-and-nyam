const insertUserQuery = require('../../db/queries/users/insertUserQuery');
const newUserSchema = require('../../schemas/newUserSchema');
const { v4: uuid } = require('uuid');

const { generateError, validateSchema, sendMail } = require('../../helpers');
//newUser controller
const newUser = async (req, res, next) => {
  try {
    //Obtener name, email & password del body
    const { name, surname, gender, interest, email, password } = req.body;

    //Validamos los datos del body con joi.
    await validateSchema(newUserSchema, req.body);

    if (!name || !surname || !gender || !interest || !email || !password) {
      generateError('Faltan campos', 400);
    }

    //Generamos el código de registro.
    const registrationCode = uuid();

    //Insertamos al usuario en la base de datos.
    await insertUserQuery(
      name,
      surname,
      gender,
      interest,
      email,
      password,
      registrationCode
    );

    // reamos el asunto del email de verificación.
    const emailSubject = 'Activa tu usuario en la app de GymÑam';

    //Creamos el contenido del email.
    //Por favor, verifica tu usuario a través del <a href=http://localhost:8000/users/validate/${registrationCode}>Siguiente enlace</a>
    const emailBody = `
        ¡Bienvenid@ a GymÑam, ${name}!

        Por favor, verifica tu usuario con este código ${registrationCode} a través del <a href=http://localhost:5173/validate?registrationCode=${registrationCode}>Siguiente enlace</a>
    `;

    //Enviamos el email de verificación.
    await sendMail(email, emailSubject, emailBody);

    res.send({
      status: 'ok',
      message: `Hola ${name} tu usuario ha sido creado, revisa el email de verificación para activar tu cuenta`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = newUser;
