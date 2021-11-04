import React from "react";
// import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="foot" >
        <div className="container" >
          <div>
            <section>
              <div>
                <div className="title">
                  WAYTR
                </div>
                <div className="info">
                  <p className="lineItem"> 123 Example St, New York, </p> 
                  <p className="lineItem"> NY 12345-6789 </p>
                  <p className="lineItem">hello@example.com</p>
                  <p className="lineItem">(123)-456-7890</p>
                </div>
              </div>
            </section>
          </div>
        </div>
    </footer>
  );
}

export default Footer;