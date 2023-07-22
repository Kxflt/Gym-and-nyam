import React from 'react';
import { Link } from 'react-router-dom';
import formatMessage from 'format-message';
import twitter from '../../../assets/twitter.png';
import facebook from '../../../assets/facebook.png';
import instagram from '../../../assets/instagram.png';

import './footer_2.css';

function Footer() {
  return (
    <React.Fragment>
      <footer>
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
            <img src={facebook} alt="Facebook" />
            <img src={instagram} alt="Instagram" />
          </figure>
        </section>
      </footer>
    </React.Fragment>
  );
}

export default Footer;
