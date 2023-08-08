import React from 'react';

import './like.css';

const LikeButton = ({ exerciseId, likedByMe, toogleLike }) => {
    return (
        <button
            className="like-button"
            onClick={() => toogleLike(exerciseId, likedByMe)}
        >
            <div className={`like ${!likedByMe ? 'not-liked' : ''}`}>
                <img src="/heart.svg" />
            </div>
        </button>
    );
};

export default LikeButton;
