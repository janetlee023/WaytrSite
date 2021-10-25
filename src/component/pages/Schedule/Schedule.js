import React from "react";
// import { Link } from "react-router-dom";
import "./Schedule.css";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import Wrapper from "../../Wrapper/Wrapper";
import ScheduleInfo from "../../ScheduleInfo/ScheduleInfo"

function Schedule() {
  return (
    <div>
    <NavBar />
    <Wrapper>
      <ScheduleInfo/>
    </Wrapper>
    <Footer/>
  </div>
  );
}

export default Schedule;