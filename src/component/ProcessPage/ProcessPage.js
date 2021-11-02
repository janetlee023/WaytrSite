import React from "react";
// import { Link } from "react-router-dom";
import "./ProcessPage.css";
import DataFlow from "../../assets/Images/DataFlow.jpg"

function ProcessPage() {
  return (
    <div>
      <div className="container divCenterR">
        <section>
        <div className="row">
            <div className="homeArea contactArea">
              <div className="headerSectionC col-md-8">
                <p className="headingH">
                  How it works
                </p>
                <p className="descriptionP">
                  Waytr is an app optimizing the operations of restaurants and cafes to the benefit of both workers and users.
                  A simple solution that can make the dining in process smoother all around. 
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="container row divCenterPB" >
          <img src={DataFlow} className = "imageFlow"/>
        </div>
      </div>
      {/* <div className="container row divCenterR" >
        <div className="features">
          <section>
            <div className="featureSection row ">
              <div className="featuresHeader">
                FEATURES
              </div>
              <div className="col-md-4">
                <div className="singleFeature">
                  <p className="featureName">
                    Digital Menu/Payment
                  </p>
                  <p className="featureInfo">
                    Reduce the risk of covid by minimizing face-to-face interactions between servers and guests through easily accessible on-demand servce and an interactive menu.
                  </p>
                </div>
              </div>

              <div className="singleFeature col-md-4">
                  <p className="featureName"> 
                    On-Demand Service
                  </p>
                  <p className="featureInfo">
                    Providing guests with the power to request service when they require it to keep the dining experience seamless and less pressuring. Waytr acts as a digital server covering requests.
                  </p>
              </div>

              <div className="singleFeature col-md-4">
                  <p className="featureName">
                    Request Management
                  </p>
                  <p className="featureInfo">
                    Providing service on-demand is the new luxury and subsequently reduces the time wasted by servers by efficient managing diner’s needs through a click of a button. No more aimless hovering.
                  </p>
              </div>   

            </div>
          </section>
        </div>
      </div> */}
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

export default ProcessPage;