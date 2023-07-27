const getDB = require('../../getDB');
const { generateError } = require('../../../helpers');

const modifyUserQuery = async (
  name,
  surname,
  gender,
  interest,
  email,
  avatarName,
  userId
) => {
  let connection;

  try {
    connection = await getDB();

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
      `UPDATE users SET email = ?, name = ?, surname = ?, gender = ?, interest = ?, avatar = ?, modifiedAt = ? WHERE id = ?`,
      [email, name, surname, gender, interest, avatarName, new Date(), userId]
    );
  } finally {
    if (connection) connection.release();
  }
};

module.exports = modifyUserQuery;
