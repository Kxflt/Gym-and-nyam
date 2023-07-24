import Exercises from './Exercises';

const ExerciseList = () => {
  // Supongamos que tienes una lista de ejercicios
  const exercises = [
    {
      id: 1,
      name: 'Ejercicio 1',
      description: 'Descripción del ejercicio 1',
      photo: 'url_imagen_1',
    },
    {
      id: 2,
      name: 'Ejercicio 2',
      description: 'Descripción del ejercicio 2',
      photo: 'url_imagen_2',
    },
    // Otros ejercicios...
  ];

  return (
    <ul>
      {exercises.map((exercise) => (
        <Exercises
          key={exercise.id}
          exercise={exercise}
          // Pasar las funciones de eliminar y cargar (si las tienes)
          deleteExercise={() => {}}
          loading={false}
        />
      ))}
    </ul>
  );
};

export default ExerciseList;
