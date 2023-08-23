import React from "react";

import BasicSelect from "../components/ManagerFilter";
import Locator from "./image/Locator.png";
import Arrowdown from "./image/Arrowdown.png";
import Colon from "./image/Colon.png";
import Whitedown from "../Dashboard3/image/WhiteDown.png";
import Filtericon from "../Dashboard3/image/Filtericon.png";
import Location from "../Dashboard3/image/Location.png";
import Leads from "../Dashboard3/image/Leads.png";
import Opportunities from "../Dashboard3/image/Opportunities.png";
import Managers from "../Dashboard3/image/Managers.png";

import { Productwise } from "./Productwise";
import { Managerlead } from "./managerlead";
import { Totalleads } from "./totalleads";
import { Totalloan } from "./totalloan";

import { ResponsiveContainer, Pie, PieChart, Cell } from "recharts";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
} from "recharts";
import { AreaChart, Area } from "recharts";
import { LineChart, Line, Tooltip } from "recharts";

const Dashboard3 = () => {
  return (
    <>
      <div>
        <div className="row">
          <div className="p-0 mb-5" style={{ width: "100%" }}>
            <div
              className="d-flex flex-column h-100 justify-content-start"
              style={{ width: "90%", margin: "auto" }}
            >
              <div className="dashboard3 rounded-lg pt-5 d-flex flex-column justify-content-between">
                <h5>
                  <b>Chapter Dashboard</b>
                </h5>

                <h4>
                  <img src={Filtericon} alt="" width={20} />{" "}
                  <span className="pl-4 mt-2"> Filter</span>
                </h4>

                <form class="row gap-2">
                  <div class="col-2">
                    <div
                      class="input-group date position-relative"
                      id="datepicker"
                    >
                      <div className="filter31">
                        <img src={Locator} width={20} height={20} alt="" />
                      </div>
                      <input
                        type="text"
                        className="filter32 form-control"
                        id="date"
                        placeholder="Chapter"
                      />
                      <span class="input-group-append">
                        <span class="filter33 input-group-text bg-white d-block ">
                          <img src={Arrowdown} alt="" />
                        </span>
                      </span>
                    </div>
                  </div>

                  <div
                    class="col-1 d-flex justify-content-center align-items-center"
                    style={{ width: "fit-content" }}
                  >
                    <img src={Colon} alt="" height={15} width={15} />
                  </div>
                  <div class="col-3">
                    <div
                      class="filter34 input-group date position-relative"
                      id="datepicker"
                    >
                      <div className="filter31">
                        <img src={Locator} width={20} height={20} alt="" />
                      </div>
                      <input
                        type="text"
                        className="filter32 form-control"
                        id="date"
                        placeholder="Select Chapter Name"
                      />
                      <span class="filter36 input-group-append">
                        <span class=" filter33 input-group-text bg-white d-block ">
                          <img src={Arrowdown} alt="" />
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className=" col-lg-2 col-md-5 col-sm-5 col-xs-6 col-xl-2 ">
                    <button className="filter37 btn btn primary">
                      <span>Apply Filter</span>
                    </button>
                  </div>
                  <div className=" col-lg-4 col-md-5 col-sm-5 col-xs-6 col-xl-4 ">
                    <button className="add31 btn btn primary" variant="light">
                      <span>Add </span>
                      <img src={Whitedown} alt="" />
                    </button>
                  </div>
                </form>
              </div>
              <hr />

              <div className="info31 bg-white ">
                <h6>
                  <b>Chapter Information</b>
                </h6>
                <div className="row pt-5">
                  <div className="d-flex flex-row col-sm-12 col-md-6 col-lg-6 col-xl-3">
                    <img src={Location} alt="" height={"56px"} width={"56px"} />
                    <div className="d-flex flex-column ml-5">
                      <h4>
                        <b>Faridabad</b>
                      </h4>
                      <p className="info32">Chapter Name</p>
                    </div>
                  </div>
                  <div className="d-flex flex-row col-lg-6 col-xl-3 col-sm-12 col-md-6  ">
                    <img src={Managers} alt="" height={"56px"} width={"56px"} />
                    <div className="d-flex flex-column ml-5">
                      <h4>
                        <b>6</b>
                      </h4>
                      <p className="info32">No. of Managers</p>
                    </div>
                  </div>
                  <div className="d-flex flex-row col-sm-12 col-lg-6 col-md-6  col-xl-3">
                    <img src={Leads} alt="" height={"56px"} width={"56px"} />
                    <div className="d-flex flex-column ml-5">
                      <h4>
                        <b>454K</b>
                      </h4>
                      <p className="info32">No. of leads</p>
                    </div>
                  </div>
                  <div className="d-flex flex-row col-xl-3 col-sm-12 col-md-6 col-lg-6 ">
                    <img
                      src={Opportunities}
                      alt=""
                      height={"56px"}
                      width={"56px"}
                    />
                    <div className="d-flex flex-column ml-5">
                      <h4>
                        <b>567K</b>
                      </h4>
                      <p className="info32">No. of Opportunities</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" row my-3">
                <div className="col-lg-12 col-xl-6 p-3">
                  <div className="totalloan31 bg-white p-4 shadow-sm">
                    <div className="d-flex flex-column justify-content-around">
                      <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex align-item-center">
                          <h5 className="totalloan32 card-heading">
                            <b>Total Loan Amount</b>
                          </h5>
                        </div>

                        {/* <CustomizedSwitches left="Count" right="Amount" /> */}

                        <BasicSelect placeholder="Select Manager" />
                      </div>

                      <div className="totalloan33">
                        <ResponsiveContainer height={"90%"}>
                          <LineChart data={Totalloan} width={730}>
                            <CartesianGrid
                              vertical={false}
                              strokeDasharray="8 3"
                            />
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
                      <div className="totalloan34 d-flex flex-row justify-content-around p-1 position-absolute">
                        <div className="totalloan36 d-inline-flex">
                          <div className="totalloan35"></div>
                          <p className="totalloan37">Total Loan Amount</p>
                        </div>
                        <div className="totalloan36 d-inline-flex">
                          <div className="totalloan38"></div>
                          <p className="totalloan37">Approved Loan Amount</p>
                        </div>
                        <div className="totalloan36 d-inline-flex">
                          <div className="totalloan39"></div>
                          <p className="totalloan37">Rejected Loan Amount</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6 p-3">
                  <div className="product31 bg-white p-4 ">
                    <div className="d-flex flex-column justify-content-around">
                      <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex align-item-center">
                          <h5 className="totalloan32 card-heading">
                            <b>Product Wise Lead Count</b>
                          </h5>
                        </div>
                        <div className="product32 d-flex flex-column justify-content-center">
                          <p className="product33"> This week</p>
                          <p className="product34"> 229K</p>
                        </div>
                      </div>
                      <hr />
                      <div className="product35 row ">
                        <div className="product36 col-6">
                          <div className="product37">
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
                                <div className="product38"></div>
                                <span className="ml-4">Product A</span>
                              </div>
                              <div className="product39">41K</div>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                              <div className="d-inline-flex">
                                <div className="product40"></div>
                                <span className="ml-4">Product B</span>
                              </div>
                              <div className="product39">41K</div>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                              <div className="d-inline-flex">
                                <div className="product41"></div>
                                <span className="ml-4">Product C</span>
                              </div>
                              <div className="product39">41K</div>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                              <div className="d-inline-flex">
                                <div className="product42"></div>
                                <span className="ml-4">Product D</span>
                              </div>
                              <div className="product39">41K</div>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                              <div className="d-inline-flex">
                                <div className="product43"></div>
                                <span className="ml-4">Product E</span>
                              </div>
                              <div className="product39">41K</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="manager30 p-5">
                <div className="manager31 mb-2">Manager's Performance</div>
                <div className="manager32 mb-3">
                  ( According to Lead & Opportunity Count Graph)
                </div>

                <div className="row ">
                  <div className="col-lg-12 col-xl-6 p-3">
                    <div className="manager33 bg-white p-4 shadow-sm ">
                      <div className="d-flex flex-column justify-content-around">
                        <div className="d-flex flex-wrap flex-row justify-content-between">
                          <div className="d-flex align-item-center">
                            <h5 className="totallead30">
                              <b>Total Leads</b>
                            </h5>
                          </div>
                          <div className="totallead31 d-flex ">
                            <div className="totallead32 bg-dark text-white px-4 py-2">
                              Monthly
                            </div>
                            <div className="totallead33 bg-light text-black px-4 py-2">
                              {" "}
                              Weekly
                            </div>
                          </div>
                          {/* <CustomizedSwitches left="Opportunities" right="Leads" /> */}
                        </div>

                        <div className="totalloan33">
                          <ResponsiveContainer height={"90%"}>
                            <AreaChart
                              width={730}
                              height={250}
                              data={Totalleads}
                              margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                              }}
                            >
                              <defs>
                                <linearGradient
                                  id="colorUv"
                                  x1="0"
                                  y1="0"
                                  x2="0"
                                  y2="1"
                                >
                                  <stop
                                    offset="5%"
                                    stopColor="#FFEFF299"
                                    stopOpacity={0.8}
                                  />
                                  <stop
                                    offset="95%"
                                    stopColor="#FFEFF299"
                                    stopOpacity={0}
                                  />
                                </linearGradient>
                                <linearGradient
                                  id="colorPv"
                                  x1="0"
                                  y1="0"
                                  x2="0"
                                  y2="1"
                                >
                                  <stop
                                    offset="5%"
                                    stopColor="#DBF5EC99"
                                    stopOpacity={0.8}
                                  />
                                  <stop
                                    offset="95%"
                                    stopColor="#DBF5EC99"
                                    stopOpacity={0}
                                  />
                                </linearGradient>
                                <linearGradient
                                  id="colorMv"
                                  x1="0"
                                  y1="0"
                                  x2="0"
                                  y2="1"
                                >
                                  <stop
                                    offset="5%"
                                    stopColor="#DDECFF"
                                    stopOpacity={0.8}
                                  />
                                  <stop
                                    offset="95%"
                                    stopColor="#DDECFF"
                                    stopOpacity={0}
                                  />
                                </linearGradient>
                              </defs>
                              <XAxis
                                dataKey="month"
                                axisLine={false}
                                tickLine={false}
                              />
                              <YAxis axisLine={false} tickLine={false} />
                              <CartesianGrid
                                vertical={false}
                                strokeDasharray="8 3"
                              />
                              <Area
                                type="liner"
                                dataKey="Approved"
                                stroke="#FF6A92"
                                fillOpacity={1}
                                fill="url(#colorUv)"
                              />
                              <Area
                                type="linear"
                                dataKey="Rejected"
                                stroke="#82ca9d"
                                fillOpacity={1}
                                fill="url(#colorPv)"
                              />
                              <Area
                                type="linear"
                                dataKey="Approved1"
                                stroke="#267DFF"
                                fillOpacity={1}
                                fill="url(#colorMv)"
                              />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-12 col-xl-6 p-3">
                    <div className="manager33 bg-white p-4 shadow-sm">
                      <div className="d-flex flex-column justify-content-around">
                        <div className="d-flex flex-row justify-content-between">
                          <div className="d-flex align-item-center">
                            <h5 className="totalloan32">
                              <b>Manager's Lead Performance</b>
                            </h5>
                          </div>
                          <BasicSelect placeholder="Select Month" />
                        </div>
                        <div className="totalloan33">
                          <ResponsiveContainer height={"90%"}>
                            <BarChart
                              data={Managerlead}
                              margin={{
                                top: 0,
                                right: 40,
                                left: 40,
                                bottom: 20,
                              }}
                              layout="vertical"
                              barCategoryGap="20%"
                              barGap={2}
                              maxBarSize={32}
                            >
                              <CartesianGrid
                                horizontal={false}
                                vertical={false}
                                stroke="#a0a0a0"
                                strokeWidth={0.5}
                              />
                              <XAxis
                                type="number"
                                stroke="#a0a0a0"
                                strokeWidth={0.5}
                              />
                              <YAxis
                                type="category"
                                dataKey="name"
                                width={20}
                              />
                              <Bar dataKey="amount" animationDuration={1000}>
                                <LabelList
                                  dataKey="amount"
                                  position="insideCenter"
                                  angle={0}
                                  offset={25}
                                  fill="white"
                                />
                                {Managerlead.map((entry, index) => (
                                  <Cell
                                    key={`cell-${index}`}
                                    fill={entry.color}
                                  />
                                ))}
                              </Bar>
                            </BarChart>
                          </ResponsiveContainer>
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

export default Dashboard3;
