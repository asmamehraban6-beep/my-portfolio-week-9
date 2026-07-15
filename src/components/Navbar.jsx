import { NavLink } from "react-router-dom";
import "./Navbar.css";


function Navbar() {

  return (

    <nav className="navbar">


      <h2 className="logo">
        AM
      </h2>



      <ul className="nav-links">


        <li>

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Home
          </NavLink>

        </li>




        <li>

          <a href="/#about">
            About
          </a>

        </li>




        <li>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Projects
          </NavLink>

        </li>




        <li>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Contact
          </NavLink>

        </li>



      </ul>



    </nav>

  );

}


export default Navbar;