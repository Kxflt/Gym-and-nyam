const getDB = require('../../getDB');
const { generateError } = require('../../../helpers');

const modifyUserQuery = async (name, email, userId) => {
  let connection;

  try {
    connection = await getDB();

    //Creo que lo podemos eliminar porque nos da igual que el usuario tenga el mismo Buscamos en la base de datos algún usuario con el mismo nombre de usuario O email.
    let [users] = await connection.query(
      `SELECT id FROM users WHERE name = ? AND id NOT LIKE ?`,
      [name, userId]
    );

    // Verificar si existe algún usuario con el mismo email.
    let [usersWithSameEmail] = await connection.query(
      `SELECT id FROM users WHERE email = ? AND id NOT LIKE ?`,
      [email, userId]
    );

    // Si existe algún usuario con ese email, lanzamos un error.
    if (usersWithSameEmail.length > 0) {
      generateError('Ya existe un usuario con ese email', 403);
    }

    // Continuamos con la lógica para realizar la actualización de datos del usuario.
    await connection.query(
      `UPDATE users SET email = ?, name = ?, modifiedAt = ? WHERE id = ?`,
      [email, name, new Date(), userId]
    );
  } finally {
    if (connection) connection.release();
  }
};

module.exports = modifyUserQuery;
