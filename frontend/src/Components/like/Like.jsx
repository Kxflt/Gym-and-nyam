import React, { useState } from 'react';
import './like.css'; // Asegúrate de tener el archivo CSS para estilizar el botón.

const LikeButton = () => {
  const [count, setCount] = useState(0);
  const [isSumando, setIsSumando] = useState(true);

  const handleClick = () => {
    setCount((prevCount) => (isSumando ? prevCount + 1 : prevCount - 1));
    setIsSumando((prevIsSumando) => !prevIsSumando);
  };

  return (
    <div>
      <button className={isSumando ? 'suma' : 'resta'} onClick={handleClick}>
        {isSumando ? 'Súmame' : 'Réstame'}
      </button>
      <p>
        {count} {count === 0 ? 'likes' : 'like'}
      </p>
    </div>
  );
};

export default LikeButton;
