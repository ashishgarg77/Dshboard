import React from "react";

import total from "../assets/total.png";
import openLoans from "../assets/openLoans.png";

const Leads = () => {
  return (
    <>
    <hr style={{width:"100%", margin : "auto", color: '#959FBA80'}} />
      <div
        className="p-0 m-0 row grid-divider justify-content-around bg-white my-2"
        style={{ minHeight: "100px", borderRadius: "8px" }}
      >
        <div
          className="col-xs-12 col-md-6 col-xl-2"
          style={{ borderRight: "1px solid #D3D9E9" }}
        >
          <div className="row">
            <p
              style={{
                color: "#267DFF",
                paddingLeft: "15px",
                paddingTop: "10px",
              }}
            >
              <b>Total Leads</b>
            </p>
          </div>
          <div
            className="row"
            style={{ minWidth: "230px", paddingBottom: "10px" }}
          >
            <div className="col d-flex flex-column justify-content-around">
              <h4>
                <b>₹ 1233</b>
              </h4>
            </div>
            <div className="col d-flex justify-content-center ">
              <img src={total} alt="" align={"center"} />
            </div>
          </div>
        </div>

        <div
          className="col-xs-12 col-md-6 col-xl-2"
          style={{ borderRight: "1px solid #D3D9E9" }}
        >
          <div className="row">
            <p
              style={{
                color: "#267DFF",
                paddingLeft: "15px",
                paddingTop: "10px",
              }}
            >
              <b>Today's Payment</b>
            </p>
          </div>
          <div
            className="row"
            style={{ minWidth: "230px", paddingBottom: "10px" }}
          >
            <div className="col d-flex flex-column justify-content-around">
              <h4>
                <b>₹ 500</b>
              </h4>
            </div>
            <div className="col d-flex justify-content-center ">
              <img src={total} alt="" />
            </div>
          </div>
        </div>

        <div
          className="col-xs-12 col-md-6 col-xl-2"
          style={{ borderRight: "1px solid #D3D9E9" }}
        >
          <div className="row">
            <p
              style={{
                color: "#267DFF",
                paddingLeft: "15px",
                paddingTop: "10px",
              }}
            >
              <b>Last 30 days Spend</b>
            </p>
          </div>
          <div
            className="row"
            style={{ minWidth: "230px", paddingBottom: "10px" }}
          >
            <div className="col d-flex flex-column justify-content-around">
              <h4>
                <b>₹ 500</b>
              </h4>
            </div>
            <div className="col d-flex justify-content-center ">
              <img src={total} alt="" />
            </div>
          </div>
        </div>

        <div
          className="col-xs-12 col-md-6 col-xl-2"
          style={{ borderRight: "1px solid #D3D9E9" }}
        >
          <div className="row">
            <p
              style={{
                color: "#267DFF",
                paddingLeft: "15px",
                paddingTop: "10px",
              }}
            >
              <b>Open Loans</b>
            </p>
          </div>
          <div
            className="row"
            style={{ minWidth: "230px", paddingBottom: "10px" }}
          >
            <div className=" col d-flex flex-column justify-content-around">
              <h4>
                <b>₹ 500</b>
              </h4>
            </div>
            <div className="col d-flex justify-content-center ">
              <img src={openLoans} alt="" />
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-md-6 col-xl-2">
          <div className="row">
            <p
              style={{
                color: "#267DFF",
                paddingLeft: "15px",
                paddingTop: "10px",
              }}
            >
              <b>Closed Loans</b>
            </p>
          </div>
          <div
            className="row"
            style={{ minWidth: "230px", paddingBottom: "10px" }}
          >
            <div className="col d-flex flex-column justify-content-around">
              <h4>
                <b>₹ 500</b>
              </h4>
            </div>
            <div className="col d-flex justify-content-center ">
              <img src={openLoans} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leads;
