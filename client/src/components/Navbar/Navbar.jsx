import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className ="nav">
      <Link className ="links">Miguel</Link>
      <Link className ="links">About</Link>
      <Link className ="links">Projects</Link>
      <Link className ="links">Contact</Link>
      <Link className ="links">Resumé</Link>
    </nav>
  );
};

export default Navbar;
