import { useState } from "react";
import IconContainer from "../IconContainer/IconContainer";
import VideoModal from "../../components/VideoModal/VideoModal";

import "./ProjectCard.css";

const projectCardStyle = {
  boxShadow: '0 10px 6px -6px #777',
  marginBottom: '10rem',
  position: 'relative',
}

const ProjectCard = ({
  title,
  img,
  description,
  icons,
  video,
  site,
  github,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleVideoModal = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
    <div className="project-card-container" style={projectCardStyle}>
          <div className="project-card-img-text-wrap">
            <div className="project-card-img-container">
              <img src={img} alt="" loading='lazy'/>
            </div>
            <div className="project-card-text-container">
              <div className="project-card-title-description-wrap">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
              <IconContainer icons={icons} />
              <div className="project-card-btn-container">
                {video ? (
                  <button className="project-card-btn" onClick={toggleVideoModal}>
                    Video
                  </button>
                ) : (
                  <a href={site} target="_blank" rel="noopener noreferrer">
                    <button className="project-card-btn">Live Site</button>
                  </a>
                )}

                <a href={github} target="_blank" rel="noopener noreferrer">
                  <button className="project-card-btn">GitHub</button>
                </a>
              </div> 
            </div>
          </div>
            {isOpen && !!video ?   <VideoModal
              toggleVideoModal={toggleVideoModal}
              content={
                <iframe width="100%"  height="100%"  src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
            /> : null }
        </div>
    </>
  );
};

export default ProjectCard;
