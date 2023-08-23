import React from "react";

import cal from "../assets/calDark.png";
import plus from "../assets/plusCircle.png";
const Date = () => {
  return (
    <>
      <div
        className="rounded-lg pt-5 d-flex flex-column justify-content-between"
        style={{ minHeight: "270px" }}
      >
        <h4>
          <b>Lenders Dashboard</b>
        </h4>

        <h4>
          <img src={cal} alt="" width={30} />{" "}
          <span className="pl-4 mt-2"> Date</span>
        </h4>

        <form class="row gap-2">
          <label for="date" class="col-1 col-form-label" style={{width : "fit-content"}}>
            <b>From</b>
          </label>
          <div class="col-3">
            <div class="input-group date" id="datepicker">
              <input
                type="text"
                class="form-control"
                id="date"
                placeholder="DD/MM/YY"
                style={{ border: "none" }}
              />
              <span class="input-group-append">
                <span class="input-group-text bg-white d-block "style={{ border: "none" }}>
                  <img src={cal} alt="" />
                </span>
              </span>
            </div>
          </div>

          <label for="date" class="col-1 col-form-label" style={{width : "fit-content"}}>
            <b> - to</b>
          </label>
          <div class="col-3">
            <div class="input-group date" id="datepicker">
              <input
                type="text"
                class="form-control"
                id="date"
                placeholder="DD/MM/YY"
                style={{ border: "none" }}
              />
              <span class="input-group-append">
                <span class="input-group-text bg-white d-block" style={{ border: "none" }}>
                  <img src={cal} alt="" />
                </span>
              </span>
            </div>
          </div>
          <div className="col-xxl-2 col-lg-2 col-md-5 col-sm-5 col-xs-6 col-xl-2 ">
            <button
              className="btn btn primary"
              style={{ color: "#FF5C5D", borderColor: "#FF5C5D", backgroundColor: "white"  }}
            >
              <b>Apply Now</b>
            </button>
          </div>
          <div className="col-xxl-2 col-lg-2 col-md-5 col-sm-5 col-xs-6 col-xl-2 ">
            <button
              className="btn btn primary"
              variant="light"
              style={{
                color: "white",
                backgroundColor: "#FF5C5D",
                borderColor: "#FF5C5D",
              }}
            >
              <img src={plus} alt="" />
              <b>Add Lender</b>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Date;
