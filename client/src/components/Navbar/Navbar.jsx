import { Link } from "react-router-dom";
import {Link as scroll} from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <a href="#home"className="links grow">
        Miguel
      </a>
      <a href="#about" className="links grow">
        About
      </a>
      <a href="#projects" className="links grow">
        Projects
      </a>
      <a href="#contact" className="links grow">
        Contact
      </a>
      <Link
        to={{
          pathname:
            "https://docs.google.com/document/d/1yNrzNzwUCf9preQ6s3uSsZngi3RrOUnhGbmq33nrLgc/edit?usp=sharing",
        }}
        target="_blank"
        className="links grow"
      >
        Resumé
      </Link>
    </nav>
  );
};

export default Navbar;
