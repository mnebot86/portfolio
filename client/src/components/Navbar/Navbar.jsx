import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav id="home">
      <div
        className={isOpen ? "hamburger change" : "hamburger"}
        onClick={toggle}
      >
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </div>
      <div className={isOpen ? "nav nav-open" : "nav"}>
        <a href="#about" className="links grow" onClick={toggle}>
          About
        </a>
        <a href="#projects" className="links grow" onClick={toggle}>
          Projects
        </a>
        <a href="#contact" className="links grow" onClick={toggle}>
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
      </div>
    </nav>
  );
};

export default Navbar;
