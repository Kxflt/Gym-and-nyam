import React from 'react';
import './favourite.css';

const FavButton = ({ exerciseId, favByMe, addFavourite }) => {
    return (
        <button
            className="fav-button"
            onClick={() => addFavourite(exerciseId, favByMe)}
        >
            <div className={`favourite ${!favByMe ? 'not-fav' : ''}`}>
                <img src="/star.svg" />
            </div>
        </button>
    );
};

export default FavButton;
