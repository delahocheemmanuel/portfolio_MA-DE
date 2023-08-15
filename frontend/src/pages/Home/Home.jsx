import React from 'react';
import Slider from 'react-slick';
import ProjectsData from '../../data/data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="home-container">
      <Slider {...settings}>
        {ProjectsData.map((project, index) => (
          <div key={index} className="project-slide">
            <h2>Réalisations</h2>
            <Link to={project.githubPagesLink}target="_blank" rel="noopener noreferrer">
              <img className='project__img' src={project.imageSrc} alt={project.title} />
            </Link>
            <div className='realisations__project--desc'>
              <Link to={project.githubLink} target="_blank" rel="noopener noreferrer">lien GitHub</Link>
              <ul>
                {project.technologies.map((tech, techIndex) => (
                  <li key={techIndex}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;