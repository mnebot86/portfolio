import { Link } from "react-router-dom";
import IconContainer from "../IconContainer/IconContainer";
import "./ProjectCard.css";

const ProjectCard = ({ works }) => {
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
                  <button className="project-card-btn">Video</button>
                ) : (
                  <a href={work.site} target="_blank">
                    <button className="project-card-btn">Live Site</button>
                  </a>
                )}

                <a href={work.github} target="_blank">
                  <button className="project-card-btn">GitHub</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
