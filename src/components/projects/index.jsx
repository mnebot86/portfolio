import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../animatedLetters';
import { useState, useEffect } from 'react';
import portfolioData from '../../data/portfolio.json';

const PROJECTS = 'Projects'.split('');

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  
    useEffect(() => {
        const hoverEffect = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(hoverEffect);
    }, []);

  const renderPortfolio = (portfolios) => { 
    return (
      <div className='images-container'>
        {portfolios.map((portfolio, idx) => (
          <div key={`portfolio-${idx}`} className='image-box'>
            <img className="portfolio-image" src={portfolio.cover} alt={portfolio.title} />

            <div className="content">
              <p className='title'>{portfolio.title}</p>
              <h4 className='description'>{portfolio.description}</h4>
              <button className='button' onClick={() => window.open(portfolio.url)}>View</button>
            </div>
          </div>
        ))}
      </div>
    )
  };

    return (
        <>
            <div className="container projects-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={PROJECTS}
                        idx={15}
                    />
          </h1>
          <div>{renderPortfolio(portfolioData.portfolio)}</div>
            </div>

            <Loader type="pacman" />
        </>
    );
};

export default Projects;
