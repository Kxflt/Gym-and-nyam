import React from 'react';
import PropTypes from 'prop-types';

const ExerciseBody = ({ description, photo }) => {
  return (
    <div>
      <p>{description}</p>
      {photo && (
        <img
          src={`http://localhost:8000/exercises/${photo}`}
          alt="Exercise image"
        />
      )}
    </div>
  );
};

ExerciseBody.propTypes = {
  description: PropTypes.string,
  photo: PropTypes.string,
};

export default ExerciseBody;
