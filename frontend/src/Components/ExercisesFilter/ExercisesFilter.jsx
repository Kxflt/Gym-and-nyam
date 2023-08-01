import React, { useEffect } from 'react';
import { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import './exercisesfilter.css';

const ExercisesFilter = ({ setExercises, token }) => {
  const [keyword, setKeyword] = useState('');
  const [typologyId, setTypologyId] = useState('');
  const [muscleGroupId, setMuscleGroupId] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [loading, setLoading] = useState(false);

  // Función que filtra ejercicios.
  const filterExercises = async (e) => {
    try {
      e.preventDefault();

      setLoading(true);

      const res = await fetch(
        `http://localhost:8000/exercises?keyword=${keyword}&typologyId=${typologyId}&muscleGroupId=${muscleGroupId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      const body = await res.json();

      console.log(body.data.exercises);

      if (!res.ok) {
        throw new Error(body.message);
      }

      setExercises(body.data.exercises);
    } catch (err) {
      setErrMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClickRemoveFilters = (e) => {
    e.preventDefault();
    setTypologyId('');
    setMuscleGroupId('');
  };

  return (
    <div>
      <form onSubmit={filterExercises}>
        <div className="search-bar">
          <input
            placeholder="Search..."
            type="search"
            className="input"
            id="keyword"
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
            value={keyword}
          />
        </div>

        <fieldset className="options">
          <select
            onChange={(e) => {
              setTypologyId(e.target.value);
            }}
            value={typologyId}
          >
            <option value="0">Tipología</option>
            <option value="1">Fuerza</option>
            <option value="2">Cardio</option>
          </select>
        </fieldset>

        <fieldset className="options">
          <select
            onChange={(e) => {
              setMuscleGroupId(e.target.value);
            }}
            value={muscleGroupId}
          >
            <option value="0">Grupo muscular</option>
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
        <button className="remove-filters" onClick={handleClickRemoveFilters}>
          REMOVE FILTERS
        </button>
        <button className="search-exercises">APPLY FILTERS</button>
      </form>
    </div>
  );
};
export default ExercisesFilter;
