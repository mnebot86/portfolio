import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className ="nav">
      <Link to ='/'className ="links">Miguel</Link>
      <Link to ='/about' className ="links">About</Link>
      <Link to ='/projects' className ="links">Projects</Link>
      <Link to ='/contact' className ="links">Contact</Link>
      <Link to ='/resumé' className ="links">Resumé</Link>
    </nav>
  );
};

export default Navbar;
