import React from 'react';
import profile from '../../assets/profile.jpg';
import fat_pikachu from '../../assets/fat_pikachu.png';
import aitor from '../../assets/aitor.jpg';
import marina from '../../assets/marina.jpg';

import './aboutUs.css';
function AboutUs() {
    return (
        <main className="about-us">
            <div className="dev-container">
                <div className="dev-profile-wrapper">
                    <div className="dev-profile">
                        <div className="dev-profile-image">
                            <img
                                src={profile}
                                alt="profile 1"
                                className="profile"
                            />
                        </div>
                        <ul className="social-icons">
                            <li>
                                <a href="#email" title="Email">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#linkedin" title="Linkedin">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 
                                             2 0 0 1 -2 -2z"
                                        ></path>
                                        <path d="M8 11l0 5"></path>
                                        <path d="M8 8l0 .01"></path>
                                        <path d="M12 16l0 -5"></path>
                                        <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                        <div className="dev-profile-name">
                            <h2>Uri Solanes</h2>
                            <div className="dev-profile-bio">
                                Web Developer - Hack a boss Bootcamp.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dev-container">
                <div className="dev-profile-wrapper">
                    <div className="dev-profile">
                        <div className="dev-profile-image">
                            <img
                                src={fat_pikachu}
                                alt="profile 1"
                                className="profile"
                            />
                        </div>
                        <ul className="social-icons">
                            <li>
                                <a href="#email" title="Email">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#linkedin" title="Linkedin">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 
                                             2 0 0 1 -2 -2z"
                                        ></path>
                                        <path d="M8 11l0 5"></path>
                                        <path d="M8 8l0 .01"></path>
                                        <path d="M12 16l0 -5"></path>
                                        <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                        <div className="dev-profile-name">
                            <h2>Ryan John Quinn</h2>
                            <div className="dev-profile-bio">
                                I'm student. love working with <em>React</em>{' '}
                                and <em>Node.js</em>.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dev-container">
                <div className="dev-profile-wrapper">
                    <div className="dev-profile">
                        <div className="dev-profile-image">
                            <img
                                src={aitor}
                                alt="profile 1"
                                className="profile"
                            />
                        </div>
                        <ul className="social-icons">
                            <li>
                                <a href="#email" title="Email">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#linkedin" title="Linkedin">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 
                                             2 0 0 1 -2 -2z"
                                        ></path>
                                        <path d="M8 11l0 5"></path>
                                        <path d="M8 8l0 .01"></path>
                                        <path d="M12 16l0 -5"></path>
                                        <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                        <div className="dev-profile-name">
                            <h2>Aitor de la Cueva</h2>
                            <div className="dev-profile-bio">
                                I'm student. love working with <em>React</em>{' '}
                                and <em>Node.js</em>.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dev-container">
                <div className="dev-profile-wrapper">
                    <div className="dev-profile">
                        <div className="dev-profile-image">
                            <img
                                src={marina}
                                alt="profile 1"
                                className="profile"
                            />
                        </div>
                        <ul className="social-icons">
                            <li>
                                <a href="#email" title="Email">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#linkedin" title="Linkedin">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path
                                            d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 
                                             2 0 0 1 -2 -2z"
                                        ></path>
                                        <path d="M8 11l0 5"></path>
                                        <path d="M8 8l0 .01"></path>
                                        <path d="M12 16l0 -5"></path>
                                        <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                        <div className="dev-profile-name">
                            <h2>Marina Hernández</h2>
                            <div className="dev-profile-bio">
                                I'm student. love working with <em>React</em>{' '}
                                and <em>Node.js</em>.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default AboutUs;
