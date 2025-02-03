import { NavLink } from "react-router-dom"
import "../assets/styles/navbar.css"
const Navbar = () => {
  return (
    <div className="navs">
      <div>logo</div>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">AboutUs</NavLink>
        <NavLink to="experience">Experience</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </div>
    </div>
  );
}

export default Navbar