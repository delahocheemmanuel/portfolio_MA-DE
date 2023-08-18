import React from 'react';
import './About.css';
import Footer from '../Footer/Footer';
import StarRating from '../../utils/StarRating';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaFigma,
  FaGithub,
  FaDigitalOcean,
} from 'react-icons/fa';
import { SiMongodb, SiRender, SiAdobephotoshop } from 'react-icons/si';
import { MdPictureAsPdf } from 'react-icons/md';
import { TbSeo } from 'react-icons/tb';







const About = () => {
    return (
        <main className="container">
            <section className="header">
                <h1>Portfolio Delahoche Emmanuel</h1>
                <p>Email : delahochemanu@hotmail.fr</p>
                <p>Téléphone : 06 78 91 45 79</p>
                <a href="./CV_Delahoche_Emmanuel.pdf" target="_blank" rel="noopener noreferrer" download="CV_Delahoche_Emmanuel.pdf">
                    Curriculum vitae <MdPictureAsPdf />
                </a>
            </section>
            <section className='section__objectif--experience'>
            <section className="section__objectif">
    <h2>Objectif professionnel</h2>
    <p>
        Je suis à la recherche d'opportunités en tant que développeur web junior, avec une préférence pour des postes en CDI ou CDD à 90 %, offrant la possibilité de télétravail. Ma passion pour la programmation et ma solide expérience dans la création d'applications web me permettent de contribuer de manière significative à des projets innovants et stimulants. En parallèle, je souhaite également explorer le domaine du freelance pour élargir mes compétences et collaborer avec une variété de clients et de projets. Mon objectif est de continuer à apprendre, à développer mes compétences et à apporter une valeur ajoutée à chaque opportunité professionnelle.
    </p>
</section>

            
            <section className="section__experience">
                <h2>Expérience professionnelle</h2>
                <p>developpeur junior</p>
                <p>exemples de métier pratiqué,voir cv pour plus de précisions</p>
                <ul>
                    <li>électricien batiment</li>
                    <li>électricien industriel</li>
                    <li>électricien de maintenance</li>
                    <li>technicien de maintenance industrielle</li>
                    <li>mécanicien industriel</li>
                    <li>hydraulicien</li>
                    <li>pneumaticien</li>
                    <li>automatisme industriel</li>
                    <li>serveur/barman/cuisinier</li>
                </ul>
                {/* <ul>
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
                </ul> */}
            </section>
            </section>
            <section className="section__formation">
                <h2>Formation</h2>
                <ul>
                    <li>
                        <p>Développeur Web, OpenClassrooms</p>
                        <p>2023</p>
                        <p>
                            HTML, CSS, SCSS, SASS, Javascript, API, Méthode Agile, SEO, React, MongoDB
                        </p>
                    </li>
                    <li>
                        <p>developpeur web, OpenClassrooms</p>
                        <p>21/08/23 ?</p>
                        <p>
                        Maitrisez le développement web et créez des sites web de A à Z !
                        </p>
                    </li>
                    {/* Ajoutez d'autres formations académiques ici */}
                </ul>
            </section>

            <section className="section__competence">
        <h2>Compétences</h2>
        <ul>
          <li className="skill-list-item">
            <FaReact className="skill-icon" aria-label="React" />
            <StarRating score={4.4} />
            <span className="skill-name">React</span>
          </li>
          <li className="skill-list-item">
            <FaNodeJs className="skill-icon" aria-label="Node.js" />
            <StarRating score={3} />
            <span className="skill-name">Node.js</span>
          </li>
          <li className="skill-list-item">
            <FaHtml5 className="skill-icon" aria-label="HTML" />
            <StarRating score={4} />
            <span className="skill-name">HTML</span>
          </li>
          <li className="skill-list-item">
            <FaCss3Alt className="skill-icon" aria-label="CSS" />
            <StarRating score={4} />
            <span className="skill-name">CSS</span>
          </li>
          <li className="skill-list-item">
            <FaSass className="skill-icon" aria-label="SASS" />
            <StarRating score={4} />
            <span className="skill-name">SASS</span>
          </li>
          <li className="skill-list-item">
            <FaGithub className="skill-icon" aria-label="GitHub" />
            <StarRating score={4} />
            <span className="skill-name">GITHUB</span>
          </li>
          <li className="skill-list-item">
            <SiRender className="skill-icon" aria-label="Render" />
            <StarRating score={3} />
            <span className="skill-name">Render</span>
          </li>
          <li className="skill-list-item">
            <SiMongodb className="skill-icon" aria-label="MongoDB" />
            <StarRating score={3} />
            <span className="skill-name">MongoDB</span>
          </li>
          <li className="skill-list-item">
            <FaDigitalOcean className="skill-icon" aria-label="DigitalOcean" />
            <StarRating score={1} />
            <span className="skill-name">DigitalOcean</span>
          </li>
          <li className="skill-list-item">
            <SiAdobephotoshop className="skill-icon" aria-label="Photoshop" />
            <StarRating score={3} />
            <span className="skill-name">PhotoShop</span>
          </li>
          <li className="skill-list-item">
            <TbSeo className="skill-icon" aria-label="SEO" />
            <StarRating score={3} />
            <span className="skill-name">SEO</span>
          </li>
          <li className="skill-list-item">
            <FaFigma className="skill-icon" aria-label="Figma" />
            <StarRating score={3} />
            <span className="skill-name">Figma</span>
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
