import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

import { data02 } from "../../data/ProductWisePie";
import bluedot from "../../assets/bluedot.png";
const ProductPie = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(data02);
    console.log(data02);
  }, []);
  return (
    <>
      <div
        className=" col bg-white p-4 h-100 "
        style={{
          borderRadius: "8px",
          height: "400px",
        }}
      >
        <div className="row">
          <h4 style={{ color: "#182D64" }}>
            <b>
              Product Wise Chart <span>{`(EMI)`}</span>
            </b>
          </h4>
        </div>
        <div className="row">
          <div
            className="col-lg-4 col-xl-4"
            style={{ position: "relative", padding: "145px" }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 20,
                bottom: 0,
                top: 80,
              }}
            >
              <ResponsiveContainer height={"100%"} width={"90%"}>
                <PieChart width={200} height={200}>
                  <Pie
                    data={data02}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#82ca9d"
                    label
                    className="shadow-lg"
                  >
                    {data02.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className=" col-lg-4 col-xl-4 ">
            <div className="d-flex flex-column justify-content-around  h-100">
              
              {data &&
                data.map((idx) => {
                  <div>
                    <img src={bluedot} alt="" />
                    <span>{idx.name}</span>
                  </div>;
                })}
              </div>
          </div>
          <div className="col-lg-4 col-xl-4 ">
            <div className="d-flex flex-column justify-content-around  h-100">
              
                {data && data.map((idx) => {
                  <p>{idx.value}</p>;
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPie;
