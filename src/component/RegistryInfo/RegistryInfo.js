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
        <div className="row">
            <div className="homeArea">
              <div className="headerSection col-md-6">
                <p className="heading">
                  CONTACTLESS.
                </p>
                <p className="heading">
                  EFFICIENT
                </p>
                <div className="description">
                  Waytr is an app optimizing the operations of restaurants and cafes to the benefit of both workers and users. A simple solution that can make the dining in process smoother all around. 
                </div>
              </div>
              <div className="headerSection col-md-6 img">
                Image Goes Here
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="container row divCenterR" >
        <div className="features">
          <section>
            <div className="featuresHeader row">
              FEATURES
            </div>
            <div className="featureSection row">
              <div className="singleFeature col-md-4">
                  <div className="featureName">
                    Digital Menu/Payment
                  </div>
                  <div className="featureInfo">
                    Reduce the risk of covid by minimizing face-to-face interactions between servers and guests through easily accessible on-demand servce and an interactive menu.
                  </div>
              </div>

              <div className="singleFeature col-md-4">
                  <div className="featureName"> 
                    On-Demand Service
                  </div>
                  <div className="featureInfo">
                    Providing guests with the power to request service when they require it to keep the dining experience seamless and less pressuring. Waytr acts as a digital server covering requests.
                  </div>
              </div>

              <div className="singleFeature col-md-4">
                  <div className="featureName">
                    Request Management
                  </div>
                  <div className="featureInfo">
                    Providing service on-demand is the new luxury and subsequently reduces the time wasted by servers by efficient managing diner’s needs through a click of a button. No more aimless hovering.
                  </div>
              </div>   

            </div>
          </section>
        </div>
      </div>
      {/* <div className="container" >
        <div>
          <section>
            <div>
              <div>
                WAYTR
              </div>
              <div>
                123 Example St, New York, 
                <br/>
                NY 12345-6789
                <br/>
                hello@example.com
                <br/>
                (123)-456-7890
              </div>
            </div>
          </section>
        </div>
      </div> */}
    </div>
  );
}

export default RegistryInfo;