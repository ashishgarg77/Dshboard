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
import approved from '../../assets/approved.png'
import rejected from '../../assets/rejected.png'
const TotalLoans = () => {
  return (
    <>
      <div
        className="col bg-white p-4 "
        style={{ position: "relative", paddingBottom: "250px" , borderRadius: "8px" , height: "400px" }}
      >
        <div className="d-flex flex-column justify-content-around">
          <div className="d-flex flex-row justify-content-between">

            <div className="d-flex align-item-center">
            <img src={growth} alt="" width={20} height={20} />
            <h5 style={{ color: "#182D64", marginLeft: "10px" }}>
              <b>Total Loans</b>
            </h5>
            </div>

            <div className="d-flex justify-content-around p-1 " >
                <div className="d-flex d-inline-flex ">
                    <img src={rejected} alt="" width={18} height={18} style={{marginTop : "4px"}} />
                    <p style={{color : "#959FBA" , marginLeft:  "5px"}}> <b>Rejected</b></p>
                </div>
                <div className="d-flex d-inline-flex  ml-2">
                    <img src={approved} alt=""  width={18} height={18} style={{marginTop : "4px"}} />
                    <p style={{color : "#959FBA", marginLeft:  "5px"}}> <b>Approved</b></p>
                </div>
            </div>
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
            <ResponsiveContainer >
              <BarChart width={730} height={320} data={data01}>
                <CartesianGrid strokeDasharray="3 4" />
                <XAxis dataKey="month" interval={"preserveStartEnd"} />
                <YAxis dataKey="Approved" interval={"preserveStartEnd"} />
                <Tooltip />
                <Bar dataKey="Approved" fill="#267DFF" radius={4} barSize={20} />
                <Bar dataKey="Rejected" fill="#ADCEFF" radius={4} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalLoans;
