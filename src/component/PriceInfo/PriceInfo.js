import React from "react";
// import { Link } from "react-router-dom";
import "./PriceInfo.css";

function PriceInfo() {
  return (
    <div>
      <div className="container divCenterR">
        <section>
          <div>
            <div>
              <div className="heading">
                Pricing Tiers
              </div>
            </div>
            <div className="pricingTables row">
              <table class="table table-bordered tier col-md-6">
                <thead>
                  <tr>
                    <th scope="col" className="tierType">Basic</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row">Up to 10 Tables</td>
                  </tr>
                  <tr>
                    <td scope="row">Basic UI</td> 
                  </tr>
                  <tr>
                    <td scope="row">Up to 10 QR Codes</td>
                  </tr>
                  <tr>
                    <td scope="row">Compatible with Existing POS*</td>
                  </tr>
                </tbody>
              </table>

              <table class="table table-bordered tier col-md-6">
                <thead>
                  <tr>
                    <th scope="col" className="tierType">Premium</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                      <td scope="row">10+ Tables</td>
                    </tr>
                    <tr>
                      <td scope="row">Customizable Designs and Requests</td> 
                    </tr>
                    <tr>
                      <td scope="row">QR Code + NFC </td>
                    </tr>
                    <tr>
                      <td scope="row">Compatible with Existing POS*</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <div className="footnote">
              *We are working to be compatible with existing POS like Toast, Square, and Clover
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default PriceInfo;