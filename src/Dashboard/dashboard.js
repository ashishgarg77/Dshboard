import React from "react";

import Profile from "../Dashboard/image/profile.png";
import Pan from "../Dashboard/image/Pan.png";
import Notes from "../Dashboard/image/notes.png";
import Dot from "../Dashboard/image/dot.png";
import Money from "../Dashboard/image/money.png";
import Salary from "../Dashboard/image/Salary2.png";
import Location from "../Dashboard/image/location.png";
import Aadhar from "../Dashboard/image/aadhar.png";
import Sms from "../Dashboard/image/sms.png";
import Internal from "../Dashboard/image/internal.png";
import Bank from "../Dashboard/image/bank.png";
import Crif from "../Dashboard/image/crif.png";
import Creditscore from "../Dashboard/image/creditscore.png";
import Vector from "../Dashboard/image/Vector.png";
import Conclusion from "../Dashboard/image/Conclusion.png";
import Green from "../Dashboard/image/greenrupees.png";
import Purple from "../Dashboard/image/purplerupees.png";
import Orange from "../Dashboard/image/orangerupees.png";
import Blue from "../Dashboard//image/bluepercent.png";

import { PieChart, Pie, Cell } from "recharts";

const RADIAN = Math.PI / 180;
const data2 = [
  { name: "A", value: 120, color: "#006FBC" },
  { name: "B", value: 45, color: "#BADBF9" },
];

const data = [
  { name: "A", value: 80, color: "#FFD837" },
  { name: "B", value: 45, color: "#E3EEFF" },
];

const cx = 150;
const cy = 150;

const needle = (data, color) =>
  data.forEach((v) => {
    total += v.value;
  });

const dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-5">
          <div
            className="bg-white, shadow"
            style={{ padding: "10px", borderRadius: "6px" }}
          >
            <div className="d-inline-flex  ">
              <img
                src={Profile}
                alt=""
                width={24}
                height={24}
                style={{ marginLeft: "25px" }}
              />
              <p style={{ marginLeft: "15px" }}>Personal data Analysis</p>
            </div>
            <div className="row justify-content-around">
              <div
                className="col"
                style={{
                  background: "linear-gradient(180deg, #EEF6DA 0%, #FFF 100%)",
                  borderRadius: "3px",
                  height: "159px",
                  minWidth: "120px",
                  maxWidth: "131px",
                  padding: "0px",
                  marginLeft: "5px",
                }}
              >
                <div className=" d-flex flex-column justify-content-between h-100">
                  <div
                    style={{
                      backgroundColor: "#95C90A",
                      padding: "1px",
                      height: "7px",
                      borderTopLeftRadius: "4px",
                      borderTopRightRadius: "4px",
                    }}
                  ></div>
                  <img
                    src={Pan}
                    alt=""
                    width={50}
                    height={50}
                    style={{ marginLeft: "40px" }}
                  />
                  <div>
                    <p style={{ fontSize: "14px", textAlign: "center" }}>
                      PAN <br /> Verification
                    </p>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#95C90A",
                      padding: "1px",
                      height: "25px",
                      borderBottomLeftRadius: "4px",
                      borderBottomRightRadius: "4px",
                    }}
                  >
                    <p style={{ textAlign: "center" }}>Verified</p>
                  </div>
                </div>
              </div>

              <div
                className="col"
                style={{
                  background: "linear-gradient(180deg, #EEF6DA 0%, #FFF 100%)",
                  borderRadius: "3px",
                  height: "159px",
                  minWidth: "120px",
                  maxWidth: "131px",
                  padding: "0px",
                  marginLeft: "5px",
                }}
              >
                <div className=" d-flex flex-column justify-content-between h-100">
                  <div
                    style={{
                      backgroundColor: "#F2483A",
                      padding: "1px",
                      height: "7px",
                      borderTopLeftRadius: "4px",
                      borderTopRightRadius: "4px",
                    }}
                  ></div>
                  <img
                    src={Aadhar}
                    alt=""
                    width={50}
                    height={50}
                    style={{ marginLeft: "40px" }}
                  />
                  <div>
                    <p style={{ fontSize: "14px", textAlign: "center" }}>
                      Aadhaar <br /> Verification
                    </p>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#F2483A",
                      padding: "1px",
                      height: "25px",
                      borderBottomLeftRadius: "4px",
                      borderBottomRightRadius: "4px",
                    }}
                  >
                    <p style={{ textAlign: "center" }}>Verified</p>
                  </div>
                </div>
              </div>

              <div
                className="col"
                style={{
                  background: "linear-gradient(180deg, #EEF6DA 0%, #FFF 100%)",
                  borderRadius: "3px",
                  height: "159px",
                  minWidth: "120px",
                  maxWidth: "131px",
                  padding: "0px",
                  marginLeft: "5px",
                }}
              >
                <div className=" d-flex flex-column justify-content-between h-100">
                  <div
                    style={{
                      backgroundColor: "#95C90A",
                      padding: "1px",
                      height: "7px",
                      borderTopLeftRadius: "4px",
                      borderTopRightRadius: "4px",
                    }}
                  ></div>
                  <img
                    src={Location}
                    alt=""
                    width={50}
                    height={50}
                    style={{ marginLeft: "40px" }}
                  />
                  <div>
                    <p style={{ fontSize: "14px", textAlign: "center" }}>
                      Location <br /> Verification
                    </p>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#95C90A",
                      padding: "1px",
                      height: "25px",
                      borderBottomLeftRadius: "4px",
                      borderBottomRightRadius: "4px",
                    }}
                  >
                    <p style={{ textAlign: "center" }}>Verified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-7">
          <div
            className="bg-white shadow"
            style={{ padding: "10px", borderRadius: "6px" }}
          >
            <div className="d-inline-flex">
              <img
                src={Profile}
                alt=""
                width={24}
                height={24}
                style={{ marginLeft: "25px" }}
              />
              <p style={{ marginLeft: "15px" }}>Credit Analysis</p>
            </div>
            <div className="row justify-content-around">
              <div
                className="col"
                style={{
                  background: "linear-gradient(180deg, #EEF6DA 0%, #FFF 100%)",
                  borderRadius: "3px",
                  height: "159px",
                  minWidth: "120px",
                  maxWidth: "131px",
                  padding: "0px",
                  marginLeft: "5px",
                }}
              >
                <div className=" d-flex flex-column justify-content-between h-100">
                  <div
                    style={{
                      backgroundColor: "#95C90A",
                      padding: "1px",
                      height: "7px",
                      borderTopLeftRadius: "4px",
                      borderTopRightRadius: "4px",
                    }}
                  ></div>
                  <img
                    src={Sms}
                    alt=""
                    width={50}
                    height={50}
                    style={{ marginLeft: "40px" }}
                  />
                  <div>
                    <p style={{ fontSize: "14px", textAlign: "center" }}>
                      SMS <br /> Analysis
                    </p>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#95C90A",
                      padding: "1px",
                      height: "25px",
                      borderBottomLeftRadius: "4px",
                      borderBottomRightRadius: "4px",
                    }}
                  >
                    <p style={{ textAlign: "center" }}>Verified</p>
                  </div>
                </div>
              </div>

              <div
                className="col"
                style={{
                  background: "linear-gradient(180deg, #EEF6DA 0%, #FFF 100%)",
                  borderRadius: "3px",
                  height: "159px",
                  minWidth: "120px",
                  maxWidth: "131px",
                  padding: "0px",
                  marginLeft: "5px",
                }}
              >
                <div className=" d-flex flex-column justify-content-between h-100">
                  <div
                    style={{
                      backgroundColor: "#F2483A",
                      padding: "1px",
                      height: "7px",
                      borderTopLeftRadius: "4px",
                      borderTopRightRadius: "4px",
                    }}
                  ></div>
                  <img
                    src={Internal}
                    alt=""
                    width={50}
                    height={50}
                    style={{ marginLeft: "40px" }}
                  />
                  <div>
                    <p style={{ fontSize: "14px", textAlign: "center" }}>
                      Internal <br /> Dedupe
                    </p>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#F2483A",
                      padding: "1px",
                      height: "25px",
                      borderBottomLeftRadius: "4px",
                      borderBottomRightRadius: "4px",
                    }}
                  >
                    <p style={{ textAlign: "center" }}>Verified</p>
                  </div>
                </div>
              </div>

              <div
                className="col"
                style={{
                  background: "linear-gradient(180deg, #EEF6DA 0%, #FFF 100%)",
                  borderRadius: "3px",
                  height: "159px",
                  minWidth: "120px",
                  maxWidth: "131px",
                  padding: "0px",
                  marginLeft: "5px",
                }}
              >
                <div className=" d-flex flex-column justify-content-between h-100">
                  <div
                    style={{
                      backgroundColor: "#95C90A",
                      padding: "1px",
                      height: "7px",
                      borderTopLeftRadius: "4px",
                      borderTopRightRadius: "4px",
                    }}
                  ></div>
                  <img
                    src={Bank}
                    alt=""
                    width={50}
                    height={50}
                    style={{ marginLeft: "40px" }}
                  />
                  <div>
                    <p style={{ fontSize: "14px", textAlign: "center" }}>
                      Bank <br /> Statement
                    </p>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#95C90A",
                      padding: "1px",
                      height: "25px",
                      borderBottomLeftRadius: "4px",
                      borderBottomRightRadius: "4px",
                    }}
                  >
                    <p style={{ textAlign: "center" }}>Verified</p>
                  </div>
                </div>
              </div>

              <div
                className="col"
                style={{
                  background: "linear-gradient(180deg, #EEF6DA 0%, #FFF 100%)",
                  borderRadius: "3px",
                  height: "159px",
                  minWidth: "120px",
                  maxWidth: "131px",
                  padding: "0px",
                  marginLeft: "5px",
                }}
              >
                <div className=" d-flex flex-column justify-content-between h-100">
                  <div
                    style={{
                      backgroundColor: "#F2483A",
                      padding: "1px",
                      height: "7px",
                      borderTopLeftRadius: "4px",
                      borderTopRightRadius: "4px",
                    }}
                  ></div>
                  <img
                    src={Crif}
                    alt=""
                    width={50}
                    height={50}
                    style={{ marginLeft: "40px" }}
                  />
                  <div>
                    <p style={{ fontSize: "14px", textAlign: "center" }}>
                      CRIF <br /> Analysis
                    </p>
                  </div>
                  <div
                    style={{
                      backgroundColor: "#F2483A",
                      padding: "1px",
                      height: "25px",
                      borderBottomLeftRadius: "4px",
                      borderBottomRightRadius: "4px",
                    }}
                  >
                    <p style={{ textAlign: "center" }}>Verified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-3" style={{ minHeight: "245px" }}>
        <div className="col-sm-12 col-xs-12 col-md-6 col-lg-3">
          <div className="bg-white" style={{ borderRadius: "4px" }}>
            <div className="d-inline-flex mt-2">
              <img
                src={Notes}
                alt=""
                width={20}
                height={20}
                style={{ marginLeft: "35px" }}
              />
              <h5 style={{ marginLeft: "15px" }}> Notes</h5>
            </div>
            <ul style={{ listStyleType: "none" }}>
              <li className="d-inline-flex">
                <img
                  src={Dot}
                  alt=""
                  width={10}
                  height={10}
                  style={{ marginTop: "5px" }}
                />
                <p style={{ fontSize: "13px" }}>
                  Et nostrum repudiandae modi dolores porro recusandae atque
                  cumque ullam.
                </p>
              </li>
              <hr style={{ margin: "0px" }} />
              <li className="d-inline-flex">
                <img
                  src={Dot}
                  alt=""
                  width={10}
                  height={10}
                  style={{ marginTop: "5px" }}
                />
                <p style={{ fontSize: "13px" }}>
                  Et nostrum repudiandae modi dolores porro recusandae atque
                  cumque ullam.
                </p>
              </li>
              <hr style={{ margin: "0px" }} />
              <li className="d-inline-flex">
                <img
                  src={Dot}
                  alt=""
                  width={10}
                  height={10}
                  style={{ marginTop: "5px" }}
                />
                <p style={{ fontSize: "13px" }}>
                  Et nostrum repudiandae modi dolores porro recusandae atque
                  cumque ullam.
                </p>
              </li>
              <hr style={{ margin: "0px" }} />
              <li className="d-inline-flex">
                <img
                  src={Dot}
                  alt=""
                  width={10}
                  height={10}
                  style={{ marginTop: "5px" }}
                />
                <p style={{ fontSize: "13px" }}>
                  Et nostrum repudiandae modi dolores porro recusandae atque
                  cumque ullam.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-sm-12 col-xs-12 col-md-6">
          <div
            className="bg-white"
            style={{ borderRadius: "4px", padding: "16px" }}
          >
            <div className="d-inline-flex ">
              <img
                src={Money}
                alt=""
                width={24}
                height={24}
                style={{ marginLeft: "6px" }}
              />
              <h5 style={{ marginLeft: "15px" }}>Salary</h5>
            </div>
            <div className="row">
              <div className="col">
                <div
                  style={{
                    backgroundColor: "#EBF3FF",
                    borderTopLeftRadius: "6px",
                    borderTopRightRadius: "6px",
                    height: "171px",
                    minWidth: "76%",
                  }}
                >
                  <div className="flex-box-column">
                    <div
                      className="d-flex justify-content-center"
                      style={{ padding: "28px" }}
                    >
                      <img src={Salary} alt="" width={30} height={30} />
                    </div>
                  </div>
                  <div>
                    <p style={{ fontSize: "16px", textAlign: "center" }}>
                      <b>INR 10,00,000</b>
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#006FBC",
                    padding: "1px",
                    minWidth: "76%",
                    borderBottomLeftRadius: "6px",
                    borderBottomRightRadius: "6px",
                  }}
                >
                  <p style={{ textAlign: "center" }}>from SMS</p>
                </div>
              </div>

              <div className="col">
                <div
                  style={{
                    backgroundColor: "#EBF3FF",
                    borderTopLeftRadius: "6px",
                    borderTopRightRadius: "6px",
                    height: "171px",
                    minWidth: "76%",
                  }}
                >
                  <div className="flex-box-column">
                    <div
                      className="d-flex justify-content-center"
                      style={{ padding: "28px" }}
                    >
                      <img src={Salary} alt="" width={30} height={30} />
                    </div>
                  </div>
                  <div>
                    <p style={{ fontSize: "16px", textAlign: "center" }}>
                      <b>INR 10,00,000</b>
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#006FBC",
                    padding: "1px",
                    minWidth: "76%",
                    borderBottomLeftRadius: "6px",
                    borderBottomRightRadius: "6px",
                  }}
                >
                  <p style={{ textAlign: "center" }}>from Finbit</p>
                </div>
              </div>

              <div className="col">
                <div
                  style={{
                    backgroundColor: "#EBF3FF",
                    borderTopLeftRadius: "6px",
                    borderTopRightRadius: "6px",
                    height: "171px",
                    minWidth: "76%",
                  }}
                >
                  <div className="flex-box-column">
                    <div
                      className="d-flex justify-content-center"
                      style={{ padding: "28px" }}
                    >
                      <img src={Salary} alt="" width={30} height={30} />
                    </div>
                  </div>
                  <div>
                    <p style={{ fontSize: "16px", textAlign: "center" }}>
                      <b>INR 10,00,000</b>
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#006FBC",
                    padding: "1px",
                    minWidth: "76%",
                    borderBottomLeftRadius: "6px",
                    borderBottomRightRadius: "6px",
                  }}
                >
                  <p style={{ textAlign: "center" }}>User Input</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-6 col-xs-6 col-md-6 col-lg-3 col-xl-3">
          <div className="bg-white" style={{ borderRadius: "4px" }}>
            <div className="d-inline-flex mt-2">
              <img
                src={Creditscore}
                alt=""
                width={24}
                height={17}
                style={{ marginLeft: "15px", marginTop: "5px" }}
              />
              <h5 style={{ marginLeft: "13px" }}> Credit Score</h5>
            </div>
            <div
              className="d-flex flex-column justify-content-around"
              style={{
                position: "absolute",
                top: "47%",
                left: "38%",
                width: "fit-content",
              }}
            >
              <span
                style={{
                  width: "fit-content",
                  fontSize: "20px",
                  color: "#FFD837",
                }}
              >
                Good
              </span>
              <span
                style={{
                  color: "#4B5563",
                  width: "82px",
                  marginLeft: "5px",
                  fontSize: "25px",
                }}
              >
                <h4>
                  <b>700</b>
                </h4>
              </span>
            </div>
            <div>
              <PieChart width={260} height={200}>
                <Pie
                  dataKey="value"
                  startAngle={180}
                  endAngle={0}
                  data={data}
                  cx={cx}
                  cy={cy}
                  innerRadius={75}
                  outerRadius={100}
                  fill="#8884d8"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </div>
            <div className="d-flex flex-row justify-content-around" style={{}}>
              <div className="d-inline-flex">
                <div
                  className=""
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "6px",
                    backgroundColor: "#95C90A",
                    marginTop: "5px",
                    marginRight: "10px",
                  }}
                ></div>
                <p style={{ fontSize: "11px" }}>Excellent</p>
              </div>
              <div className="d-inline-flex ">
                <div
                  className=""
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "6px",
                    backgroundColor: "#FFD837",
                    marginTop: "5px",
                    marginRight: "10px",
                  }}
                ></div>
                <p style={{ fontSize: "11px" }}>Good</p>
              </div>
              <div className="d-inline-flex">
                <div
                  className=""
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "6px",
                    backgroundColor: "#FF772B",
                    marginTop: "5px",
                    marginRight: "10px",
                  }}
                ></div>
                <p style={{ fontSize: "11px" }}>Fair</p>
              </div>
              <div className="d-inline-flex">
                <div
                  className=""
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "6px",
                    backgroundColor: "#FF5C5D",
                    marginTop: "5px",
                    marginRight: "10px",
                  }}
                ></div>
                <p style={{ fontSize: "11px" }}>Poor</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-2" style={{ height: "360px" }}>
        <div className="col-sm-6 col-xs-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
          <div className="bg-white" style={{ borderRadius: "4px" }}>
            <div className="d-inline-flex mt-2">
              <img
                src={Vector}
                alt=""
                width={20}
                height={20}
                style={{ marginLeft: "35px" }}
              />
              <h5 style={{ marginLeft: "15px" }}>Assessment Result</h5>
            </div>
            <div
              className="d-flex flex-column justify-content-around"
              style={{
                position: "absolute",
                top: "40%",
                left: "38%",
                width: "fit-content",
              }}
            >
              <span
                style={{
                  height: "80px",
                  width: "80px",
                  marginLeft: "5px",
                  fontSize: "25px",
                  backgroundColor: "#006FBC",
                  color: "white",
                }}
              >
                <h4>
                  <b style={{ alignItems: "center" }}>85%</b>
                </h4>
              </span>
            </div>
            <PieChart width={260} height={285}>
              <Pie
                dataKey="value"
                startAngle={360}
                endAngle={0}
                data={data2}
                cx={cx}
                cy={cy}
                innerRadius={75}
                outerRadius={100}
                fill="#8884d8"
                stroke="none"
              >
                {data2.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
            <div className="d-flex flex-row justify-content-around" style={{}}>
              <div className="d-inline-flex ">
                <div
                  className=""
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "9px",
                    backgroundColor: "#006FBC",
                    marginTop: "5px",
                    marginRight: "10px",
                  }}
                ></div>
                <p style={{ fontSize: "16px" }}>Verified</p>
              </div>
              <div className="d-inline-flex">
                <div
                  className=""
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "9px",
                    backgroundColor: "#BADBF9",
                    marginTop: "5px",
                    marginRight: "10px",
                  }}
                ></div>
                <p style={{ fontSize: "16px" }}>Unverified</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-xxl-9 col-xl-9 col-lg-9  ">
          <div className="bg-white" style={{ borderRadius: "4px" }}>
            <div className="d-inline-flex mt-2">
              <img
                src={Conclusion}
                alt=""
                width={20}
                height={20}
                style={{ marginLeft: "35px" }}
              />
              <h5 style={{ marginLeft: "15px" }}>Conclusion</h5>
            </div>
            <div className="row" style={{ padding: "25px" }}>
              <div className="col-sm-12 col-xs-12 col-lg-12 col-md-12 col-xl-6">
                <div
                  className="col"
                  style={{
                    background: "rgba(223, 239, 182, 0.50)",
                    borderRadius: "3px",
                    height: "123px",
                    minWidth: "200px",
                    padding: "35px",
                    borderTopLeftRadius: "4px",
                    borderTopRightRadius: "4px",
                  }}
                >
                  <div className="d-flex flex-row justify-content-between h-100">
                    <div>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "rgba(0, 0, 0, 0.45)",
                        }}
                      >
                        Salary
                      </p>
                      <p style={{ fontSize: "20px" }}>
                        <b>INR 10,00,000</b>
                      </p>
                    </div>
                    <img
                      src={Green}
                      alt=""
                      width={45}
                      height={45}
                      style={{ marginTop: "20px" }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#95C90A",
                    height: "7px",
                    borderBottomLeftRadius: "4px",
                    borderBottomRightRadius: "4px",
                    minWidth: "200px",
                  }}
                ></div>
              </div>

              <div className="col-sm-12 col-xs-12 col-lg-12 col-md-12 col-xl-6">
                <div
                  className="col"
                  style={{
                    background: "rgba(216, 212, 254, 0.50)",
                    borderRadius: "3px",
                    height: "123px",
                    minWidth: "200px",
                    padding: "35px",
                    borderTopLeftRadius: "4px",
                    borderTopRightRadius: "4px",
                  }}
                >
                  <div className="d-flex flex-row justify-content-between h-100">
                    <div>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "rgba(0, 0, 0, 0.45)",
                        }}
                      >
                        Approval Amount
                      </p>
                      <p style={{ fontSize: "20px" }}>
                        <b>INR 10,00,000</b>
                      </p>
                    </div>
                    <img
                      src={Purple}
                      alt=""
                      width={45}
                      height={45}
                      style={{ marginTop: "20px" }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#7C70FC",
                    height: "7px",
                    borderBottomLeftRadius: "4px",
                    borderBottomRightRadius: "4px",
                    minWidth: "200px",
                  }}
                ></div>
              </div>
            </div>

            <div className="row" style={{ padding: "25px" }}>
              <div className="col-sm-12 col-xs-12 col-lg-12 col-md-12 col-xl-6">
                <div
                  className="col"
                  style={{
                    background: "rgba(255, 233, 227, 0.50)",
                    borderRadius: "3px",
                    height: "123px",
                    minWidth: "200px",
                    padding: "35px",
                    borderTopLeftRadius: "4px",
                    borderTopRightRadius: "4px",
                  }}
                >
                  <div className="d-flex flex-row justify-content-between h-100">
                    <div>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "rgba(0, 0, 0, 0.45)",
                        }}
                      >
                        Obligation
                      </p>
                      <p style={{ fontSize: "20px" }}>
                        <b>INR 10,00,000</b>
                      </p>
                    </div>
                    <img
                      src={Orange}
                      alt=""
                      width={45}
                      height={45}
                      style={{ marginTop: "20px" }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#FF7448",
                    height: "7px",
                    borderBottomLeftRadius: "4px",
                    borderBottomRightRadius: "4px",
                    minWidth: "200px",
                  }}
                ></div>
              </div>

              <div className="col-sm-12 col-xs-12 col-lg-12 col-md-12 col-xl-6">
                <div
                  className="col"
                  style={{
                    background: "rgba(227, 238, 255, 0.50)",
                    borderRadius: "3px",
                    height: "123px",
                    minWidth: "200px",
                    padding: "35px",
                    borderTopLeftRadius: "4px",
                    borderTopRightRadius: "4px",
                  }}
                >
                  <div className="d-flex flex-row justify-content-between h-100">
                    <div>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "rgba(0, 0, 0, 0.45)",
                        }}
                      >
                        DBR (%)
                      </p>
                      <p style={{ fontSize: "20px" }}>
                        <b>85%</b>
                      </p>
                    </div>
                    <img
                      src={Blue}
                      alt=""
                      width={45}
                      height={45}
                      style={{ marginTop: "20px" }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#2B78FF",
                    height: "7px",
                    borderBottomLeftRadius: "4px",
                    borderBottomRightRadius: "4px",
                    minWidth: "200px",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default dashboard;
