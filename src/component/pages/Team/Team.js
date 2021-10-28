import React from "react";
// import { Link } from "react-router-dom";
import "./Team.css";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import Wrapper from "../../Wrapper/Wrapper";
import TeamInfo from "../../TeamInfo/TeamInfo"

function Team() {
  return (
    <div>
    <NavBar />
    <Wrapper>
      <TeamInfo/>
    </Wrapper>
    <Footer/>
  </div>
  );
}

export default Team;