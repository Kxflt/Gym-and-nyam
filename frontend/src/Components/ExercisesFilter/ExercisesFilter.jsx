import React from 'react';
import { useState } from 'react';

const ExercisesFilter = () => {
  const [typology, setTypology] = useState('');
  const [muscleGroup, setMuscleGroup] = useState('');

  const handleChangeTypology = (e) => {
    setTypology(e.target.value);
  };

  const handleChangeMuscleGroup = (e) => {
    setMuscleGroup(e.target.value);
  };

  const handleClickRemoveFilters = (e) => {
    e.preventDefault();
    setTypology('');
    setMuscleGroup('');
  };

  return (
    <div>
      <h3>Filtro de ejercicios</h3>
      <p>Puedes filtrar los ejercicios por tipología y grupo muscular</p>
      <form>
        <h3>Filtrar por:</h3>
        <fieldset>
          <select
            id="typology"
            name="typology"
            onChange={handleChangeTypology}
            value={typology}
          >
            <option value="" disabled hidden>
              Tipología
            </option>
            <option value="1">Fuerza</option>
            <option value="2">Cardio</option>
          </select>
        </fieldset>
        <fieldset>
          <select
            id="muscleGroup"
            name="muscleGroup"
            onChange={handleChangeMuscleGroup}
            value={muscleGroup}
          >
            <option value="" disabled hidden>
              Grupo muscular
            </option>
            <option value="1">Biceps</option>
            <option value="2">Triceps</option>
            <option value="3">Antebrazo</option>
            <option>Hombro</option>
            <option>Espalda</option>
            <option>Pectoral</option>
            <option>Abdomen</option>
            <option>Piernas</option>
          </select>
        </fieldset>
        <button onClick={handleClickRemoveFilters}>Borrar filtros</button>
      </form>
    </div>
  );
};
export default ExercisesFilter;
