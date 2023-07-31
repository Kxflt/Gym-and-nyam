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
            E.userId = ? AS owner,
            SUM(L.id) AS likes,
            BIT_OR(IFNULL(L.userId = ?, 0)) AS likedByMe,
            E.createdAt
        FROM exercises E
        INNER JOIN likes L ON L.exerciseId = E.id
        ${whereClause}
        GROUP BY E.id
        ORDER BY E.createdAt ${date};`,
      //...y filtramos según los tres campos especificados.
      [userId, userId, `%${keyword}%`]
    );

    // Convertimos el tipo de dato de algunas columnas.
    for (const exercise of exercises) {
      exercise.likes = Number(exercise.likes);
      exercise.owner = Boolean(exercise.owner);
      exercise.likedByMe = Boolean(exercise.likedByMe);
    }

    return exercises;
  } finally {
    if (connection) connection.release();
  }
};

module.exports = selectAllExercisesQuery;
