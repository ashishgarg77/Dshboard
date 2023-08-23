import React from "react";

import right from "../../assets/right.png";

const RecentActivities = () => {
  return (
    <>
      <div
        style={{ minHeight: "240px" }}
        className=" col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 "
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
            <b>Recent Activites</b>
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
            >
              <p>USER-854686</p>
              <p>23-JAN-2023</p>
              <p style={{margin : "0.5rem 0"}} >
                <span
                  style={{
                    backgroundColor: "#DBF5EC",
                    borderRadius: "25px",
                    padding: "5px 15px",
                    margin: "0",
                    fontSize: "13px",
                  }}
                >
                  Amount Sent
                </span>
              </p>
            </div>
          </div>

          <div className="pill">
            <div
              style={{ width: "90%", margin: "auto" }}
              className="d-flex flex-row justify-content-between align-item-center"
            >
              <p>USER-854686</p>
              <p>23-JAN-2023</p>
              <p style={{margin : "0.5rem 0"}}>
              <span
                style={{
                  backgroundColor: "#DBF5EC",
                  borderRadius: "25px",
                  padding: "5px 15px",
                  margin: "0",
                  fontSize: "13px",
                }}
              >
                New Lead
              </span>
              </p>
            </div>
          </div>

          <div className="pill">
            <div
              style={{ width: "90%", margin: "auto" }}
              className="d-flex flex-row justify-content-between align-item-center"
            >
              <p>USER-854686</p>
              <p>23-JAN-2023</p>
              <p style={{margin : "5px 0"}}>
              <span
                style={{
                  backgroundColor: "#DBF5EC",
                  borderRadius: "25px",
                  padding: "5px 15px",
                  margin: "0",
                  fontSize: "13px",
                }}
              >
                Payment Received
              </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentActivities;
