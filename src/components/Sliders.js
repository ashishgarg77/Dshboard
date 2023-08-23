import React from "react";

import LoanSlider from './Sliders/LoanSlider'
import IntrestSlider from './Sliders/IntrestSlider'
import YearSlider from './Sliders/YearSlider'

const Sliders = () => {
  return (
    <>
      <div className="col" style={{ borderRight: "1px solid #D3D9E9" , borderRadius: "8px" }}>
        <div  className="d-flex flex-column h-100 justify-content-around px-4">
          <LoanSlider />
          <IntrestSlider />
          <YearSlider />
        </div >
      </div>
    </>
  );
};

export default Sliders;
