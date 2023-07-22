import React from 'react';
import PropTypes from 'prop-types';

const Exercise = ({ exercise }) => {
  return (
    <li className="exercise">
      <header>
        <p>@{exercise.username}</p>
        <time>
          {new Date(exercise.createdAt).toLocaleDateString('es-ES', {
            hour: '2-digit',
            minuts: '2-digit',
            day: '2 -digit',
            month: '2-digit',
            year: '2-digit',
          })}
        </time>
      </header>
      <div>
        <p>{exercise.text}</p>
        {exercise.image && (
          <img
            src={`http://localhost:8000/${exercise.image}`}
            alt="imagen adjunta al exercicio"
          />
        )}
      </div>
      <footer>
        <p>en construccion........</p>
      </footer>
    </li>
  );
};
Exercise.propTypes = {
  exercise: PropTypes.object,
};
export default Exercise;
