import "./About.css";
import html from "../../asset/icons/icons8-html-5.svg";
import css from "../../asset/icons/icons8-css3.svg";
import js from "../../asset/icons/icons8-javascript.svg";
import react from "../../asset/icons/icons8-react.svg";
import mongoDB from "../../asset/icons/icons8-mongodb.svg";
import ruby from "../../asset/icons/icons8-ruby-gem.svg";
import rails from "../../asset/icons/icons8-ruby-on-rails.svg";
import figma from "../../asset/icons/icons8-figma.svg";
import git from "../../asset/icons/icons8-git-480.png";
import github from "../../asset/icons/icons8-github.svg";
import postman from "../../asset/icons/icons8-postman-api.svg";
import heroku from "../../asset/icons/icons8-heroku.svg";
import family from "../../asset/IMG_1781.jpg";

const About = () => {
  return (
    <div className="about-screen">
      <div className = 'card'>
        <div className="family-pic">
          <img src={family} alt="family-pic" />
        </div>
        <div className="about-text">
          <p>
            I am a passionate Full Stack Developer from Providence, Rhode
            Island. I come from a background of sales. Using my skills to adapt
            to my environment and learning new skills. I hope to rise to any
            challenge. I seek growth in myself and to help those around me
            through technology.
          </p>
        </div>
      </div>
      <div className="icons">
        <div className='icons-left'>
        <img src={html} alt="html-icon" />
        <img src={css} alt="css-icon" />
        <img src={js} alt="js-icon" />
        <img src={mongoDB} alt="mongoDB-icon" />
        <img className="react-icon"src={react} alt="react-icon" />
        <img src={ruby} alt="ruby-icon" />
        </div>
        <div className="icons-right">
        <img src={rails} alt="rails-icon" />
        <img src={figma} alt="figma-icon" />
        <img src={git} alt="git-icon" />
        <img src={github} alt="github-icon" />
        <img src={postman} alt="postman-icon" />
        <img src={heroku} alt="heroku-icon" />
      </div>
        </div>
          
    </div>
  );
};

export default About;
