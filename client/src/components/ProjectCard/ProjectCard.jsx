import { useState } from "react";
import IconContainer from "../IconContainer/IconContainer";
import VideoModal from "../../components/VideoModal/VideoModal";

import "./ProjectCard.css";

const ProjectCard = ({ works }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleVideoModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {works.map((work, idx) => (
        <div key={idx} className="project-card-container">
          <div className="project-card-img-text-wrap">
            <div className="project-card-img-container">
              <img src={work.img} alt="" />
            </div>
            <div className="project-card-text-container">
              <div className="project-card-title-description-wrap">
                <h2>{work.title}</h2>
                <p>{work.description}</p>
              </div>
              <IconContainer icons={work.icons} />
              <div className="project-card-btn-container">
                {work.video ? (
                  <button className="project-card-btn" onClick={toggleVideoModal}>
                    Video
                  </button>
                ) : (
                  <a href={work.site} target="_blank" rel="noopener noreferrer">
                    <button className="project-card-btn">Live Site</button>
                  </a>
                )}

                <a href={work.github} target="_blank" rel="noopener noreferrer">
                  <button className="project-card-btn">GitHub</button>
                </a>
              </div>
            </div>
          </div>
          {(isOpen && work.video ) && (
            <VideoModal
              toggleVideoModal={toggleVideoModal}
              content={
                <iframe width="100%"  height="100%"  src={work.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
