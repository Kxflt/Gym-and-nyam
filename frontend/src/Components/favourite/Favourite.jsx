import React from 'react';
import './favourite.css'; // Asegúrate de tener el archivo CSS para estilizar el botón.

const FavButton = ({ exerciseId, favByMe, addFavourite }) => {
    return (
        <button
            className="fav-button"
            onClick={() => addFavourite(exerciseId, favByMe)}
        >
            <div className={`favourite ${favByMe ? 'fav' : ''}`}>
                <svg
                    id="star-svg"
                    viewBox="467 400 50 90"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g
                        id="Group"
                        fill="none"
                        fillRule="evenodd"
                        transform="translate(467 392)"
                    >
                        <path
                            d="M12 2 l3 9h9l-7 5 3 9-7-5-7 5 3-9-7-5h9z"
                            id="star"
                            fill="#AAB8C2"
                        />
                        <circle
                            id="main-circ"
                            fill="#E2264D"
                            opacity="0"
                            cx="29.5"
                            cy="29.5"
                            r="1.5"
                        />

                        <g id="grp7" opacity="0" transform="translate(7 6)">
                            <circle
                                id="oval1"
                                fill="#9CD8C3"
                                cx="2"
                                cy="6"
                                r="2"
                            />
                            <circle
                                id="oval2"
                                fill="#8CE8C3"
                                cx="5"
                                cy="2"
                                r="2"
                            />
                        </g>

                        <g id="grp6" opacity="0" transform="translate(0 28)">
                            <circle
                                id="oval1"
                                fill="#CC8EF5"
                                cx="2"
                                cy="7"
                                r="2"
                            />
                            <circle
                                id="oval2"
                                fill="#91D2FA"
                                cx="3"
                                cy="2"
                                r="2"
                            />
                        </g>

                        <g id="grp3" opacity="0" transform="translate(52 28)">
                            <circle
                                id="oval2"
                                fill="#9CD8C3"
                                cx="2"
                                cy="7"
                                r="2"
                            />
                            <circle
                                id="oval1"
                                fill="#8CE8C3"
                                cx="4"
                                cy="2"
                                r="2"
                            />
                        </g>

                        <g id="grp2" opacity="0" transform="translate(44 6)">
                            <circle
                                id="oval2"
                                fill="#CC8EF5"
                                cx="5"
                                cy="6"
                                r="2"
                            />
                            <circle
                                id="oval1"
                                fill="#CC8EF5"
                                cx="2"
                                cy="2"
                                r="2"
                            />
                        </g>

                        <g id="grp5" opacity="0" transform="translate(14 50)">
                            <circle
                                id="oval1"
                                fill="#91D2FA"
                                cx="6"
                                cy="5"
                                r="2"
                            />
                            <circle
                                id="oval2"
                                fill="#91D2FA"
                                cx="2"
                                cy="2"
                                r="2"
                            />
                        </g>

                        <g id="grp4" opacity="0" transform="translate(35 50)">
                            <circle
                                id="oval1"
                                fill="#F48EA7"
                                cx="6"
                                cy="5"
                                r="2"
                            />
                            <circle
                                id="oval2"
                                fill="#F48EA7"
                                cx="2"
                                cy="2"
                                r="2"
                            />
                        </g>

                        <g id="grp1" opacity="0" transform="translate(24)">
                            <circle
                                id="oval1"
                                fill="#9FC7FA"
                                cx="2.5"
                                cy="3"
                                r="2"
                            />
                            <circle
                                id="oval2"
                                fill="#9FC7FA"
                                cx="7.5"
                                cy="2"
                                r="2"
                            />
                        </g>
                    </g>
                </svg>
            </div>
        </button>
    );
};

export default FavButton;
