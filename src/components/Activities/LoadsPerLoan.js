
import React from "react";

import right from "../../assets/right.png";

const RecentActivities = () => {
  return (
    <>
      <div
        style={{ minHeight: "240px" }}
        className=" col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 "
      >
        <div
          className="d-flex flex-row justify-content-between px-4 pb-2 pt-4 bg-white"
          style={{
            marginRight: "auto",
            borderTopRightRadius: "8px",
            borderTopLeftRadius: "8px",
          }}
        >
          <h5>
          <b>Leads  per Loans</b>
          </h5>
          <img src={right} alt="" height={24} width={24} />
        </div>

        <div
          className="d-flex flex-column justify-content-between align-item-center h-50 bg-white pb-4"
          style={{
            marginRight: "auto",
            borderBottomRightRadius: "8px",
            borderBottomLeftRadius: "8px",
          }}
        >
          <hr style={{ width: "90%", margin: "auto" }} />
          <div className="pill mt-1">
            <div
              style={{ width: "90%", margin: "auto" }}
              className="d-flex flex-row justify-content-between"
            ></div>
          </div>

          <div className="pill">
            <div
              style={{ width: "90%", margin: "auto" }}
              className="d-flex flex-row justify-content-between align-item-center"
            >
              <p>Loan Name</p>
              <p> 2323</p>
            </div>
          </div>
          <div className="pill">
            <div
              style={{ width: "90%", margin: "auto" }}
              className="d-flex flex-row justify-content-between align-item-center"
            >
              <p>Loan Name</p>
              <p> 3434</p>
            </div>
          </div>

          <div className="pill">
            <div
              style={{ width: "90%", margin: "auto" }}
              className="d-flex flex-row justify-content-between align-item-center"
            >
              <p>Loan Name</p>
              <p> 1212</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentActivities;
