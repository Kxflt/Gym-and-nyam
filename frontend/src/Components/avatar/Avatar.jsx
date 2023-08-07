import React from 'react';
import ImgDefaultAvatar from '../../assets/user.png';

import './avatar.css';

const Avatar = ({ avatar }) => {
    return (
        <div className="avatar-container">
            {avatar ? (
                <img
                    className="avatar"
                    src={`http://localhost:8000/${avatar}`}
                    alt="User Avatar"
                />
            ) : (
                <img
                    className="avatar"
                    src={ImgDefaultAvatar}
                    alt="User Avatar"
                />
            )}
        </div>
    );
};

export default Avatar;
