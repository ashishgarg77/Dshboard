import React from "react";
import { PieChart, Pie, Cell } from "recharts";

import { data01, data02 } from "../data/EmiPieData";
import bluedot from "../assets/bluedot.png";
import yellowdot from "../assets/yellowdot.png";
const Emi = () => {

  return (
    <>
      <div className="col">
        <div className=" d-flex flex-column p-4">
          <h4 className="text-center" style={{ color: "#182D64" }}>
            <b>
              Equated Monthly Installments <span>{`(EMI)`}</span>
            </b>
          </h4>

          <div className="row">
            <div className="col-xl-6" >
              <PieChart width={300} height={250} className="m-auto">
                <Pie
                  data={data02}
                  dataKey="value"
                  nameKey="emi"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#82ca9d"
                  label
                  className="shadow-lg"
                >
                  {data02.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color}  />
                  ))}
                </Pie>
              </PieChart>
            </div>
            <div className="col-xl-6 p-5">
              <div className="d-flex flex-column justify-content-around  h-100">
                <div className="d-flex flex-row justify-content-around"
                >
                  <img src={bluedot} alt="" />
                  <span>
                    <b>{data02[0].value}</b>
                  </span>
                </div>
                <div
                  className="d-flex flex-row justify-content-around"
                >
                  <img src={yellowdot} alt="" />
                  <span>
                    <b>{data02[1].value}</b>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="d-flex flex-column justify-content-around h-100 ">
              <h4 style={{ color: "#182D64", textAlign: "center" }}>
                Your Monthly Payment
              </h4>
              <h4 className="text-center">
                <b>₹ 84,500</b>
              </h4>

              <div
                className="d-flex flex-row justify-content-center m-4"
              >
                <button
                className="btn btn-light"
                  style={{
                    color: "white",
                    width: "fit-content",
                    background:
                      "linear-gradient(118.49deg, #FF6A92 16.02%, #FF5C5D 90.75%)",
                    padding: "10px",
                    boxShadow: "6px 6px 10px rgba(0, 0, 0, 0.08)",
                    borderRadius: "12px",
                  }}
                >
                  <b>Apply Now</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Emi;
