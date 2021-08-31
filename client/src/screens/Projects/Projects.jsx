import "./Projects.css";
import mixer from "../../asset/projects/mixer.png";
import arthub from "../../asset/projects/arthub.png";
import gnome from "../../asset/projects/gnome.png"
import barber from "../../asset/projects/barbershop.png";

const Projects = () => {
  return (
    <div id='projects' className="projects-screen">
      {/* <h1 className='projects-title'>Projects</h1> */}
      <div className="mixer-card">
        <img src={mixer} alt="drinks" />
        <div className ="mixer-button-wrap">
          <button className ="projects-btn" type="button" onClick={() => window.open("https://ga-mixer.netlify.app/", "_blank")}>Live</button>
          <button className ="projects-btn" type="button" onClick={()=> window.open("https://github.com/mnebot86/mixer", "_blank")}>GitHub</button>
        </div>
      </div>
      <div className="arthub-card">
        <img src={arthub} alt="gallery" />
        <div className ="arthub-button-wrap">
          <button className ="projects-btn" type="button" onClick={() => window.open("https://arthub-flamingos.netlify.app/", "_blank")}>Live</button>
          <button className ="projects-btn" type="button" onClick={() => window.open("https://github.com/mnebot86/arthub", "_blank")}>GitHub</button>
        </div>
      </div>
      <div className="gnome-card">
        <img src={gnome} alt="shop" />
        <div className ="gnome-button-wrap">
          <button className ="projects-btn" type="button" onClick={() => window.open("https://gnome-a-zon.netlify.app/", "_blank")}>Live</button>
          <button className ="projects-btn" type="button" onClick={() => window.open("https://github.com/mnebot86/Gnome-A-zon", "_blank")}>GitHub</button>
        </div>
      </div>
      <div className="barber-card">
        <img src={barber} alt="haircut" />
        <div className ="barber-button-wrap">
          <button className ="projects-btn" type="button" onClick={() => window.open("https://thebarbershop401.netlify.app/", "_blank")}>Live</button>
          <button className ="projects-btn" type="button" onClick={() => window.open("https://github.com/mnebot86/TheBarbershop", "_blank")}>GitHub</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
