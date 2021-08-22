import "./Projects.css";
import mixer from "../../asset/projects/mixer.png";
import arthub from "../../asset/projects/arthub.png";
import barber from "../../asset/projects/barbershop.png";

const Projects = () => {
  return (
    <div className="projects-screen">
      <div className="mixer-card">
        <img src={mixer} alt="mixer-photo" />
        {/* <div className="mixer-disc">
          <p>
            Mixer was my first projects. Built using HTML, CSS, Javascript, and
            using Axios.
          </p>
        </div> */}
      </div>
      <div className="arthub-card">
        <img src={arthub} alt="arthub-photo" />
        {/* <div className ="arthub-disc">
          <p>ArtHub was created using React.js, Axios and AirTable as a database</p>
        </div> */}
      </div>
      <div className="barber-card">
        <img src={barber} alt="barber-photo" />
        {/* <div className ="barber-disc">
          <p>TheBarberShop is powered by React in the front and Ruby on rails in the backend. Authentication with JWT and Bcrypt.</p>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
