import React, { useEffect, useState } from "react";
import { Slider } from "@mui/material";
import { styled } from "@mui/material/styles";


const CustomSlider = styled(Slider)(({ theme }) => ({
  height: "16px",
  color: "#267DFF", //color of the slider between thumbs
  boxShadow: "inset -9px 7px 2px rgba(255, 255, 255, 0.25)",

  "& .MuiSlider-thumb": {
    width: "16px",
    backgroundColor: "#182D64", //color of thumbs
  },

  "& .MuiSlider-rail": {
    // color: "#03001663", ////color of the slider outside  teh area between thumbs
    background: "rgba(3, 0, 22, 0.39)",
    boxShadow: "inset 3px 4px 5px rgba(0, 0, 0, 0.4)",
  },
}));


// image
import menu from "../assets/menu.png";
import options from "../assets/options.png";
import cal from "../assets/calDark.png";
import plus from "../assets/plusCircle.png";
import total from "../assets/total.png";
import openLoans from "../assets/openLoans.png";
import right from "../assets/right.png";
import yellowdot from "../assets/yellowdot.png";
import growth from "../assets/Growth.png";
import approved from '../assets/approved.png'
import rejected from '../assets/rejected.png'
import bluedot from "../assets/bluedot.png";
import percentage from '../assets/percentage.png'
import rupee from "../assets/rupees.jpg";
import calender from '../assets/calender.png'

//data and utility
import { data03 } from "../data/LoanCountBar";
import { data04 } from "../data/ProductWisePie";
import { data01, data02 } from "../data/EmiPieData";
import { CustomTooltip } from "../utils/customtooltip";

//rechart
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

import {
  Line,
  LineChart,
} from "recharts";

import { PieChart, Pie, Cell, } from "recharts";



const Home = () => {

  const [value, setValue] = useState(7.5);

  const handleinput = (e) => {
    setValue(e.target.value);

    if (value > 24) setValue(24);
    if (value < 3) setValue(4);
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(data02);
    console.log(data02);
  }, []);

  const [value1, setValue1] = useState(850000);

  const handleinput1 = (e) => {
    setValue1(e.target.value);
  };

  const [value2, setValue2] = useState(14);

  const handleinput2 = (e) => {
    if (e.target.value <= 30)
      setValue2(e.target.value)
  };
  return (
    <>
      <div>
        <div className="d-flex flex-row" >
          <div className="p-0 " id='sidebar' style={{ width: "80px" }}>
            {/* <SidePanel  /> */}
            <div
              className="sidepanel1 d-flex flex-column justify-content-start  m-auto p-4"
            >
              <img src={menu} alt="menu" width={30} height={30} style={{ marginBottom: "60px" }} />
              <img src={options} alt="options" width={30} height={30} style={{ marginBottom: "20px" }} />
              <img src={options} alt="options" width={30} height={30} style={{ marginBottom: "20px" }} />
              <img src={options} alt="options" width={30} height={30} style={{ marginBottom: "20px" }} />
              <img src={options} alt="options" width={30} height={30} style={{ marginBottom: "20px" }} />
              <img src={options} alt="options" width={30} height={30} style={{ marginBottom: "20px" }} />
            </div>
          </div>
          <div className="p-0 mb-5" style={{ width: "100%" }}>
            {/* <Navbar /> */}
            <div style={{ minHeight: "60px" }} className="bg-white shadow"></div>;
            <div className="navbar1 d-flex flex-column h-100 justify-content-around">
              {/* <Date /> */}
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
                  <label for="date" class="col-1 col-form-label" style={{ width: "fit-content" }}>
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
                        <span class="input-group-text bg-white d-block " style={{ border: "none" }}>
                          <img src={cal} alt="" />
                        </span>
                      </span>
                    </div>
                  </div>

                  <label for="date" class="col-1 col-form-label" style={{ width: "fit-content" }}>
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
                      className="button1 btn btn primary"
                    >
                      <b>Apply Now</b>
                    </button>
                  </div>
                  <div className="col-xxl-2 col-lg-2 col-md-5 col-sm-5 col-xs-6 col-xl-2 ">
                    <button
                      className="button2 btn btn primary"
                      variant="light"
                    >
                      <img src={plus} alt="" />
                      <b>Add Lender</b>
                    </button>
                  </div>
                </form>
              </div>
              {/* <Leads /> */}
              <hr className="lead1" />
              <div
                className="lead2 p-0 m-0 row grid-divider justify-content-around bg-white my-2"
              >
                <div
                  className="col-xs-12 col-md-6 col-xl-2"
                  style={{ borderRight: "1px solid #D3D9E9" }}
                >
                  <div className="row">
                    <p
                      className="lead3"
                    >
                      <b>Total Leads</b>
                    </p>
                  </div>
                  <div
                    className="lead4 row"
                  >
                    <div className="col d-flex flex-column justify-content-around">
                      <h4>
                        <b>₹ 1233</b>
                      </h4>
                    </div>
                    <div className="col d-flex justify-content-center ">
                      <img src={total} alt="" align={"center"} />
                    </div>
                  </div>
                </div>

                <div
                  className="col-xs-12 col-md-6 col-xl-2"
                  style={{ borderRight: "1px solid #D3D9E9" }}
                >
                  <div className="row">
                    <p
                      className="lead3"
                    >
                      <b>Today's Payment</b>
                    </p>
                  </div>
                  <div
                    className="lead4 row"
                  >
                    <div className="col d-flex flex-column justify-content-around">
                      <h4>
                        <b>₹ 500</b>
                      </h4>
                    </div>
                    <div className="col d-flex justify-content-center ">
                      <img src={total} alt="" />
                    </div>
                  </div>
                </div>

                <div
                  className="col-xs-12 col-md-6 col-xl-2"
                  style={{ borderRight: "1px solid #D3D9E9" }}
                >
                  <div className="row">
                    <p
                      className="lead3"
                    >
                      <b>Last 30 days Spend</b>
                    </p>
                  </div>
                  <div
                    className="lead4 row"
                  >
                    <div className="col d-flex flex-column justify-content-around">
                      <h4>
                        <b>₹ 500</b>
                      </h4>
                    </div>
                    <div className="col d-flex justify-content-center ">
                      <img src={total} alt="" />
                    </div>
                  </div>
                </div>

                <div
                  className="col-xs-12 col-md-6 col-xl-2"
                  style={{ borderRight: "1px solid #D3D9E9" }}
                >
                  <div className="row">
                    <p
                      className="lead3"
                    >
                      <b>Open Loans</b>
                    </p>
                  </div>
                  <div
                    className="lead4 row"
                  >
                    <div className=" col d-flex flex-column justify-content-around">
                      <h4>
                        <b>₹ 500</b>
                      </h4>
                    </div>
                    <div className="col d-flex justify-content-center ">
                      <img src={openLoans} alt="" />
                    </div>
                  </div>
                </div>

                <div className="col-xs-12 col-md-6 col-xl-2">
                  <div className="row">
                    <p
                      className="lead3"
                    >
                      <b>Closed Loans</b>
                    </p>
                  </div>
                  <div
                    className="lead4 row"
                  >
                    <div className="col d-flex flex-column justify-content-around">
                      <h4>
                        <b>₹ 500</b>
                      </h4>
                    </div>
                    <div className="col d-flex justify-content-center ">
                      <img src={openLoans} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              {/* <Activities /> */}
              <div className="row my-2 ">
                {/* <RecentActivities /> */}
                <div
                  style={{ minHeight: "240px" }}
                  className=" col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 "
                >
                  <div
                    className="recentactivity1 d-flex flex-row justify-content-between px-4 pb-2 pt-4 bg-white"
                  >
                    <h5>
                      <b>Recent Activites</b>
                    </h5>
                    <img src={right} alt="" height={24} width={24} />
                  </div>

                  <div
                    className="recentactivity2 d-flex flex-column justify-content-between align-item-center h-50 bg-white pb-4"

                  >
                    <hr className="navbar1" />
                    <div className="pill mt-1">
                      <div
                        className="navbar1 d-flex flex-row justify-content-between"
                      >
                        <p>USER-854686</p>
                        <p>23-JAN-2023</p>
                        <p style={{ margin: "0.5rem 0" }} >
                          <span
                            className="recentactivity3"
                          >
                            Amount Sent
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="pill">
                      <div
                        className="navbar1 d-flex flex-row justify-content-between align-item-center"
                      >
                        <p>USER-854686</p>
                        <p>23-JAN-2023</p>
                        <p style={{ margin: "0.5rem 0" }}>
                          <span
                            className="recentactivity3"
                          >
                            New Lead
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="pill">
                      <div
                        className="navbar1 d-flex flex-row justify-content-between align-item-center"
                      >
                        <p>USER-854686</p>
                        <p>23-JAN-2023</p>
                        <p style={{ margin: "5px 0" }}>
                          <span
                            className="recentactivity3"
                          >
                            Payment Received
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <UpcomingPayments /> */}
                <div
                  style={{ minHeight: "240px" }}
                  className=" col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 "
                >
                  <div
                    className="recentactivity1 d-flex flex-row justify-content-between px-4 pb-2 pt-4 bg-white"
                  >
                    <h5>
                      <b>Upcoming Payments</b>
                    </h5>
                    <img src={right} alt="" height={24} width={24} />
                  </div>

                  <div
                    className="recentactivity2 d-flex flex-column justify-content-between align-item-center h-50 bg-white pb-4"
                  >
                    <hr className="navbar1" />
                    <div className="pill mt-1">
                      <div
                        className="navbar1 d-flex flex-row justify-content-between"
                      ></div>
                    </div>

                    <div className="pill">
                      <div
                        className="navbar1 d-flex flex-row justify-content-between align-item-center"
                      >
                        <p>USER-854686</p>
                        <p> ₹xyz</p>
                      </div>
                    </div>
                    <div className="pill">
                      <div
                        className="navbar1 d-flex flex-row justify-content-between align-item-center"
                      >
                        <p>USER-854686</p>
                        <p> ₹xyz</p>
                      </div>
                    </div>

                    <div className="pill">
                      <div
                        className="navbar1 d-flex flex-row justify-content-between align-item-center"
                      >
                        <p>USER-854686</p>
                        <p> ₹xyz</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <LoadsPerLoan /> */}
                <div
                  style={{ minHeight: "240px" }}
                  className=" col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 "
                >
                  <div
                    className="recentactivity1 d-flex flex-row justify-content-between px-4 pb-2 pt-4 bg-white"

                  >
                    <h5>
                      <b>Leads  per Loans</b>
                    </h5>
                    <img src={right} alt="" height={24} width={24} />
                  </div>

                  <div
                    className="recentactivity2 d-flex flex-column justify-content-between align-item-center h-50 bg-white pb-4"

                  >
                    <hr className="navbar1" />
                    <div className="pill mt-1">
                      <div
                        className="navbar1 d-flex flex-row justify-content-between"
                      ></div>
                    </div>

                    <div className="pill">
                      <div
                        className="navbar1 d-flex flex-row justify-content-between align-item-center"
                      >
                        <p>Loan Name</p>
                        <p> 2323</p>
                      </div>
                    </div>
                    <div className="pill">
                      <div
                        className="navbar1 d-flex flex-row justify-content-between align-item-center"
                      >
                        <p>Loan Name</p>
                        <p> 3434</p>
                      </div>
                    </div>

                    <div className="pill">
                      <div
                        className="navbar1 d-flex flex-row justify-content-between align-item-center"
                      >
                        <p>Loan Name</p>
                        <p> 1212</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recentactivity4 row bg-white">
                {/* <Sliders /> */}
                <div className="slider1 col">
                  <div className="d-flex flex-column h-100 justify-content-around px-4">
                    {/* <LoanSlider /> */}
                    <div className="container">
                      <div className="d-flex flex-row justify-content-between my-4">
                        <h5 style={{ color: "#182D64" }}>Loan Amount</h5>
                        <div
                          className="loanslider1 d-flex flex-row"

                        >
                          <input
                            className="loanslider2 form-control"
                            value={value1}
                            onChange={handleinput1}
                          />
                          <img src={rupee} alt=" " width={`50px`} />
                        </div>
                      </div>

                      <CustomSlider
                        defaultValue={85000000}
                        min={1e5}
                        max={1e6}
                        value={value1}
                        onChange={handleinput1}
                        valueLabelDisplay="auto"
                      />
                      <div className="d-flex flex-row justify-content-between" style={{ marginTop: "-24px" }}>
                        <div className="d-flex flex-column" style={{ color: "#CFCFCF" }}>
                          <span className="text-left">|</span><span>1L</span>
                        </div>
                        <div className="d-flex flex-column" style={{ color: "#CFCFCF" }}>
                          <span className="text-right">|</span><span>1C</span>
                        </div>
                      </div>
                    </div>
                    {/* <IntrestSlider /> */}
                    <div className="container">
                      <div className="d-flex flex-row justify-content-between my-4">
                        <h5 style={{ color: "#182D64" }}>Intrest Ratet</h5>
                        <div
                          className="loanslider1 d-flex flex-row"
                        >
                          <input
                            className="loanslider2 form-control"
                            value={value}
                            onChange={handleinput}
                          />
                          <img src={percentage} alt=" " width={`50px`} />
                        </div>
                      </div>

                      <CustomSlider
                        defaultValue={85000000}
                        min={4}
                        max={24}
                        value={value}
                        onChange={handleinput}
                        valueLabelDisplay="auto"
                      />
                      <div className="d-flex flex-row justify-content-between" style={{ marginTop: "-24px" }}>
                        <div className="d-flex flex-column" style={{ color: "#CFCFCF" }}>
                          <span className="text-left">|</span><span>4%</span>
                        </div>
                        <div className="d-flex flex-column" style={{ color: "#CFCFCF" }}>
                          <span className="text-right">|</span><span>24%</span>
                        </div>
                      </div>
                    </div>
                    {/* <YearSlider /> */}
                    <div className="container">
                      <div className="d-flex flex-row justify-content-between my-4">
                        <h5 style={{ color: "#182D64" }}>Loan Term in Years</h5>
                        <div
                          className="loanslider1 d-flex flex-row"

                        >
                          <input
                            className="loanslider2 form-control"
                            value={value2}
                            onChange={handleinput2}
                          />
                          <img src={calender} alt=" " width={`50px`} />
                        </div>
                      </div>

                      <CustomSlider
                        defaultValue={14}
                        min={1}
                        max={30}
                        value={value2}
                        onChange={handleinput2}
                        valueLabelDisplay="auto"
                      />
                      <div className="d-flex flex-row justify-content-between" style={{ marginTop: "-24px" }}>
                        <div className="d-flex flex-column" style={{ color: "#CFCFCF" }}>
                          <span className="text-left">|</span><span>1YR</span>
                        </div>
                        <div className="d-flex flex-column" style={{ color: "#CFCFCF" }}>
                          <span className="text-right">|</span><span>30YR</span>
                        </div>
                      </div>
                    </div>
                  </div >
                </div>
                {/* <Emi /> */}
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
                              <Cell key={`cell-${index}`} fill={entry.color} />
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
                        <h4 className="emi1">
                          Your Monthly Payment
                        </h4>
                        <h4 className="text-center">
                          <b>₹ 84,500</b>
                        </h4>

                        <div
                          className="d-flex flex-row justify-content-center m-4"
                        >
                          <button
                            className="emi2 btn btn-light"

                          >
                            <b>Apply Now</b>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <LoanBargraphs /> */}
              <div className=" row my-3" style={{ gap: "20px" }}>
                {/* <LoanCount /> */}
                <div
                  className="loancount1 col-lg-6 col-xl-6 bg-white p-4 "
                >
                  <div className="d-flex flex-column justify-content-arount">
                    <div className="d-flex flex-row align-item-center">
                      <img src={growth} alt="" width={20} height={20} />
                      <h5
                        className="loancount2"
                      >
                        <b> Loan Count Trend</b>
                      </h5>
                    </div>
                    <div
                      className="loancount3"
                    >
                      <ResponsiveContainer>
                        <BarChart width={730} height={320} data={data03}>
                          <CartesianGrid strokeDasharray="4 3" vertical={false} stroke="#DFE2E6" />
                          <XAxis dataKey="month" interval={"preserveStartEnd"} />
                          <YAxis type="number" dataKey="Approved" interval={"preserveStartEnd"} />
                          <Tooltip />
                          <Bar dataKey="Approved" fill="#267DFF" radius={4} barSize={20} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
                {/* <TotalLoans /> */}
                <div
                  className="loancount1 col bg-white p-4 "
                >
                  <div className="d-flex flex-column justify-content-around">
                    <div className="d-flex flex-row justify-content-between">

                      <div className="d-flex align-item-center">
                        <img src={growth} alt="" width={20} height={20} />
                        <h5 className="loancount2">
                          <b>Total Loans</b>
                        </h5>
                      </div>

                      <div className="d-flex justify-content-around p-1 " >
                        <div className="d-flex d-inline-flex ">
                          <img src={rejected} alt="" width={18} height={18} style={{ marginTop: "4px" }} />
                          <p className="totalloan1"> <b>Rejected</b></p>
                        </div>
                        <div className="d-flex d-inline-flex  ml-2">
                          <img src={approved} alt="" width={18} height={18} style={{ marginTop: "4px" }} />
                          <p className="totalloan1"> <b>Approved</b></p>
                        </div>
                      </div>
                    </div>

                    <div
                      className="loancount3"
                    >
                      <ResponsiveContainer >
                        <BarChart width={730} height={320} data={data03}>
                          <CartesianGrid strokeDasharray="3 4" vertical={false} />
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
              </div>
              <div className=" row mb-5 mt-1" style={{ gap: "20px" }}>
                {/* <NetWorth /> */}
                <div
                  className="col-lg-6 col-xl-6 bg-white p-4"
                  style={{ position: "relative", paddingBottom: "250px", borderRadius: "8px", height: "400px" }}
                >
                  <div className="d-flex flex-column justify-content-around">
                    <div className="d-flex flex-row align-item-center">
                      <img src={growth} alt="" width={20} height={20} />
                      <h5
                        className="loancount2"
                      >
                        <b> Net Worth Chart</b>
                      </h5>
                    </div>

                    <div
                      className="loancount3"
                    >
                      <ResponsiveContainer>
                        <LineChart
                          width={730}
                          height={400}
                          data={data03}
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" vertical={false} />
                          <XAxis dataKey="month" />
                          <YAxis dataKey={"Approved"} />
                          <Line type="monotone" dataKey="Approved" stroke="#267DFF" />
                          <Line type="monotone" dataKey="Rejected" stroke="#FF6A92" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
                {/* <ProductPie /> */}
                <div
                  className="productpie1 col bg-white p-4 h-100 "

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
                      className="productpie2 col-lg-4 col-xl-4"
                    >
                      <div
                        className="productpie3"
                      >
                        {/* <ResponsiveContainer height={"100%"} width={"90%"}>
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
                              {data04.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                          </PieChart>
                        </ResponsiveContainer> */}

                        <PieChart width={200} height={200} className="m-auto">
                          <Pie
                            data={data04}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            innerRadius={50}
                            outerRadius={80}
                            fill="#82ca9d"
                            className="shadow-lg"
                          >
                            {data04.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip
                            content={<CustomTooltip />}
                            cursor={{ fill: "transparent" }}
                          />
                        </PieChart>

                      </div>
                    </div>
                    <div className="col-6 py-4">
                      <div className="d-flex flex-column justify-content-around h-100">

                        <div className="d-flex flex-row justify-content-between">
                          <div className="d-inline-flex">
                            <div className="productlead6"></div>
                            <span className="ml-4"><strong>Product 1</strong></span>
                          </div>
                          <div
                            className="productlead7"
                          >
                            <strong>1,00,000</strong>
                          </div>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                          <div className="d-inline-flex">
                            <div className="productlead6" ></div>
                            <span className="ml-4"><strong>Product 2</strong></span>
                          </div>
                          <div
                            className="productlead7"
                          >
                            <strong>1,00,000</strong>
                          </div>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                          <div className="d-inline-flex">
                            <div className="productlead6" ></div>
                            <span className="ml-4"><strong>Product 3</strong></span>
                          </div>
                          <div
                            className="productlead7"
                          >
                            <strong>1,00,000</strong>
                          </div>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                          <div className="d-inline-flex">
                            <div className="productlead6"></div>
                            <span className="ml-4"><strong>Product 4</strong></span>
                          </div>
                          <div
                            className="productlead7"

                          >
                            <strong>1,00,000</strong>
                          </div>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                          <div className="d-inline-flex">
                            <div className="productlead6"></div>
                            <span className="ml-4"><strong>Product 5</strong></span>
                          </div>
                          <div
                            className="productlead7"
                          >
                            <strong>1,00,000</strong>
                          </div>
                        </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
