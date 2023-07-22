'use strict';
//Importamos los middlewares para guardar y borrar fotos, ya que en este request el usuario puede modificar su avatar.
const { generateError } = require('../../helpers');

const modifyUserQuery = require('../../db/queries/users/modifyUserQuery');
const infoUserQuery = require('../../db/queries/users/selectUserByIdQuery');

const modifyUser = async (req, res, next) => {
  try {
    //Destructuring del body
    let { name, email } = req.body;

    //Si faltan campos generamos un error.
    if (!name && !email) {
      generateError('Faltan campos', 400);
    }
    const user = await infoUserQuery(req.user.id);
    //Destructuring del path params
    //const { id: userId } = req.params;

    //await validateSchema(newUserSchema, req.body);

    //Destructuring de las columnas de la tabla "usuarios" que nos conciernen. Con "[columna]DB" establecemos que su valor inicial debe ser el que ya tiene en la tabla "usuarios".
    //const { name: nameDB, email: emailDB } = infoUser;

    //Comprobamos si se han cambiado datos.
    name = name || user.name;
    email = email || user.email;

    //Destructuring de los datos del ejercicio que modificaremos a continuación.
    //const userData = {
    // name,
    //email,
    // userId,
    // };
    const userId = req.user.id;
    //Actualizamos los datos del ejercicio.
    await modifyUserQuery(name, email, userId);
    //Mandamos un mensaje confirmando la correcta modificación de los datos del ejercicio. Asignamos un valor a la columna "modifiedAt".
    res.send({
      status: 'ok',
      message: `Usuario  modificado correctamente`,
      data: {
        user: {
          name,
          email,
          modifiedAt: new Date(),
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = modifyUser;
