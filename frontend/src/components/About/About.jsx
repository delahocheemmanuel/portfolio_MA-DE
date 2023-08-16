import React from 'react';
import Footer from '../Footer/Footer';
import './About.css';
import StarRating from '../../utils/StarRating';
import { FaReact } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaSass } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { SiRender} from 'react-icons/si';




const About = () => {
    return (
        <main className="container">
            <section className="header">
                <h2>Delahoche Emmanuel</h2>
                <p>Email : delahochemanu@hotmail.fr</p>
                <p>Téléphone : 06 78 91 45 79</p>
                <p>112 rue saint-martin 60600 Etouy</p>
                <>Permis B</>
            </section>
            <section className='section__objectif--experience'>
            <section className="section__objectif">
                <h2>Objectif professionnel</h2>
                <p>
                    Un résumé court et percutant de votre objectif professionnel
                </p>
            </section>
            
            <section className="section__experience">
                <h2>Expérience professionnelle</h2>
                <ul>
                    <li>
                        <p>Poste, Entreprise</p>
                        <p>Date de début - Date de fin</p>
                        <p>Description des responsabilités et réalisations</p>
                    </li>
                    <li>
                        <p>Poste, Entreprise</p>
                        <p>Date de début - Date de fin</p>
                        <p>Description des responsabilités et réalisations</p>
                    </li>
                    {/* Ajoutez d'autres expériences professionnelles ici */}
                </ul>
            </section>
            </section>
            <section className="section__formation">
                <h2>Formation</h2>
                <ul>
                    <li>
                        <p>Développeur Web, OpenClassrooms</p>
                        <p>08/2023</p>
                        <p>
                            HTML,CSS,SCSS,SASS,Javascript,API,Developpeur
                            Agile,SEO,React,MongoDB
                        </p>
                    </li>
                    <li>
                        <p>Diplôme, Institution</p>
                        <p>Date d'obtention</p>
                        <p>
                            Description des études et des réalisations
                            académiques
                        </p>
                    </li>
                    {/* Ajoutez d'autres formations académiques ici */}
                </ul>
            </section>

            <section className="section__competence">
            <h2>Compétences</h2>
            <ul>
                <li className="skill-list-item">
                    <FaReact className="skill-icon" />
                    <StarRating score={4.5} /> {/* Par exemple, score de 4.5 */}
                    <span className="skill-name">React</span>
                </li>
                <li className="skill-list-item">
                    <FaNodeJs className="skill-icon" />
                    <StarRating score={3} /> {/* Par exemple, score de 3 */}
                    <span className="skill-name">Node.js</span>
                </li>
                <li className="skill-list-item">
                    <FaHtml5 className="skill-icon" />
                    <StarRating score={4} /> {/* Par exemple, score de 4 */}
                    <span className="skill-name">HTML</span>
                </li>
                <li className="skill-list-item">
                    <FaCss3Alt className="skill-icon" />
                    <StarRating score={4} /> {/* Par exemple, score de 4 */}
                    <span className="skill-name">CSS</span>
                </li>
                <li className="skill-list-item">
                    <FaSass className="skill-icon" />
                    <StarRating score={4} /> {/* Par exemple, score de 4 */}
                    <span className="skill-name">SASS</span>
                </li>
                <li className="skill-list-item">
                    <FaGithub className="skill-icon" />
                    <StarRating score={4} /> {/* Par exemple, score de 4 */}
                    <span className="skill-name">GIT</span>
                </li>
                <li className="skill-list-item">
                    <SiMongodb className="skill-icon" />
                    <StarRating score={3} /> {/* Par exemple, score de 3 */}
                    <span className="skill-name">MongoDB</span>
                </li>
                <li className="skill-list-item">
                    <SiRender className="skill-icon" />
                    <StarRating score={3} /> {/* Par exemple, score de 3 */}
                    <span className="skill-name">Render</span>
                </li>
            </ul>
        </section>
            <section className='section__lang--hobby'>
            <section className="section__lang">
                <h2>Langues</h2>
                <ul>
                    <li>
                        Anglais - base "a déja compris un écossais et un
                        irlandais dans un bar"
                    </li>
                    <li>
                        Allemand - notion LV1 .Ja, ich spreche ein beßiun
                        Deutsch,karl otto ist schumzigt
                    </li>
                </ul>
            </section>

            <section className="section__hobby">
                <h2>Centres d'intérêt</h2>
                <ul>
                    <li>Bricolage</li>
                    <li>jardinage</li>
                    <li>Montages vidéos</li>
                    {/* Ajoutez d'autres centres d'intérêt ici */}
                </ul>
            </section>
            </section>
            <Footer />
            {/* Ajoutez d'autres sections pertinentes à votre CV */}
        </main>
    );
};

export default About;
