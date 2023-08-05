import React from 'react';
import { Link } from 'react-router-dom';
import formatMessage from 'format-message';
import twitter from '../../../assets/twitter.png';
import gmail from '../../../assets/gmail.png';
import github from '../../../assets/github.png';

import './footer_2.css';

function Footer() {
    return (
        <footer className="footer">
            <section className="logo">
                <img
                    src="/original-multimedia/logo2.png"
                    alt="Logo"
                    className="logo"
                />
            </section>

            <section className="contact-footer">
                <h2>{formatMessage('Contacto')}</h2>
                <p>{formatMessage('Av. Chinchon, 77')}</p>
                <p>{formatMessage('+34 587 348 428')}</p>
                <p>{formatMessage('info@gymnam.com')}</p>
            </section>

            <section className="follow-footer">
                <h2>{formatMessage('Síguenos')}</h2>
                <figure className="social-media">
                    <img src={twitter} alt="Twitter" />
                    <img src={gmail} alt="Gmail" />
                    <img src={github} alt="Github" />
                </figure>
            </section>
        </footer>
    );
}

export default Footer;
