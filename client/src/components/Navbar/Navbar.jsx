import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className ="nav">
      <Link to ='/'className ="links">Miguel</Link>
      <Link to ='/about' className ="links">About</Link>
      <Link to ='/projects' className ="links">Projects</Link>
      <Link to ='/contact' className ="links">Contact</Link>
      <Link to ={{pathname: 'https://docs.google.com/document/d/1yNrzNzwUCf9preQ6s3uSsZngi3RrOUnhGbmq33nrLgc/edit?usp=sharing'}} target="_blank" className ="links">Resumé</Link>
    </nav>
  );
};

export default Navbar;
