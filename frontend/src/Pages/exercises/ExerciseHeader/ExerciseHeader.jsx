import React from 'react';
import PropTypes from 'prop-types';

const ExerciseHeader = ({ name }) => {
  return (
    <header>
      <p>{name}</p>
    </header>
  );
};

ExerciseHeader.PropTypes = {
  name: PropTypes.string,
};

export default ExerciseHeader;
