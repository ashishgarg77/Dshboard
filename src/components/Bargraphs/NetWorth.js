import React from "react";
import {
  ResponsiveContainer,
  YAxis,
  XAxis,
  Tooltip,
  Line,
  LineChart,
  BarChart,
  CartesianGrid,
} from "recharts";

import growth from "../../assets/Growth.png";
import { data01 } from "../../data/LoanCountBar";
const NetWorth = () => {
  return (
    <>
      <div
        className="col-lg-6 col-xl-6 bg-white p-4"
        style={{ position: "relative", paddingBottom: "250px" , borderRadius: "8px" , height: "400px" }}
      >
        <div className="d-flex flex-column justify-content-around">
          <div  className="d-flex flex-row align-item-center">
            <img src={growth} alt="" width={20} height={20} />
            <h5
              style={{ color: "#182D64", marginLeft: "10px"}}
            >
              <b> Net Worth Chart</b>
            </h5>
          </div>

          <div
            style={{
              position: "absolute",
              left: 20,
              right: 40,
              bottom: 0,
              top: 80,
            }}
          >
            <ResponsiveContainer>
              <LineChart
                width={730}
                height={400}
                data={data01}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis dataKey={"Approved"} />
                <Tooltip />
                <Line type="monotone" dataKey="Approved" stroke="#267DFF" />
                <Line type="monotone" dataKey="Rejected" stroke="#FF6A92" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default NetWorth;
