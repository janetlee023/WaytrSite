import React from "react";
import "./NavBar.css";
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-light navbar-expand-lg">
        <Link to ="/" className="navbar-brand" id="titleName">WAYTR</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse active" id="navbar1">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item ">
                <Link to = "/Home" className="nav-link atag">Home</Link>
            </li>
            <li className="nav-item ">
                <Link to = "/Schedule" className="nav-link atag">Schedule</Link>
            </li>
            <li className="nav-item ">
                <Link to = "/Details" className="nav-link atag">Details</Link>
            </li>
            <li className="nav-item ">
                <Link to = "/Registry" className="nav-link atag">Registry</Link>
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default NavBar;