import React from "react";
// import { Link } from "react-router-dom";
import "./RSVPInfo.css";
import NadinePic from "../../assets/Images/Cover-Page.png"

function RSVPInfo() {
  return (
    <div>
      <div className="container divCenter" >
        <div className="row align-self-center">
          <div className="col-md-12" >
            <div className="col-md-12" >
              <p className="headdingR" id="welTitle">Welcome!</p>
              <p className="headdingR" id="thanTitle">Thank you for being part of our special day</p>
              <img src={NadinePic} alt = "nadine and eric" className = "coverImage"></img>
          </div>
            <div className="row align-self-center">
                <div className="col-md-12">
                    <p className="headding" id="rvIn">RSVP Info</p>
                </div>
                <div className="col-md-12 BodyOfTextR">
                    <p>
                      Please click on the following link to RSVP via google:
                    </p>
                    <a className="clickRsvp" href="https://forms.gle/zfWr17GTrhabgiEM7">
                      Click me to RSVP ♥
                    </a>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default RSVPInfo;