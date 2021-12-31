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
              <div className="project-card-btn-container">
                <button className="project-card-btn">Live Site</button>
                <button className="project-card-btn">GitHub</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
