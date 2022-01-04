import { useEffect } from 'react';
import "./About.css";

const About = () => {

  useEffect(() => {
    window.scrollTo(0,0)
  },[]);

  return (
    <div id='about'className="about-page">
      <div className="text-box">
        <h1 className="fadeIn">
          <span>Who</span>
          <span> am</span>
          <span> I</span>
          <span> ?</span>
        </h1>
        <p className="fadeIn">
          I am a passionate Full Stack Developer from Providence, Rhode Island.
          I come from a background in sales. Using my skills to adapt to my
          environment and learning new skills. I hope to rise to any challenge.
          I seek growth in myself and to help those around me through
          technology.
        </p>
      </div>
    </div>
  );
};

export default About;
