import React from 'react';
import Slider from 'react-slick'; // Importation du composant Slider de react-slick
import ProjectsData from '../../data/data'; // Importation des données de projets depuis un fichier externe
import 'slick-carousel/slick/slick.css'; // Importation des styles de slick-carousel
import 'slick-carousel/slick/slick-theme.css'; // Importation des styles de slick-carousel
import { Link } from 'react-router-dom'; // Importation du composant Link de react-router-dom
import './Home.sass'; // Importation du fichier de styles SASS
import Contact from '../../components/Contact/Contact'; // Importation du composant Contact
import About from '../../components/About/About'; // Importation du composant About

const Home = () => {
    // Configuration pour le composant Slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <main className="home-container">
            <div className="home__presentation">
                <section
                    className="home__presentation--about"
                    id="About"
                ></section>
                <About /> {/* Rendu du composant About */}
                <section className="Real" id="Real">
                    <h2>Réalisations:</h2>
                    <Slider {...settings}>
                        {ProjectsData.map((project, index) => (
                            <div key={index} className="project-slide">
                                {project.githubPagesLink ? (
                                    <Link
                                        to={project.githubPagesLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project__link"
                                    >
                                        <img
                                            className="project__img"
                                            src={project.imageSrc}
                                            alt={project.title}
                                        />
                                    </Link>
                                ) : (
                                    <div className="project__link">
                                        <img
                                            className="project__img"
                                            src={project.imageSrc}
                                            alt={project.title}
                                        />
                                    </div>
                                )}

                                <div className="realisations__project--desc">
                                    <ul className="description">
                                        {project.description}{' '}
                                        {/* Rendu de la description du projet */}
                                    </ul>
                                    <Link
                                        to={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        lien GitHub
                                    </Link>
                                    <ul className="technologie">
                                        {project.technologies.map(
                                            (tech, techIndex) => (
                                                <li key={techIndex}>{tech}</li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </Slider>{' '}
                    {/* Rendu du composant Slider avec les projets */}
                </section>
                <section className="home__presentation--contact" id="Contact">
                    <h2>Contact:</h2>
                </section>
                <Contact /> {/* Rendu du composant Contact */}
            </div>
        </main>
    );
};

export default Home;
