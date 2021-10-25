import React from "react";
// import { Link } from "react-router-dom";
import "./RSVP.css";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import Wrapper from "../../Wrapper/Wrapper";
import RSVPInfo from "../../RSVPInfo/RSVPInfo"

function RSVP() {
  return (
    <div>
    <NavBar />
    <Wrapper>
      <RSVPInfo/>
    </Wrapper>
    <Footer/>
  </div>
  );
}

export default RSVP;