import React from "react";

import {
  ResponsiveContainer,
  YAxis,
  XAxis,
  CartesianGrid,
  AreaChart,
  Area,
  Bar,
  BarChart,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";
import { Tooltip } from "recharts";

import { Leads } from "./Leads";
import { Opportunities } from "./Opportunities";
import { Totalloan } from "./totalloan";
import { Productwise } from "./Productwise";
import BasicSelect from "../components/ManagerFilter";

import Filter from "./image/filter.png";
import Chapter from "./image/chapter.png";
import Whitedown from "./image/whitedown.png";
import Reddown from "./image/reddown.png";
import Dot from "./image/4dot.png";
import Photo from "./image/photo.png";
import Edit from "./image/edit.png";
import Dot3 from "./image/3dots.png";
import ArrowUp from "./image/ArrowUp.png";
import DownRed from "./image/DownRed.png";

const Dashboard4 = () => {
  return (
    <>
      <div>
        <div style={{ width: "90%", margin: "auto" }}>
          <div className="pt-5" style={{ minHeight: "230px" }}>
            <h5>
              <b>Manager Dashboard</b>
            </h5>
            <h2 className="mt-5">
              <b>Welcome Aniket,</b>
            </h2>
            <div
              className="mt-5 d-flex d-inline-flex"
              style={{ color: "#182D64" }}
            >
              <img src={Filter} alt="" width={20} height={25} />{" "}
              <h5 className="ml-2">Filter</h5>
            </div>
            <form class="row mt-3">
              <div class="col-2">
                <div class="input-group date position-relative" id="datepicker">
                  <div
                    style={{
                      position: "absolute",
                      left: "10px",
                      top: "5px",
                      zIndex: "1",
                    }}
                  >
                    <img src={Chapter} width={20} height={20} alt="" />
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="date"
                    placeholder="Chapter"
                    style={{ border: "none", paddingLeft: "40px" }}
                  />
                  <span class="input-group-append">
                    <span
                      class="input-group-text bg-white d-block "
                      style={{ border: "none" }}
                    >
                      <img src={Reddown} alt="" />
                    </span>
                  </span>
                </div>
              </div>

              <div
                class="col-1  d-flex justify-content-center align-items-center"
                style={{ width: "fit-content" }}
              >
                <img src={Dot} alt="" height={16} width={15} />
              </div>
              <div class="col-3">
                <div class="input-group date position-relative" id="datepicker">
                  <div
                    style={{
                      position: "absolute",
                      left: "10px",
                      top: "5px",
                      zIndex: "1",
                    }}
                  >
                    <img src={Chapter} width={20} height={20} alt="" />
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="date"
                    placeholder="Select Chapter Name"
                    style={{ border: "none", paddingLeft: "40px" }}
                  />
                  <span class="input-group-append">
                    <span
                      class="input-group-text bg-white d-block "
                      style={{ border: "none" }}
                    >
                      <img src={Reddown} alt="" />
                    </span>
                  </span>
                </div>
              </div>
              <div className=" col-lg-2 col-md-5 col-sm-5 col-xs-6 col-xl-2 ">
                <button
                  className="btn btn primary"
                  style={{
                    color: "#FF5C5D",
                    borderColor: "#FF5C5D",
                    backgroundColor: "white",
                  }}
                >
                  <span>Apply Filter</span>
                </button>
              </div>
              <div className=" col-lg-4 col-md-5 col-sm-5 col-xs-6 col-xl-4 ">
                <button
                  className="btn btn primary"
                  variant="light"
                  style={{
                    color: "white",
                    background:
                      "linear-gradient(270deg, #FF5C5D 0%, #FF6A92 100%)",
                    float: "right",
                  }}
                >
                  <span>Add </span>
                  <img src={Whitedown} alt="" width={18} height={18} />
                </button>
              </div>
            </form>
          </div>
          <hr />

          <div
            className="bg-white mt-5 py-4 px-5"
            style={{ minHeight: "640px", borderRadius: "16px" }}
          >
            <h5>
              <b>Manager Information</b>
            </h5>
            <div
              className="d-flex justify-content-between mt-3 p-4"
              style={{
                backgroundColor: "#E9ECF5",
                height: "150px",
                borderRadius: "12px",
              }}
            >
              <div className="row">
                <img src={Photo} alt="" width={100} height={100} />
                <div>
                  <h5 className="ml-4 mt-3" style={{ color: "#4E5C7F" }}>
                    Manager Name
                  </h5>
                  <h3 className="ml-4">
                    <b>Aniket Dagar</b>
                  </h3>
                </div>
              </div>
              <div className="mt-3 mr-3">
                <img src={Edit} alt="" />
              </div>
            </div>

            <div className="row m-0">
              <div
                className="col-xs-12 col-sm-12 col-md-6 mt-3 p-0"
                style={{
                  backgroundColor: "#E9ECF5",
                  hight: "500px",
                  width: "500px",
                  borderRadius: "12px",
                }}
              >
                <div>
                  <p
                    className="p-5"
                    style={{ fontSize: "18px", color: "#4E5C7F" }}
                  >
                    Chapters Fall Under Manager
                  </p>
                </div>
                <div className="px-5 d-flex flex-column justify-content-between">
                  <p style={{ fontSize: "20px" }}>
                    Chapter 1 address, street, Pincode
                  </p>
                  <p style={{ fontSize: "20px" }}>
                    Chapter 1 address, street, Pincode
                  </p>
                  <p style={{ fontSize: "20px" }}>
                    Chapter 1 address, street, Pincode
                  </p>
                  <p style={{ fontSize: "20px" }}>
                    Chapter 1 address, street, Pincode
                  </p>
                  <p style={{ fontSize: "20px" }}>
                    Chapter 1 address, street, Pincode
                  </p>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 p-4 ">
                <div
                  className="bg-white p-4 shadow-sm"
                  style={{
                    borderRadius: "16px",
                    minWidth: "270px",
                    width: "100%",
                    minHeight: "390px",
                    margin: "auto",
                    position: "relative",
                  }}
                >
                  <div className="d-flex justify-content-between">
                    <h6>
                      <b>Review of Total Leads</b>
                    </h6>
                    <img src={Dot3} alt="Dot" height={20} />
                  </div>

                  <div className="d-flex flex-column justify-content-around review1">
                    <span style={{ fontSize: "20px" }}>
                      <b>$20,456</b>
                    </span>
                    <span
                      style={{
                        color: "#4B5563",
                        width: "82px",
                        textAlign: "center",
                        fontSize: "12px",
                      }}
                    >
                      Total Leads
                    </span>
                  </div>

                  <PieChart width={200} height={200} className="m-auto">
                    <Pie
                      data={Leads}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#82ca9d"
                      className="shadow-lg"
                    >
                      {Leads.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                  <hr />
                  <div className="h-100 d-flex flex-column justify-content-around">
                    <div className="d-flex flex-row justify-content-between">
                      <div className="d-flex flex-row">
                        <div
                          style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "8px",
                            backgroundColor: "#FFB828",
                            margiTop: "10px",
                            marginRight: "20px",
                          }}
                        ></div>
                        <p style={{ color: "#4B5563" }}>Chapter</p>
                      </div>
                      <div className="d-flex flex-row">
                        <img
                          src={ArrowUp}
                          alt=""
                          width={"10px"}
                          height={"18px"}
                          style={{ marginTop: "5px", marginRight: "20px" }}
                        />
                        <p style={{ color: "#4B5563" }}>80%</p>
                      </div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <div className="d-flex flex-row">
                        <div
                          style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "8px",
                            backgroundColor: "#FFCF70",
                            margiTop: "10px",
                            marginRight: "20px",
                          }}
                        ></div>
                        <p style={{ color: "#4B5563" }}>RM</p>
                      </div>
                      <div className="d-flex flex-row">
                        <img
                          src={ArrowUp}
                          alt=""
                          width={"10px"}
                          height={"18px"}
                          style={{ marginTop: "5px", marginRight: "20px" }}
                        />
                        <p style={{ color: "#4B5563" }}>25%</p>
                      </div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <div className="d-flex flex-row">
                        <div
                          style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "8px",
                            backgroundColor: "#FFE4AD",
                            margiTop: "10px",
                            marginRight: "20px",
                          }}
                        ></div>
                        <p style={{ color: "#4B5563" }}>Community Member</p>
                      </div>
                      <div className="d-flex flex-row">
                        <img
                          src={ArrowUp}
                          alt=""
                          width={"10px"}
                          height={"18px"}
                          style={{ marginTop: "5px", marginRight: "20px" }}
                        />
                        <p style={{ color: "#4B5563" }}>37%</p>
                      </div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <div className="d-flex flex-row">
                        <div
                          style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "8px",
                            backgroundColor: "#FFF5E1",
                            margiTop: "10px",
                            marginRight: "20px",
                          }}
                        ></div>
                        <p style={{ color: "#4B5563" }}>B2C</p>
                      </div>
                      <div className="d-flex flex-row">
                        <img
                          src={DownRed}
                          alt=""
                          width={"10px"}
                          height={"18px"}
                          style={{ marginTop: "5px", marginRight: "20px" }}
                        />
                        <p style={{ color: "#4B5563" }}>20%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 p-4 ">
                <div className="bg-white p-4 shadow-sm" 
                style={{
                    borderRadius: "16px",
                    minWidth: "270px",
                    width: "100%",
                    minHeight: "390px",
                    margin: "auto",
                    position: "relative",
                  }}>
                  <div className="d-flex justify-content-between">
                    <h6>
                      <b>Review of Total Opportunities</b>
                    </h6>
                    <img src={Dot3} alt="Dot3" height={20} />
                  </div>

                  <div className="d-flex flex-column justify-content-around " style={{position: "absolute", top: "25%", left: "42%"}}>
                    <span style={{ fontSize: "20px" }}>
                      <b>$20,456</b>
                    </span>
                    <span
                      style={{
                        color: "#4B5563",
                        width: "82px",
                        textAlign: "center",
                        fontSize: "12px",
                      }}
                    >
                      Total Opportunities
                    </span>
                  </div>

                  <PieChart width={200} height={200} className="m-auto">
                    <Pie
                      data={Opportunities}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#82ca9d"
                      className="shadow-lg"
                    >
                      {Opportunities.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                  <hr />
                  <div className="h-100 d-flex flex-column justify-content-around">
                    <div className="d-flex flex-row justify-content-between">
                      <div className="d-flex flex-row">
                        <div style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "8px",
                            backgroundColor: "#54CBA1",
                            margiTop: "10px",
                            marginRight: "20px",
                          }}></div>
                        <p style={{ color: "#4B5563" }}>Chapter</p>
                      </div>
                      <div className="d-flex flex-row">
                        <img
                          src={ArrowUp}
                          alt=""
                          width={"10px"}
                          height={"18px"}
                          style={{ marginTop: "5px", marginRight: "20px" }}
                        />
                        <p style={{ color: "#4B5563" }}>80%</p>
                      </div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <div className="d-flex flex-row">
                      <div style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "8px",
                            backgroundColor: "#82D9BA",
                            margiTop: "10px",
                            marginRight: "20px",
                          }}></div>
                        <p style={{ color: "#4B5563" }}>RM</p>
                      </div>
                      <div className="d-flex flex-row">
                        <img
                          src={ArrowUp}
                          alt=""
                          width={"10px"}
                          height={"18px"}
                          style={{ marginTop: "5px", marginRight: "20px" }}
                        />
                        <p style={{ color: "#4B5563" }}>25%</p>
                      </div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <div className="d-flex flex-row">
                      <div style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "8px",
                            backgroundColor: "#B1E7D4",
                            margiTop: "10px",
                            marginRight: "20px",
                          }}></div>
                        <p style={{ color: "#4B5563" }}>Community Member</p>
                      </div>
                      <div className="d-flex flex-row">
                        <img
                          src={ArrowUp}
                          alt=""
                          width={"10px"}
                          height={"18px"}
                          style={{ marginTop: "5px", marginRight: "20px" }}
                        />
                        <p style={{ color: "#4B5563" }}>37%</p>
                      </div>
                    </div>
                    <div className="d-flex flex-row justify-content-between">
                      <div className="d-flex flex-row">
                      <div style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "8px",
                            backgroundColor: "#DBF5EC",
                            margiTop: "10px",
                            marginRight: "20px",
                          }}></div>
                        <p style={{ color: "#4B5563" }}>B2C</p>
                      </div>
                      <div className="d-flex flex-row">
                        <img
                          src={DownRed}
                          alt=""
                          width={"10px"}
                          height={"18px"}
                          style={{ marginTop: "5px", marginRight: "20px" }}
                        />
                        <p style={{ color: "#4B5563" }}>20%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row my-2">
            <div className="col-lg-12 col-xl-6 p-3" style={{ width: "591px" }}>
              <div
                className="bg-white p-4 shadow-sm"
                style={{
                  position: "relative",
                  borderRadius: "16px",
                  height: "450px",
                }}
              >
                <div className="d-flex flex-column justify-content-around">
                  <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex align-item-center">
                      <h5
                        className="card-heading"
                        style={{ color: "#182D64", marginLeft: "10px" }}
                      >
                        <b>Total Loan Amount</b>
                      </h5>
                    </div>

                    {/* <CustomizedSwitches left="Count" right="Amount" /> */}

                    <BasicSelect placeholder="Select Manager" />
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      left: "20px",
                      right: "40px",
                      bottom: "0px",
                      top: "80px",
                    }}
                  >
                    <ResponsiveContainer height={"90%"}>
                      <LineChart data={Totalloan} width={730}>
                        <CartesianGrid vertical={false} strokeDasharray="8 3" />
                        <XAxis
                          dataKey="month"
                          axisLine={false}
                          tickLine={false}
                          interval={"preserveStartEnd"}
                        />
                        <YAxis
                          dataKey="Approved"
                          axisLine={false}
                          tickLine={false}
                        ></YAxis>
                        <Tooltip
                          // content={<CustomTooltip />}
                          cursor={{ fill: "transparent" }}
                        />
                        <Line
                          type={"linear"}
                          dataKey="Approved"
                          stroke="#00C287"
                          strokeWidth={2}
                          activeDot={{ r: 1 }}
                          dot={false}
                        />
                        <Line
                          dataKey="Rejected"
                          stroke="#FF5C5D"
                          strokeWidth={2}
                          activeDot={{ r: 1 }}
                          dot={false}
                        />
                        <Line
                          dataKey="Total"
                          stroke="#182D64"
                          strokeWidth={2}
                          activeDot={{ r: 1 }}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div
                    className="d-flex flex-row justify-content-around p-1 position-absolute"
                    style={{
                      background: "#E9ECF58C",
                      borderRadius: "8px",
                      bottom: "8px",
                      left: "10%",
                      right: "10%",
                      height: "30px",
                    }}
                  >
                    <div className=" d-inline-flex" style={{ width: "150px" }}>
                      <div
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "5px",
                          backgroundColor: "black",
                          marginTop: "5px",
                          marginRight: "10px",
                        }}
                      ></div>
                      <p style={{ fontSize: "11px" }}>Total Loan Amount</p>
                    </div>
                    <div className=" d-inline-flex" style={{ width: "150px" }}>
                      <div
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "5px",
                          backgroundColor: "#00C287",
                          marginTop: "5px",
                          marginRight: "10px",
                        }}
                      ></div>
                      <p style={{ fontSize: "11px" }}>Approved Loan Amount</p>
                    </div>
                    <div className=" d-inline-flex" style={{ width: "150px" }}>
                      <div
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "5px",
                          backgroundColor: "#FF5C5D",
                          marginTop: "5px",
                          marginRight: "10px",
                        }}
                      ></div>
                      <p style={{ fontSize: "11px" }}>Rejected Loan Amount</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-xl-6 p-3">
              <div
                className="bg-white p-4 "
                style={{
                  paddingBottom: "250px",
                  borderRadius: "16px",
                  height: "450px",
                }}
              >
                <div className="d-flex flex-column justify-content-around">
                  <div className="d-flex flex-row justify-content-between">
                    <div className="d-flex align-item-center">
                      <h5 className="card-heading" style={{ height: "60px" }}>
                        <b>Product Wise Lead Count</b>
                      </h5>
                    </div>
                    <div
                      className="d-flex flex-column justify-content-center"
                      style={{ height: "60px" }}
                    >
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "#9291A5",
                          margin: "0px",
                        }}
                      >
                        {" "}
                        This week
                      </p>
                      <p style={{ fontSize: "24px", fontWeight: "700" }}>
                        {" "}
                        229K
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className=" row " style={{ height: "300px" }}>
                    <div className="col-6" style={{ position: "relative" }}>
                      <div
                        style={{
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          left: "0",
                          top: "0",
                        }}
                      >
                        <ResponsiveContainer height={"100%"}>
                          <PieChart width={730} height={250}>
                            {Productwise.map((entry, index) => (
                              <Pie
                                dataKey="value"
                                data={Productwise}
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={100}
                                fill={entry.Color}
                              />
                            ))}
                            {/* <Tooltip
                          content={<CustomTooltip />}
                          cursor={{ fill: "transparent" }}
                          /> */}
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    <div className="col-6 py-4">
                      <div className="d-flex flex-column justify-content-around h-100">
                        <div className="d-flex flex-row justify-content-between">
                          <div className="d-inline-flex">
                            <div
                              style={{
                                width: "12px",
                                height: "12px",
                                borderRadius: "6px",
                                backgroundColor: "#4A3AFF",
                                marginTop: "6px",
                              }}
                            ></div>
                            <span className="ml-4">Product A</span>
                          </div>
                          <div
                            style={{
                              color: "#182D64",
                              fontSize: "14px",
                              fontWeight: "400",
                            }}
                          >
                            41K
                          </div>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                          <div className="d-inline-flex">
                            <div
                              style={{
                                width: "12px",
                                height: "12px",
                                borderRadius: "6px",
                                backgroundColor: "#2D5BFF",
                                marginTop: "6px",
                              }}
                            ></div>
                            <span className="ml-4">Product B</span>
                          </div>
                          <div
                            style={{
                              color: "#182D64",
                              fontSize: "14px",
                              fontWeight: "400",
                            }}
                          >
                            41K
                          </div>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                          <div className="d-inline-flex">
                            <div
                              style={{
                                width: "12px",
                                height: "12px",
                                borderRadius: "6px",
                                backgroundColor: "#93AAFD",
                                marginTop: "6px",
                              }}
                            ></div>
                            <span className="ml-4">Product C</span>
                          </div>
                          <div
                            style={{
                              color: "#182D64",
                              fontSize: "14px",
                              fontWeight: "400",
                            }}
                          >
                            41K
                          </div>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                          <div className="d-inline-flex">
                            <div
                              style={{
                                width: "12px",
                                height: "12px",
                                borderRadius: "6px",
                                backgroundColor: "#C6D2FD",
                                marginTop: "6px",
                              }}
                            ></div>
                            <span className="ml-4">Product D</span>
                          </div>
                          <div
                            style={{
                              color: "#182D64",
                              fontSize: "14px",
                              fontWeight: "400",
                            }}
                          >
                            41K
                          </div>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                          <div className="d-inline-flex">
                            <div
                              style={{
                                width: "12px",
                                height: "12px",
                                borderRadius: "6px",
                                backgroundColor: "#E5EAFC",
                                marginTop: "6px",
                              }}
                            ></div>
                            <span className="ml-4">Product E</span>
                          </div>
                          <div
                            style={{
                              color: "#182D64",
                              fontSize: "14px",
                              fontWeight: "400",
                            }}
                          >
                            41K
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard4;
