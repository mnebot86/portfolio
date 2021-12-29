import { useState } from 'react'
import { useHistory } from "react-router-dom"
import heroBg from "../../asset/home/HeroBackground.mp4";
import downArrow from "../../asset/icons/downArrow.png"
import "./Hero.css";

const Hero = () => {
const [click, setClick] = useState(false);
const history = useHistory();

  const handleClick = () => {
    setClick((prev) => !prev)
    setTimeout(() =>{
      history.push('main')
    }, 700)
  }

  return (
    <div className="home-screen">
      <video autoPlay muted loop id="hero-bg">
        <source src={heroBg} type="video/mp4" />
        City of Providence, Rhode Island
      </video>
      <div className="home-text-wrap">
        <p className="home-name">Miguel Nebot</p>
        <p className="home-job">Full Stack Engineer</p>
      </div>
      <div className={click ? " home-down-arrow clicked" : "home-down-arrow"} onClick={handleClick}>
        <img src={downArrow} alt="arrow pointing downwards" />
      </div>
    </div>
  );
};

export default Hero;
