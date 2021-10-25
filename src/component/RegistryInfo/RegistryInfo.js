import React from "react";
// import { Link } from "react-router-dom";
import "./RegistryInfo.css";
import Venmo from "../../assets/Images/nadineVenmo.png";
import Barrel from "../../assets/Images/nadAndEricBarrel.jpg"
import HoneyFund from "../../assets/Images/honeyFund.png"
import PayPal from "../../assets/Images/PayPal.png"
function RegistryInfo() {
  return (
    <div>
      <div className="container divCenterR">
        <section>
          <div className="headerArea">
            <div className="headerSection">
              <div className="heading">
                CONTACTLESS.
              </div>
              <div className="heading">
                EFFICIENT
              </div>
              <div className="description">
                Waytr is an app optimizing the operations of restaurants and cafes to the benefit of both workers and users. A simple solution that can make the dining in process smoother all around. 
              </div>
            </div>
            <div className="headerSection img">
              Image Goes Here
            </div>
          </div>
        </section>
      </div>
      <div className="container divCenterR" >
        <div className="features">
          <section>
            <div className="featuresHeader">
              FEATURES
            </div>
            <div className="featureSection">
              <div className="singleFeature">
                <div className="featureName">
                  Digital Menu/Payment
                </div>
                <div className="featureInfo">
                  Reduce the risk of covid by minimizing face-to-face interactions between servers and guests through easily accessible on-demand servce and an interactive menu.
                </div>
              </div>
              <div className="singleFeature">
                <div className="featureName"> 
                  On-Demand Service
                </div>
                <div className="featureInfo">
                  Providing guests with the power to request service when they require it to keep the dining experience seamless and less pressuring. Waytr acts as a digital server covering requests.
                </div>
              </div>
              <div className="singleFeature">
                <div className="featureName">
                  Request Management
                </div>
                <div className="featureInfo">
                  Providing service on-demand is the new luxury and subsequently reduces the time wasted by servers by efficient managing diner’s needs through a click of a button. No more aimless hovering.
                </div>
              </div>              
            </div>

            <div className="row align-self-center">
              <div className="col-md-5 ">
                <a className="click" href="https://www.crateandbarrel.com/gift-registry/nadine-peake-and-eric-holmes/r6362590?fbclid=IwAR1jmmpvDRass-rq3lbaWjCnCbWaID3KsgERg3nvCK3FzsieZlzsTQ0m6Ts">
                Crate and Barrel
                </a>
                <a className="click" href="https://www.crateandbarrel.com/gift-registry/nadine-peake-and-eric-holmes/r6362590?fbclid=IwAR1jmmpvDRass-rq3lbaWjCnCbWaID3KsgERg3nvCK3FzsieZlzsTQ0m6Ts">
                  <img src = {Barrel} alt = "carteandBarrel" className ="carteandBarrel imgR"></img>
                </a>
              </div>
              <div className="col-md-2 inbetweenSpace" >
              </div>
              <div className="col-md-5 ">
              <a className="click" href="https://www.honeyfund.com/wedding/peake-holmes-11-07-2021?fbclid=IwAR1vHku0J1ahaguWxa145zFQEv2vVJMxCh_nSE0KnBe7WI86YYwKYRIwpn8">
                HoneyFund
              </a>
              <a className="click" href="https://www.honeyfund.com/wedding/peake-holmes-11-07-2021?fbclid=IwAR1vHku0J1ahaguWxa145zFQEv2vVJMxCh_nSE0KnBe7WI86YYwKYRIwpn8">
                  <img src = {HoneyFund} alt = "honeyFund" className ="honeyFund imgR"></img>
              </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="container divCenterR">
        <p className="headding"> For Electronic Gifts: </p>
        <p className="smallHeading"> Buy us drinks for our honeymoon, breakfast for our first morning as Husband and Wife and more below</p>
      </div>
      <div className="container divCenterR" >
        <div>
          <section>
            <div className="row align-self-center">
              <div className="col-md-5 ">
                <p className="venmo">
                Venmo: @Nadine-Peake
                </p>
                <img src = {Venmo} alt = "venmoCode" className ="venmoCode imgR"></img>
              </div>
              <div className="col-md-2 inbetweenSpace" >
              </div>
              <div className="col-md-5 ">
              <a className="click" href="https://www.paypal.com/paypalme/nadineholmestobe?locale.x=en_US&fbclid=IwAR0SD7jSrWqtOu9w2Ex9v904n0NqjuQAyan0Jo1Pli0DK6aVrLfxRVFW4HI">
                Paypal: Nadine-PayPal 
              </a>
              <a className="click" href="https://www.paypal.com/paypalme/nadineholmestobe?locale.x=en_US&fbclid=IwAR0SD7jSrWqtOu9w2Ex9v904n0NqjuQAyan0Jo1Pli0DK6aVrLfxRVFW4HI">
                  <img src = {PayPal} alt = "paypal" className ="paypal imgR"></img>
              </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default RegistryInfo;