import React, { useEffect } from 'react';
import { useState } from 'react';

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
      <h3>Exercises Filter</h3>
      <p>Filter by Typology and Musclegroup</p>
      <form onSubmit={filterExercises}>
        <h3>Filter by:</h3>

        <fieldset>
          <label htmlFor="keyword">Search:</label>
          <input
            type="search"
            id="keyword"
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
            value={keyword}
          />
        </fieldset>

        <fieldset>
          <select
            onChange={(e) => {
              setTypologyId(e.target.value);
            }}
            value={typologyId}
          >
            <option value="0">Typology</option>
            <option value="1">Bodybuilding</option>
            <option value="2">Cardio</option>
          </select>
        </fieldset>

        <fieldset>
          <select
            onChange={(e) => {
              setMuscleGroupId(e.target.value);
            }}
            value={muscleGroupId}
          >
            <option value="0">Muscle Group</option>
            <option value="1">Biceps</option>
            <option value="2">Triceps</option>
            <option value="3">Forearm</option>
            <option value="4">Shoulders</option>
            <option value="5">Back</option>
            <option value="6">Chest</option>
            <option value="7">Abdomen</option>
            <option value="8">Legs</option>
          </select>
        </fieldset>
        <button onClick={handleClickRemoveFilters}>Remove filters</button>
        <button>Send</button>
      </form>
    </div>
  );
};
export default ExercisesFilter;
