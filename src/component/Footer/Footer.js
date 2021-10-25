import React from "react";
// import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
        {/* <div className="container">
            <div className="row">
                <div className="col-lg-12 justify-content-center">
                Made by Jacqueline Rivera
                </div>
            </div>
        </div> */}
        <div className="container" >
          <div>
            <section>
              <div>
                <div className="title">
                  WAYTR
                </div>
                <div className="info">
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
        </div>
    </footer>
  );
}

export default Footer;