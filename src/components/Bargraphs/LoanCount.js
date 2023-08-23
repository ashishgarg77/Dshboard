import React from "react";
import {
  ResponsiveContainer,
  YAxis,
  XAxis,
  Tooltip,
  Legend,
  Bar,
  BarChart,
  CartesianGrid,
} from "recharts";

import growth from "../../assets/Growth.png";
import { data01 } from "../../data/LoanCountBar";
const LoanCount = () => {
  return (
    <>
      <div
        className="col-lg-6 col-xl-6 bg-white p-4 "
        style={{
          position: "relative",
          paddingBottom: "250px",
          borderRadius: "8px",
          height: "400px",
        }}
      >
        <div className="d-flex flex-column justify-content-arount">
          <div className="d-flex flex-row align-item-center">
            <img src={growth} alt="" width={20} height={20} />
            <h5
              style={{ color: "#182D64", marginLeft: "10px" }}
            >
              <b> Loan Count Trend</b>
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
              <BarChart width={730} height={320} data={data01}>
                <CartesianGrid  strokeDasharray="4 3" stroke="#DFE2E6" />
                <XAxis dataKey="month" interval={"preserveStartEnd"} />
                <YAxis type="number" dataKey="Approved" interval={"preserveStartEnd"} />
                <Tooltip />
                <Bar dataKey="Approved" fill="#267DFF" radius={4} barSize={20}/>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoanCount;
