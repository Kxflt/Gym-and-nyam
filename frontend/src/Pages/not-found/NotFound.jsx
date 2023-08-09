import React from 'react';
import { useState } from 'react';
import Button from '../../Components/Shared/Button/Button';
import Fatigaimg from '../../assets/Fatigamuscular.jpg';

import './notFound.css';

function NotFound() {
    const [Text, setText] = useState();
    return (
        <main className="notfound-container">
            <div className="notfound-div">
                <h2 className="notfound-title">OOPS PAGE NOT FOUND</h2>
                <a href="/">
                    <Button className="notfound-button" text="E.T GO HOME" />
                </a>
            </div>
            <img className="notfound-img" src={Fatigaimg} alt="Pagina 404" />
        </main>
    );
}
export default NotFound;
