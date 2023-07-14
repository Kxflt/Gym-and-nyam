import React from 'react';
import { string } from 'prop-types';
import './title.css';

function Title({ text }) {
  return (
    <>
      <h2>{text}</h2>
    </>
  );
}

Title.propTypes = {
  text: string,
};
export default Title;
