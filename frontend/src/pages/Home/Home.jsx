import React from 'react';
import Slider from 'react-slick';
import ProjectsData from '../../data/data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import './Home.css';
import Contact from '../../components/Contact/Contact';
import About from '../../components/About/About';

const Home = () => {
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
                <About />
                <section className="Real" id="Real">
                    <h2 className="Real">Réalisations:</h2>
                    <Slider {...settings}>
                        {ProjectsData.map((project, index) => (
                            <div key={index} className="project-slide">
                                <Link
                                    to={project.githubPagesLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        className="project__img"
                                        src={project.imageSrc}
                                        alt={project.title}
                                    />
                                </Link>
                                <div className="realisations__project--desc">
                                    <Link
                                        to={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        lien GitHub
                                    </Link>
                                    <ul className='description' >
                                        {project.description}
                                    </ul>
                                    <ul className='technologie'>
                                        {project.technologies.map(
                                            (tech, techIndex) => (
                                                <li key={techIndex}>{tech}</li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </section>
                <section className="home__presentation--contact" id="Contact">
                    <h2>Contact:</h2>
                </section>
                <Contact />
            </div>
        </main>
    );
};

export default Home;
