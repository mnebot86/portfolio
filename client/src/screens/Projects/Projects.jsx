import "./Projects.css";
import { useIntersectionObserver } from "../../useIntersectionObserve";
import { useEffect, useRef, useState } from "react";
import mixer from "../../asset/projects/mixer.png";
import arthub from "../../asset/projects/arthub.png";
import gnome from "../../asset/projects/gnome.png";
import barber from "../../asset/projects/barbershop.png";
import weather from "../../asset/projects/weather-together.png";
import VideoModal from "../../components/VideoModal/VideoModal";
import woodshop from '../../asset/projects/woodshop.png'


const Projects = () => {
  const [isOpen,setIsOpen] = useState(false);

  const toggleVideoModal = () => {
    setIsOpen(!isOpen)
  };

  const projectRef = useRef(null);
  const [inView] = useIntersectionObserver(projectRef, {
    rootMargin: '100%',
    threshold: 0,
  });

  useEffect(() => {
    console.log(inView);
  }, [inView]);

  return (
    <div id="projects" className="projects-screen">
      <h1 className="projects-title">Projects</h1>
      <div
        ref={projectRef}
        className={`mixer-card ${inView ? "project-fade" : ""}`}
      >
        <img src={mixer} alt="drinks" />
        <div className="mixer-button-wrap">
          <button
            className="projects-btn"
            type="button"
            onClick={() =>
              window.open("https://ga-mixer.netlify.app/", "_blank")
            }
          >
            Live
          </button>
          <button
            className="projects-btn"
            type="button"
            onClick={() =>
              window.open("https://github.com/mnebot86/mixer", "_blank")
            }
          >
            GitHub
          </button>
        </div>
      </div>
      <div
        ref={projectRef}
        className={`arthub-card ${inView ? "project-fade" : ""}`}
      >
        <img src={arthub} alt="gallery" />
        <div className="arthub-button-wrap">
          <button
            className="projects-btn"
            type="button"
            onClick={() =>
              window.open("https://arthub-flamingos.netlify.app/", "_blank")
            }
          >
            Live
          </button>
          <button
            className="projects-btn"
            type="button"
            onClick={() =>
              window.open("https://github.com/mnebot86/arthub", "_blank")
            }
          >
            GitHub
          </button>
        </div>
      </div>
      <div
        ref={projectRef}
        className={`gnome-card ${inView ? "project-fade" : ""}`}
      >
        <img src={gnome} alt="shop" />
        <div className="gnome-button-wrap">
          <button
            className="projects-btn"
            type="button"
            onClick={() =>
              window.open("https://gnome-a-zon.netlify.app/", "_blank")
            }
          >
            Live
          </button>
          <button
            className="projects-btn"
            type="button"
            onClick={() =>
              window.open("https://github.com/mnebot86/Gnome-A-zon", "_blank")
            }
          >
            GitHub
          </button>
        </div>
      </div>
      <div
        ref={projectRef}
        className={`barber-card ${inView ? "project-fade" : ""}`}
      >
        <img src={barber} alt="haircut" />
        <div className="barber-button-wrap">
          <button
            className="projects-btn"
            type="button"
            onClick={() =>
              window.open("https://thebarbershop401.netlify.app/", "_blank")
            }
          >
            Live
          </button>
          <button
            className="projects-btn"
            type="button"
            onClick={() =>
              window.open("https://github.com/mnebot86/TheBarbershop", "_blank")
            }
          >
            GitHub
          </button>
        </div>
      </div>
      {isOpen && <VideoModal toggleVideoModal={toggleVideoModal} content={<iframe width="100%"  height="100%"  src="https://www.youtube.com/embed/cFo6yul1izA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}/>}
      <div
        ref={projectRef}
        className={`weather-card ${inView ? "project-fade" : ""}`}
      >
        <img src={weather} alt="weather alerts" />
        <div className="weather-button-wrap">
          <button
            className="projects-btn"
            type="button"
            onClick={toggleVideoModal}
          >
            Watch Demo
          </button>
          <button
            className="projects-btn"
            type="button"
            onClick={() =>
              window.open(
                "https://github.com/mnebot86/product-club-front-end",
                "_blank"
              )
            }
          >
            GitHub
          </button>
        </div>
      </div>
      <div
        ref={projectRef}
        className={`woodshop-card ${inView ? "project-fade" : ""}`}
      >
        <img src={woodshop} alt="barbershop in Tallahassee FL" />
        <div className="woodshop-button-wrap">
          <button
            className="projects-btn"
            type="button"
            onClick={() =>
              window.open("https://thewoodshop.club/", "_blank")
            }
          >
            Live
          </button>
          <button
            className="projects-btn"
            type="button"
            onClick={() =>
              window.open("https://github.com/pearllumi-developer/the-wood-shop", "_blank")
            }
          >
            GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
