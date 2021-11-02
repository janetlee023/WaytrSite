import React from "react";
import "./NavBar.css";
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-light navbar-expand-lg waytrH">
        <Link to ="/" className="navbar-brand" id="titleName">WAYTR</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse active text-white " id="navbar1">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item liH">
                <Link to = "/Home" className="nav-link atag text-white ">Home</Link>
            </li>
            <li className="nav-item liH">
                <Link to = "/Team" className="nav-link atag text-white ">Team</Link>
            </li>
            <li className="nav-item liH ">
                <Link to = "/Prices" className="nav-link atag text-white ">Prices</Link>
            </li>
            <li className="nav-item liH">
                <Link to = "/Process" className="nav-link atag text-white ">Process</Link>
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default NavBar;