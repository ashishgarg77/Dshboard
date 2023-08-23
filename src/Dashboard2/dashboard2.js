import React from "react";
import "../Dashboard2/index1.css";

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

import { Loandata } from "../Dashboard2/data/loandata";
import {
  Approved,
  Disbursed,
  Leads,
  Opportunities,
} from "../Dashboard2/data/reviewamount";
import { Totalcount } from "../Dashboard2/data/totalcount";

import Date from "../assets/calDark.png";
import Plus from "../assets/plusCircle.png";
import Arrow from "../assets/arrowicon.png";
import RedArrow from "../assets/redarrow.png";
import MenuDots from "../assets/menuDots.png";
import stockup from "../assets/stockup.png";
import stockdown from "../assets/stockdown.png";

const dashboard2 = () => {
  return (
    <>
      <div>
        <div className="row">
          <div className="p-0 mb-5 dashboard13">
            <div className="d-flex flex-column h-100 justify-content-start dashboard14">
              <div className="rounded-lg dashboard12 pt-5 d-flex flex-column justify-content-between">
                <h4>
                  <b>Lenders Dashboard</b>
                </h4>
                <h5>
                  <img src={Date} alt="" width={25} height={25} />{" "}
                  <span className="pl-4 mt-2"> Date</span>
                </h5>

                <form class="row gap-2">
                  <label for="date" class="col-1 col-from-label dashboard15">
                    <b>From</b>
                  </label>
                  <div class="col-3">
                    <div class="input-group date" id="datepicker">
                      <input
                        type="text"
                        class="form-control"
                        id="date"
                        placeholder="DD/MM/YY"
                      />
                      <span class="input-group-append">
                        <span class="input-group-text bg-white d-block">
                          <img src={Date} alt="" />
                        </span>
                      </span>
                    </div>
                  </div>

                  <label for="date" class="col-1 col-form-label dashboard15">
                    <b> - to</b>
                  </label>
                  <div class="col-3">
                    <div class="input-group date" id="datepicker">
                      <input
                        type="text"
                        class="form-control"
                        id="date"
                        placeholder="DD/MM/YY"
                      />
                      <span class="input-group-append">
                        <span class="input-group-text bg-white d-block">
                          <img src={Date} alt="" />
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-5 col-lg-2 col-xl-2 col-md-5 col-xs-6 col-xxl-2 ">
                    <button className="apply btn btn primary">
                      <b>Apply Now</b>
                    </button>
                  </div>
                  <div className="col-sm-5 col-lg-2 col-xl-2 col-md-5 col-xs-6 col-xxl-2  ">
                    <button
                      className="add2 btn btn primary d-inline-flex align-items-center"
                      variant="light"
                    >
                      <img src={Plus} alt="" />
                      <b className="add3">Add Lender</b>
                    </button>
                  </div>
                </form>
              </div>
              <hr className="m-0 mt-4" />


              <div className="row mt-3">
                <div className="col  line p-2">
                  <div className="shadow bg-white mt-2 totalamount5">
                  <div className="p-2">
                    <div style={{color: "#4B5563",fontSize: "14px",fontWeight: "400"}}>Total Loan Amount</div>
                    <div className="totalamount1 mb-2 mt-1">
                      <b>7890K</b>
                    </div>
                    <div>
                      <img src={Arrow} alt="Arrow" /> +2.4%
                    </div>
                    </div>
                    <div className="totalamount2 position-relative ">
                    <div className="totalamount3">
                      <ResponsiveContainer width={"100%"} height={"100%"}>
                        <AreaChart
                          width={140}
                          height={80}
                          data={Loandata}
                          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                        >
                          <defs>
                            <linearGradient
                              id="colorPv3"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="5%"
                                stopColor="#54CBA166"
                                stopOpacity={0.8}
                              />
                              <stop
                                offset="95%"
                                stopColor="#54CBA166"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <XAxis
                            tickLine={false}
                            hide
                            axisLine={false}
                            dataKey="month"
                          />
                          <YAxis tickLine={false} hide axisLine={false} />
                          <CartesianGrid vertical={false} horizontal={false} />
                          <Area
                            type="natural"
                            dataKey="Rejected"
                            stroke="#00C287"
                            fillOpacity={1}
                            fill="url(#colorPv3)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col  line p-2">
                  <div className="shadow bg-white mt-2 totalamount5">
                  <div className="p-2">
                    <div style={{color: "#4B5563",fontSize: "14px",fontWeight: "400"}}>Total Chapters</div>
                    <div className="totalamount1 mb-2 mt-1">
                      <b>7,890</b>
                    </div>
                    <div>
                      <img src={Arrow} alt="Arrow" /> +2.4%
                    </div>
                    </div>
                    <div className="position-relative totalamount2">
                    <div className="totalamount3">
                      <ResponsiveContainer width={"100%"} height={"100%"}>
                        <AreaChart
                          width={140}
                          height={80}
                          data={Loandata}
                          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                        >
                          <defs>
                            <linearGradient
                              id="colorPv"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="5%"
                                stopColor="#FFB82852"
                                stopOpacity={0.8}
                              />
                              <stop
                                offset="95%"
                                stopColor="#54CBA166"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <XAxis
                            tickLine={false}
                            hide
                            axisLine={false}
                            dataKey="month"
                          />
                          <YAxis tickLine={false} hide axisLine={false} />
                          <CartesianGrid vertical={false} horizontal={false} />
                          <Area
                            type="natural"
                            dataKey="Rejected"
                            stroke="#FFB828"
                            fillOpacity={1}
                            fill="url(#colorPv)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col  line p-2">
                  <div className="shadow bg-white mt-2 totalamount5">
                  <div className="p-2">
                    <div style={{color: "#4B5563",fontSize: "14px",fontWeight: "400"}}>Total IMTs</div>
                    <div className="totalamount1 mb-2 mt-1">
                      <b>7,890</b>
                    </div>
                    <div>
                      <img src={Arrow} alt="Arrow" /> +2.4%
                    </div>
                    </div>
                    <div className="position-relative totalamount2">
                    <div className="totalamount3">
                      <ResponsiveContainer width={"100%"} height={"100%"}>
                        <AreaChart
                          width={140}
                          height={80}
                          data={Loandata}
                          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                        >
                          <defs>
                            <linearGradient
                              id="colorPv2"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="5%"
                                stopColor="#FF6A9252"
                                stopOpacity={0.8}
                              />
                              <stop
                                offset="95%"
                                stopColor="#FF6A9252"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <XAxis
                            tickLine={false}
                            hide
                            axisLine={false}
                            dataKey="month"
                          />
                          <YAxis tickLine={false} hide axisLine={false} />
                          <CartesianGrid vertical={false} horizontal={false} />
                          <Area
                            type="natural"
                            dataKey="Rejected"
                            stroke="#FF6A92"
                            fillOpacity={1}
                            fill="url(#colorPv2)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col  line p-2">
                  <div className="shadow bg-white mt-2 totalamount5">
                  <div className="p-2">
                    <div style={{color: "#4B5563",fontSize: "14px",fontWeight: "400"}}>Total Professionals</div>
                    <div className="totalamount1 mb-2 mt-1">
                      <b>7,890</b>
                    </div>
                    <div>
                      <img src={Arrow} alt="Arrow" /> +2.4%
                    </div>
                    </div>
                    <div className="position-relative totalamount2">
                    <div className="totalamount3">
                      <ResponsiveContainer width={"100%"} height={"100%"}>
                        <AreaChart
                          width={140}
                          height={80}
                          data={Loandata}
                          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                        >
                          <defs>
                            <linearGradient
                              id="colorPv"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="5%"
                                stopColor="#FFB82852"
                                stopOpacity={0.8}
                              />
                              <stop
                                offset="95%"
                                stopColor="#54CBA166"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <XAxis
                            tickLine={false}
                            hide
                            axisLine={false}
                            dataKey="month"
                          />
                          <YAxis tickLine={false} hide axisLine={false} />
                          <CartesianGrid vertical={false} horizontal={false} />
                          <Area
                            type="natural"
                            dataKey="Rejected"
                            stroke="#FFB828"
                            fillOpacity={1}
                            fill="url(#colorPv)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col  line p-2">
                  <div className="shadow bg-white mt-2 totalamount5">
                  <div className="p-2">
                    <div style={{color: "#4B5563",fontSize: "14px",fontWeight: "400"}}>Total RMs</div>
                    <div className="totalamount1 mb-2 mt-1">
                      <b>7,890</b>
                    </div>
                    <div>
                      <img src={Arrow} alt="Arrow" /> +2.4%
                    </div>
                    </div>
                    <div className="totalamount2 position-relative ">
                    <div className="totalamount3">
                      <ResponsiveContainer width={"100%"} height={"100%"}>
                        <AreaChart
                          width={140}
                          height={80}
                          data={Loandata}
                          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                        >
                          <defs>
                            <linearGradient
                              id="colorPv3"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="5%"
                                stopColor="#54CBA166"
                                stopOpacity={0.8}
                              />
                              <stop
                                offset="95%"
                                stopColor="#54CBA166"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <XAxis
                            tickLine={false}
                            hide
                            axisLine={false}
                            dataKey="month"
                          />
                          <YAxis tickLine={false} hide axisLine={false} />
                          <CartesianGrid vertical={false} horizontal={false} />
                          <Area
                            type="natural"
                            dataKey="Rejected"
                            stroke="#00C287"
                            fillOpacity={1}
                            fill="url(#colorPv3)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col  line p-2">
                  <div className="shadow bg-white mt-2 totalamount5">
                  <div className="p-2">
                    <div style={{color: "#4B5563",fontSize: "14px",fontWeight: "400"}}>Total Banks</div>
                    <div className="totalamount1 mb-2 mt-1">
                      <b>7,890</b>
                    </div>
                    <div>
                      <img src={RedArrow} alt="Arrow" /> -2.4%
                    </div>
                    </div>
                    <div className="position-relative totalamount2">
                    <div className="totalamount3">
                      <ResponsiveContainer width={"100%"} height={"100%"}>
                        <AreaChart
                          width={140}
                          height={80}
                          data={Loandata}
                          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                        >
                          <defs>
                            <linearGradient
                              id="colorPv2"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="5%"
                                stopColor="#FF6A9252"
                                stopOpacity={0.8}
                              />
                              <stop
                                offset="95%"
                                stopColor="#FF6A9252"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <XAxis
                            tickLine={false}
                            hide
                            axisLine={false}
                            dataKey="month"
                          />
                          <YAxis tickLine={false} hide axisLine={false} />
                          <CartesianGrid vertical={false} horizontal={false} />
                          <Area
                            type="natural"
                            dataKey="Rejected"
                            stroke="#FF6A92"
                            fillOpacity={1}
                            fill="url(#colorPv2)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col  line p-2">
                  <div className="shadow bg-white mt-2 totalamount5">
                  <div className="p-2">
                    <div style={{color: "#4B5563",fontSize: "14px",fontWeight: "400"}}>Total Managers</div>
                    <div className="totalamount1 mb-2 mt-1">
                      <b>7,890</b>
                    </div>
                    <div>
                      <img src={Arrow} alt="Arrow" /> +2.4%
                    </div>
                    </div>
                    <div className="position-relative totalamount2">
                    <div className="totalamount3">
                      <ResponsiveContainer width={"100%"} height={"100%"}>
                        <AreaChart
                          width={140}
                          height={80}
                          data={Loandata}
                          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                        >
                          <defs>
                            <linearGradient
                              id="colorPv7"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="1%"
                                stopColor="#0075FF"
                                stopOpacity={0.8}
                              />
                              <stop
                                offset="99%"
                                stopColor="#0075FF"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <XAxis
                            tickLine={false}
                            hide
                            axisLine={false}
                            dataKey="month"
                          />
                          <YAxis tickLine={false} hide axisLine={false} />
                          <CartesianGrid vertical={false} horizontal={false} />
                          <Area
                            type="natural"
                            dataKey="Rejected"
                            stroke="#0075FF"
                            fillOpacity={1}
                            fill="url(#colorPv7)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  </div>
                </div>
              </div>


              {/* <div className="row mt-3">
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 p-2 line">
                  <div className="shadow bg-white mt-2 totalamount5">
                  <div className="p-2">
                    <div className="totalamount">Total Amount</div>
                    <div className="totalamount1 mb-2 mt-1">
                      <b>7890k</b>
                    </div>
                    <div>
                      <img src={Arrow} alt="Arrow" /> +2.4%
                    </div>
                  </div>
                  <div className="totalamount2 position-relative ">
                    <div className="totalamount3">
                      <ResponsiveContainer width={"100%"} height={"100%"}>
                        <AreaChart
                          width={140}
                          height={80}
                          data={Loandata}
                          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                        >
                          <defs>
                            <linearGradient
                              id="colorPv3"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="5%"
                                stopColor="#54CBA166"
                                stopOpacity={0.8}
                              />
                              <stop
                                offset="95%"
                                stopColor="#54CBA166"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <XAxis
                            tickLine={false}
                            hide
                            axisLine={false}
                            dataKey="month"
                          />
                          <YAxis tickLine={false} hide axisLine={false} />
                          <CartesianGrid vertical={false} horizontal={false} />
                          <Area
                            type="natural"
                            dataKey="Rejected"
                            stroke="#00C287"
                            fillOpacity={1}
                            fill="url(#colorPv3)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 p-2 line">
                  <div className="shadow bg-white mt-2 totalamount5">
                  <div className="p-2">
                    <div className="totalamount">Total Chapters</div>
                    <div className="mb-2 mt-1 totalamount1">
                      <b>7890</b>
                    </div>

                    <div>
                      <img src={Arrow} alt="Arrow" /> +2.4%
                    </div>
                  </div>
                  <div className="position-relative totalamount2">
                    <div className="totalamount3">
                      <ResponsiveContainer width={"100%"} height={"100%"}>
                        <AreaChart
                          width={140}
                          height={80}
                          data={Loandata}
                          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                        >
                          <defs>
                            <linearGradient
                              id="colorPv"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="5%"
                                stopColor="#FFB82852"
                                stopOpacity={0.8}
                              />
                              <stop
                                offset="95%"
                                stopColor="#54CBA166"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <XAxis
                            tickLine={false}
                            hide
                            axisLine={false}
                            dataKey="month"
                          />
                          <YAxis tickLine={false} hide axisLine={false} />
                          <CartesianGrid vertical={false} horizontal={false} />
                          <Area
                            type="natural"
                            dataKey="Rejected"
                            stroke="#FFB828"
                            fillOpacity={1}
                            fill="url(#colorPv)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 p-2 line">
                <div className="shadow bg-white mt-2 totalamount5">
                <div className="p-2 ">
                    <div className="totalamount">Total IMTs</div>
                    <div className="mb-2 mt-1 totalamount1">
                      <b>7890</b>
                    </div>

                    <div>
                      <img src={Arrow} alt="Arrow" /> +2.4%
                    </div>
                  </div>
                  <div className="position-relative totalamount2">
                    <div className="totalamount3">
                      <ResponsiveContainer width={"100%"} height={"100%"}>
                        <AreaChart
                          width={140}
                          height={80}
                          data={Loandata}
                          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                        >
                          <defs>
                            <linearGradient
                              id="colorPv2"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="5%"
                                stopColor="#FF6A9252"
                                stopOpacity={0.8}
                              />
                              <stop
                                offset="95%"
                                stopColor="#FF6A9252"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <XAxis
                            tickLine={false}
                            hide
                            axisLine={false}
                            dataKey="month"
                          />
                          <YAxis tickLine={false} hide axisLine={false} />
                          <CartesianGrid vertical={false} horizontal={false} />
                          <Area
                            type="natural"
                            dataKey="Rejected"
                            stroke="#FF6A92"
                            fillOpacity={1}
                            fill="url(#colorPv2)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 p-2 line">
                <div className="shadow bg-white mt-2 totalamount5">
                <div className="p-2">
                    <div className="totalamount">Total Professionals</div>
                    <div className="mb-2 mt-1 totalamount1">
                      <b>7890</b>
                    </div>

                    <div>
                      <img src={Arrow} alt="Arrow" /> +2.4%
                    </div>
                  </div>
                  <div className="position-relative totalamount2">
                    <div className="totalamount3">
                      <ResponsiveContainer width={"100%"} height={"100%"}>
                        <AreaChart
                          width={140}
                          height={80}
                          data={Loandata}
                          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                        >
                          <defs>
                            <linearGradient
                              id="colorPv"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="5%"
                                stopColor="#FFB82852"
                                stopOpacity={0.8}
                              />
                              <stop
                                offset="95%"
                                stopColor="#54CBA166"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <XAxis
                            tickLine={false}
                            hide
                            axisLine={false}
                            dataKey="month"
                          />
                          <YAxis tickLine={false} hide axisLine={false} />
                          <CartesianGrid vertical={false} horizontal={false} />
                          <Area
                            type="natural"
                            dataKey="Rejected"
                            stroke="#FFB828"
                            fillOpacity={1}
                            fill="url(#colorPv)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 p-2 line">
                <div className="shadow bg-white mt-2 totalamount5">
                <div className="p-2 totalamount4">
                    <div className="totalamount">Total RMs</div>
                    <div className="mb-2 mt-1 totalamount1">
                      <b>7890</b>
                    </div>

                    <div>
                      <img src={Arrow} alt="Arrow" /> +2.4%
                    </div>
                  </div>
                  <div className="position-relative totalamount2">
                    <div className="totalamount3">
                      <ResponsiveContainer width={"100%"} height={"100%"}>
                        <AreaChart
                          width={140}
                          height={80}
                          data={Loandata}
                          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                        >
                          <defs>
                            <linearGradient
                              id="colorPv3"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="5%"
                                stopColor="#54CBA166"
                                stopOpacity={0.8}
                              />
                              <stop
                                offset="95%"
                                stopColor="#54CBA166"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <XAxis
                            tickLine={false}
                            hide
                            axisLine={false}
                            dataKey="month"
                          />
                          <YAxis tickLine={false} hide axisLine={false} />
                          <CartesianGrid vertical={false} horizontal={false} />
                          <Area
                            type="natural"
                            dataKey="Rejected"
                            stroke="#00C287"
                            fillOpacity={1}
                            fill="url(#colorPv3)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 p-2 line">
                <div className="shadow bg-white mt-2 totalamount5">
                <div className="p-2 totalamount4">
                    <div className="totalamount">Total Banks</div>
                    <div className="mb-2 mt-1 totalamount1">
                      <b>7890</b>
                    </div>

                    <div>
                      <img src={RedArrow} alt="Arrow" /> +2.4%
                    </div>
                  </div>
                  <div className="position-relative totalamount2">
                    <div className="totalamount3">
                      <ResponsiveContainer width={"100%"} height={"100%"}>
                        <AreaChart
                          width={140}
                          height={80}
                          data={Loandata}
                          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                        >
                          <defs>
                            <linearGradient
                              id="colorPv2"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="5%"
                                stopColor="#FF6A9252"
                                stopOpacity={0.8}
                              />
                              <stop
                                offset="95%"
                                stopColor="#FF6A9252"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <XAxis
                            tickLine={false}
                            hide
                            axisLine={false}
                            dataKey="month"
                          />
                          <YAxis tickLine={false} hide axisLine={false} />
                          <CartesianGrid vertical={false} horizontal={false} />
                          <Area
                            type="natural"
                            dataKey="Rejected"
                            stroke="#FF6A92"
                            fillOpacity={1}
                            fill="url(#colorPv2)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 p-2 line">
                <div className="shadow bg-white mt-2 totalamount5">
                <div className="p-2 totalamount4">
                    <div className="totalamount">Total Managers</div>
                    <div className="mb-2 mt-1 totalamount1">
                      <b>7890</b>
                    </div>

                    <div>
                      <img src={Arrow} alt="Arrow" /> +2.4%
                    </div>
                  </div>
                  <div className="position-relative totalamount2">
                    <div className="totalamount3">
                      <ResponsiveContainer width={"100%"} height={"100%"}>
                        <AreaChart
                          width={140}
                          height={80}
                          data={Loandata}
                          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                        >
                          <defs>
                            <linearGradient
                              id="colorPv7"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="1%"
                                stopColor="#0075FF"
                                stopOpacity={0.8}
                              />
                              <stop
                                offset="99%"
                                stopColor="#0075FF"
                                stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          <XAxis
                            tickLine={false}
                            hide
                            axisLine={false}
                            dataKey="month"
                          />
                          <YAxis tickLine={false} hide axisLine={false} />
                          <CartesianGrid vertical={false} horizontal={false} />
                          <Area
                            type="natural"
                            dataKey="Rejected"
                            stroke="#0075FF"
                            fillOpacity={1}
                            fill="url(#colorPv7)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
                </div>
              </div> */}


              <div className="row gap-4 justify-content-between">
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 p-4 ">
                  <div className="bg-white p-4 review">
                    <div className="d-flex justify-content-between">
                      <h6>
                        <b>Review of Loan Approved</b>
                      </h6>
                      <img src={MenuDots} alt="MenuDots" height={20} />
                    </div>

                    <div className="d-flex flex-column justify-content-around review1">
                      <span className="review2">
                        <b>$20,456</b>
                      </span>
                      <span className="review3">Total Amount Approved</span>
                    </div>

                    <PieChart width={200} height={200} className="m-auto">
                      <Pie
                        data={Approved}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#82ca9d"
                        className="shadow-lg"
                      >
                        {Approved.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                    <hr />
                    <div className="d-flex flex-column ">
                      <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex ">
                          <div className="review4"></div>
                          <p className="review5">Chapter</p>
                        </div>
                        <div className="d-flex flex-row">
                          <img
                            src={stockup}
                            alt=""
                            width={"10px"}
                            height={"18px"}
                            className="review6"
                          />
                          <p className="review5">80%</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex flex-row">
                          <div className="review7"></div>
                          <p className="review5">RM</p>
                        </div>
                        <div className="d-flex flex-row">
                          <img
                            src={stockup}
                            alt=""
                            width={"10px"}
                            height={"18px"}
                            className="review6"
                          />
                          <p className="review5">25%</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex flex-row">
                          <div className="review8"></div>
                          <p className="review5">Community Member</p>
                        </div>
                        <div className="d-flex flex-row">
                          <img
                            src={stockup}
                            alt=""
                            width={10}
                            height={18}
                            className="review6"
                          />
                          <p className="review5">37%</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex flex-row">
                          <div className="review21"></div>
                          <p className="review5">B2C</p>
                        </div>
                        <div className="d-flex flex-row">
                          <img
                            src={stockdown}
                            alt=""
                            width={"10px"}
                            height={"18px"}
                            className="review6"
                          />
                          <p className="review5">20%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 p-4 ">
                  <div className="bg-white p-4 review">
                    <div className="d-flex justify-content-between">
                      <h6>
                        <b>Review of Amount Disbursed</b>
                      </h6>
                      <img src={MenuDots} alt="MenuDots" height={20} />
                    </div>

                    <div className="d-flex flex-column justify-content-around review1">
                      <span className="review2">
                        <b>$20,456</b>
                      </span>
                      <span className="review3">Total Amount Disbursed</span>
                    </div>

                    <PieChart width={200} height={200} className="m-auto">
                      <Pie
                        data={Disbursed}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#82ca9d"
                        className="shadow-lg"
                      >
                        {Disbursed.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                    <hr />
                    <div className="h-100 d-flex flex-column justify-content-around">
                      <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex flex-row">
                          <div className="review9"></div>
                          <p className="review5">Chapter</p>
                        </div>
                        <div className="d-flex flex-row">
                          <img
                            src={stockup}
                            alt=""
                            width={10}
                            height={18}
                            className="review6"
                          />
                          <p className="review5">80%</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex flex-row">
                          <div className="review10"></div>
                          <p className="review5">RM</p>
                        </div>
                        <div className="d-flex flex-row">
                          <img
                            src={stockup}
                            alt=""
                            width={"10px"}
                            height={"18px"}
                            className="review6"
                          />
                          <p className="review5">25%</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex flex-row">
                          <div className="review11"></div>
                          <p className="review5">Community Member</p>
                        </div>
                        <div className="d-flex flex-row">
                          <img
                            src={stockup}
                            alt=""
                            width={"10px"}
                            height={"18px"}
                            className="review6"
                          />
                          <p className="review5">37%</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex flex-row">
                          <div className="review12"></div>
                          <p className="review5">B2C</p>
                        </div>
                        <div className="d-flex flex-row">
                          <img
                            src={stockdown}
                            alt=""
                            width={"10px"}
                            height={"18px"}
                            className="review6"
                          />
                          <p className="review5">20%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 p-4 ">
                  <div className="bg-white p-4 review">
                    <div className="d-flex justify-content-between">
                      <h6>
                        <b>Review of Total Leads</b>
                      </h6>
                      <img src={MenuDots} alt="MenuDots" height={20} />
                    </div>

                    <div className="d-flex flex-column justify-content-around review1">
                      <span className="review2">
                        <b>$20,456</b>
                      </span>
                      <span className="review3">Total Leads</span>
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
                          <div className="review13"></div>
                          <p className="review5">Chapter</p>
                        </div>
                        <div className="d-flex flex-row">
                          <img
                            src={stockup}
                            alt=""
                            width={"10px"}
                            height={"18px"}
                            className="review6"
                          />
                          <p className="review5">80%</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex flex-row">
                          <div className="review14"></div>
                          <p className="review5">RM</p>
                        </div>
                        <div className="d-flex flex-row">
                          <img
                            src={stockup}
                            alt=""
                            width={"10px"}
                            height={"18px"}
                            className="review6"
                          />
                          <p className="review5">25%</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex flex-row">
                          <div className="review15"></div>
                          <p className="review5">Community Member</p>
                        </div>
                        <div className="d-flex flex-row">
                          <img
                            src={stockup}
                            alt=""
                            width={"10px"}
                            height={"18px"}
                            className="review6"
                          />
                          <p className="review5">37%</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex flex-row">
                          <div className="review16"></div>
                          <p className="review5">B2C</p>
                        </div>
                        <div className="d-flex flex-row">
                          <img
                            src={stockdown}
                            alt=""
                            width={"10px"}
                            height={"18px"}
                            className="review6"
                          />
                          <p className="review5">20%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 col-xl-3 p-4 ">
                  <div className="bg-white p-4 review">
                    <div className="d-flex justify-content-between">
                      <h6>
                        <b>Review of Total Opportunities</b>
                      </h6>
                      <img src={MenuDots} alt="MenuDots" height={20} />
                    </div>

                    <div className="d-flex flex-column justify-content-around review1">
                      <span className="review2">
                        <b>$20,456</b>
                      </span>
                      <span className="review3">Total Opportunities</span>
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
                          <div className="review17"></div>
                          <p className="review5">Chapter</p>
                        </div>
                        <div className="d-flex flex-row">
                          <img
                            src={stockup}
                            alt=""
                            width={"10px"}
                            height={"18px"}
                            className="review6"
                          />
                          <p className="review5">80%</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex flex-row">
                          <div className="review18"></div>
                          <p className="review5">RM</p>
                        </div>
                        <div className="d-flex flex-row">
                          <img
                            src={stockup}
                            alt=""
                            width={"10px"}
                            height={"18px"}
                            className="review6"
                          />
                          <p className="review5">25%</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex flex-row">
                          <div className="review19"></div>
                          <p className="review5">Community Member</p>
                        </div>
                        <div className="d-flex flex-row">
                          <img
                            src={stockup}
                            alt=""
                            width={"10px"}
                            height={"18px"}
                            className="review6"
                          />
                          <p className="review5">37%</p>
                        </div>
                      </div>
                      <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex flex-row">
                          <div className="review20"></div>
                          <p className="review5">B2C</p>
                        </div>
                        <div className="d-flex flex-row">
                          <img
                            src={stockdown}
                            alt=""
                            width={"10px"}
                            height={"18px"}
                            className="review6"
                          />
                          <p className="review5">20%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" row my-3">
                <div className="col-lg-12 col-xl-6">
                  <div className=" bg-white p-4 totalcount shadow-sm">
                    <div className="d-flex flex-column justify-content-around">
                      <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex align-item-center">
                          <h5 className="totalcount1 card-heading">
                            <b>Total Count Trend</b>
                          </h5>
                        </div>
                        <div className="d-flex justify-content-around p-1 ">
                          <div className="d-flex d-inline-flex  align-items-center">
                            <div className="totalcount2"></div>
                            <div className="totalcount3"> Rejected</div>
                          </div>
                          <div className="d-flex d-inline-flex  align-items-center ml-2">
                            <div className="totalcount4"></div>
                            <div className="totalcount3">Approved</div>
                          </div>
                        </div>
                      </div>
                      <div className="totalcount5">
                        <ResponsiveContainer>
                          <BarChart width={730} height={320} data={Totalcount}>
                            <CartesianGrid
                              vertical={false}
                              strokeDasharray="8 12"
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
                              interval={"preserveStartEnd"}
                            />

                            <Bar
                              dataKey="Approved"
                              fill="#267DFF"
                              radius={4}
                              stackId="a"
                              barSize={8}
                            />
                            <Bar
                              dataKey="Rejected"
                              fill="#DDECFF"
                              radius={4}
                              stackId="a"
                              barSize={8}
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-xl-6 ">
                  <div className="bg-white p-4 totalcount shadow-sm">
                    <div className="d-flex flex-column justify-content-around">
                      <div className="d-flex flex-row justify-content-between">
                        <div className="d-flex align-item-center">
                          <h5 className="totalcount1 card-heading">
                            <b>Total Loans</b>
                          </h5>
                        </div>
                        <div className="d-flex">
                          <div className="d-inline-flex align-items-center">
                            <div className="totalloan22"></div>
                            <div className="totalloan23">Approved</div>
                          </div>
                          <div className="d-inline-flex ml-5 align-items-center">
                            <div className="totalloan24"></div>
                            <div className="totalloan23">Rejected</div>
                          </div>
                        </div>
                      </div>
                      <div className="totalcount5">
                        <ResponsiveContainer height={"90%"}>
                          <LineChart data={Totalcount} width={730}>
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
                              stroke="black"
                              strokeWidth={2}
                              activeDot={{ r: 1 }}
                              dot={false}
                            />
                          </LineChart>
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
    </>
  );
};

export default dashboard2;
