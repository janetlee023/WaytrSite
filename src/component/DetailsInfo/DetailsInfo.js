import React from "react";
// import { Link } from "react-router-dom";
import "./DetailsInfo.css";
import GoogleMap from "../../assets/Images/googleMap.png"

function DetailsInfo() {
  return (
    <div>
      <div className="container divCenter">
        <p className="headding"> Details </p>
      </div>
      <div className="container divCenter" >
        <div>
          <section>
            <div className="row align-self-center">
              <div className="row align-self-center">
                <div className="col-md-8 map">
                  <a className="click" href="https://maps.app.goo.gl/CZpCjLrUywRFDVmw8"> <img id="imgMap"src={GoogleMap}/></a>
                </div>
              <div className="col-md-12 BodyOfTextM">
              <p>Ceremony and Reception at Hunt Valley Country Club</p>
              <p>Starting at 3:30pm</p>
              <a href="tel:+1-443-618-1543"><p className="dpeak">Denise Peake - (443) 618-1543</p></a>
              <a className="click" id="address" href="https://maps.app.goo.gl/CZpCjLrUywRFDVmw8">Address: 14101 Phoenix Rd, Phoenix, MD 21131</a>
              </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default DetailsInfo;