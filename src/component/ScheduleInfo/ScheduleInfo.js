import React from "react";
// import { Link } from "react-router-dom";
import "./ScheduleInfo.css";
import Venmo from "../../assets/Images/nadineVenmo.png";
import Barrel from "../../assets/Images/nadAndEricBarrel.jpg"
import HoneyFund from "../../assets/Images/honeyFund.png"
import PayPal from "../../assets/Images/PayPal.png"
function ScheduleInfo() {
  return (
    <div>
      <div className="container divCenterR">
        <section>
          <div className="headerArea">
            <div className="heading">
              Our mission is to help the food industry .
            </div>
            <div className="description">
              Waytr is an app optimizing the operations of restaurants and cafes to the benefit of both workers and users. A simple solution that can make the dining in process smoother all around.             </div>
          </div>
        </section>
      </div>
      <div className="container divCenterR" >
        <div className="team">
          <section>
            <div className="teamHeader">
              Meet The Team!
            </div>
            <div className="memberSection">
              <div className="member">
                <div className="name">
                  Daniel Kim
                </div>
                <div className="info">
                  CEO
                </div>
              </div>
              <div className="member">
                <div className="name"> 
                  John Kim
                </div>
                <div className="info">
                  CPO
                </div>
              </div>
              <div className="member">
                <div className="name">
                  Joy Kim
                </div>
                <div className="info">
                  CTO
                </div>
              </div>
              <div className="member">
                <div className="name">
                  Janet Lee
                </div>
                <div className="info">
                  Developer
                </div>
              </div>
              <div className="member">
                <div className="name">
                  Jacqueline Rivera
                </div>
                <div className="info">
                  Developer
                </div>
              </div>         
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ScheduleInfo;