import React from "react";
// import { Link } from "react-router-dom";
import "./Process.css";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import Wrapper from "../../Wrapper/Wrapper";
import ProcessPage from "../../ProcessPage/ProcessPage.js";

function Process() {
  return (
    <div>
    <div className="waytrTop">
    <NavBar />
    <Wrapper>
      <ProcessPage/>
    </Wrapper>
    </div>
    <Footer className="footers"/>
    </div>
  );
}

export default Process;