import React from 'react';
import axios from 'axios';

import './exercises.css';

function Exercises() {
  return;

  axios
    .get('http://localhost:8000/exercises/')
    .then((response) => {
      // Manejar la respuesta exitosa
      console.log(response.data);
    })
    .catch((error) => {
      // Manejar el error
      console.error(error);
    });
}

export default Exercises;
