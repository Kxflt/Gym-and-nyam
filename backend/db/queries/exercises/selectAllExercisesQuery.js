const getDB = require('../../getDB');

const selectAllExercisesQuery = async ({
  keyword = '',
  typologyId = '',
  muscleGroupId = '',
  date = '',
  userId,
}) => {
  let connection;
  try {
    connection = await getDB();

    let whereClause = 'WHERE E.name LIKE ?';

    // Convertimos a tipo Number los IDs.
    typologyId = Number(typologyId);
    muscleGroupId = Number(muscleGroupId);

    // Si el usuario ha enviado un id añadimos el filtro.
    if (typologyId) whereClause += ` AND E.typologyId = ${typologyId}`;
    if (muscleGroupId) whereClause += ` AND E.muscleGroupId = ${muscleGroupId}`;

    //Seleccionamos los datos que queremos mostrar...
    const [exercises] = await connection.query(
      `
        SELECT 
            E.id,
            E.name,
            E.description,
            E.photo,
            E.typologyId,
            E.muscleGroupId,
            E.createdAt
        FROM exercises E
        ${whereClause}
        GROUP BY E.id
        ORDER BY E.createdAt ${date};`,
      //...y filtramos según los tres campos especificados.
      [`%${keyword}%`]
    );
    return exercises;
  } finally {
    if (connection) connection.release();
  }
};

module.exports = selectAllExercisesQuery;
