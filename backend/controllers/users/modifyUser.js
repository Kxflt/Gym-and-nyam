'use strict';
//Importamos los middlewares para guardar y borrar fotos, ya que en este request el usuario puede modificar su avatar.
const { generateError, savePhoto, deletePhoto } = require('../../helpers');

const modifyUserQuery = require('../../db/queries/users/modifyUserQuery');
const infoUserQuery = require('../../db/queries/users/selectUserByIdQuery');

const modifyUser = async (req, res, next) => {
  try {
    //Destructuring del body
    let { name, email, surname, gender, interest } = req.body;

    //Si faltan campos generamos un error.
    if (
      !name &&
      !email &&
      !req.files?.avatar &&
      !surname &&
      !gender &&
      !interest
    ) {
      generateError('Faltan campos', 400);
    }

    // Obtenemos los datos del usuario.
    const user = await infoUserQuery(req.user.id);

    // Creamos una variable para guardar el nombre del avatar.
    let avatarName;

    // Si se ha enviado un avatar en la petición, lo guardamos.
    if (req.files?.avatar) {
      // Procesamos la foto y la guardamos en la carpeta uploads.
      avatarName = await savePhoto(req.files.avatar, 100);

      // Si el usuario ya tenía avatar, borramos el anterior de la carpeta "uploads".
      if (user.avatar) {
        await deletePhoto(user.avatar);
      }
    }

    // Comprobamos si se han cambiado datos.
    name = name || user.name;
    email = email || user.email;
    avatarName = avatarName || user.avatar;
    surname = surname || user.surname;
    gender = gender || user.gender;
    interest = interest || user.interest;

    // Obtenemos el id del usuario.
    const userId = req.user.id;

    // Actualizamos los datos del usuario.
    await modifyUserQuery(
      name,
      surname,
      gender,
      interest,
      email,
      avatarName,
      userId
    );

    // Mandamos un mensaje confirmando la correcta modificación de los datos del ejercicio. Asignamos un valor a la columna "modifiedAt".
    res.send({
      status: 'ok',
      message: `Usuario  modificado correctamente`,
      data: {
        user: {
          name,
          surname,
          gender,
          interest,
          email,
          avatar: avatarName,
          modifiedAt: new Date(),
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = modifyUser;
