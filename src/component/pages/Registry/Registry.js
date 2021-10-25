import React from "react";
// import { Link } from "react-router-dom";
import "./Registry.css";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import Wrapper from "../../Wrapper/Wrapper";
import RegistryInfo from "../../RegistryInfo/RegistryInfo";

function Registry() {
  return (
    <div>
    <NavBar />
    <Wrapper>
      <RegistryInfo/>
    </Wrapper>
    <Footer/>
    </div>
  );
}

export default Registry;