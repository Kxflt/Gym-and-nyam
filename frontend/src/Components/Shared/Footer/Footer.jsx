import React from 'react';
import { Link } from 'react-router-dom';
import formatMessage from 'format-message';
import twitter from '../../../assets/twitter.png';
import gmail from '../../../assets/gmail.png';
import github from '../../../assets/github.png';

import './footer.css';

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
                <h2 className="contact-title">
                    {formatMessage('Contact info:')}
                </h2>
                <p className="contact-p">{formatMessage('Av. Chinchon, 77')}</p>
                <p className="contact-p">{formatMessage('+34 587 348 428')}</p>
                <p className="contact-p">{formatMessage('info@gymnam.com')}</p>
            </section>

            <section className="follow-footer">
                <h2 className="follow-title">
                    {formatMessage('Our socials:')}
                </h2>
                <figure className="social-media">
                    <a href="http://twitter.com/GymNyam" target="_blank">
                        <img src={twitter} alt="Twitter" />
                    </a>
                    <a href="mailto:gym.nyam.23@gmail.com" target="_blank">
                        <img src={gmail} alt="Gmail" />
                    </a>
                    <a
                        href="https://github.com/Kxflt/Gym-and-nyam"
                        target="_blank"
                    >
                        <img src={github} alt="Github" />
                    </a>
                </figure>
            </section>
        </footer>
    );
}

export default Footer;
