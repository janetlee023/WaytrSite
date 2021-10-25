import React from "react";
// import { Link } from "react-router-dom";
import "./Details.css";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import Wrapper from "../../Wrapper/Wrapper";
import DetailsInfo from "../../DetailsInfo/DetailsInfo"

function Details() {
  return (
    <div>
    <NavBar />
    <Wrapper>
      <DetailsInfo/>
    </Wrapper>
    <Footer/>
    </div>
  );
}

export default Details;