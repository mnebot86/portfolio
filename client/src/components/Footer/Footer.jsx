import linkedin from "../../asset/icons/linkedin.png";
import github from "../../asset/icons/github.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="mailto:mnebotjr@gmail.com">
        <span>mnebotjr@gmail.com</span>
      </a>
      <a href="https://github.com/mnebot86" target={'_blank'} rel="noreferrer">
        <img id="footer-icons" src={github} alt="Miguel's Github account" />
      </a>
      <a href="https://www.linkedin.com/in/miguelnebot/" target={'_blank'} rel="noreferrer">
        <img id="footer-icons" src={linkedin} alt="Miguel's Linkedin" />
      </a>
      <a href="https://docs.google.com/document/d/1yNrzNzwUCf9preQ6s3uSsZngi3RrOUnhGbmq33nrLgc/edit?usp=sharing" target={'_blank'} rel="noreferrer">
        <span>Resumé</span>
      </a>
    </footer>
  );
};

export default Footer;
