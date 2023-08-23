import React from "react";

import LoanCount from "./Bargraphs/LoanCount";
import TotalLoans from "./Bargraphs/TotalLoans";
import NetWorth from "./Bargraphs/NetWorth";
import ProductPie from './Bargraphs/ProductPie'
const LoanBargraphs = () => {
  return (
    <>
      <div className=" row my-3" style={{gap : "20px"}}>
        <LoanCount />
        <TotalLoans />
      </div>
      <div className=" row mb-5 mt-1" style={{gap : "20px"}}>
        <NetWorth />
        <ProductPie />
      </div>
    </>
  );
};

export default LoanBargraphs;
