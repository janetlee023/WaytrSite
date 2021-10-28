import React from "react";
// import { Link } from "react-router-dom";
import "./Prices.css";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import Wrapper from "../../Wrapper/Wrapper";
import PriceInfo from "../../PriceInfo/PriceInfo"

function Prices() {
  return (
    <div>
    <NavBar />
    <Wrapper>
      <PriceInfo/>
    </Wrapper>
    <Footer/>
    </div>
  );
}

export default Prices;