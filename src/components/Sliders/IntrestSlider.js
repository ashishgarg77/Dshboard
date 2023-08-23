

import React, { useState } from "react";
import { Slider } from "@mui/material";
import { styled } from "@mui/material/styles";

import percentage from '../../assets/percentage.png'

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

const LoanSlider = () => {
  const [value, setValue] = useState(7.5);

  const handleinput = (e) => {
    setValue(e.target.value);

    if (value > 24) setValue(24);
    if (value < 3) setValue(4);
  };
  return (
    <>
      <div className="container">
        <div className="d-flex flex-row justify-content-between my-4">
          <h5 style={{ color: "#182D64" }}>Intrest Ratet</h5>
          <div
            className="d-flex flex-row"
            style={{
              border: "1px solid #0075FF3D",
              borderRadius: "10px",
              borderRight: "none",
            }}
          >
            <input
              className="form-control"
              value={value}
              onChange={handleinput}
              style={{ width: "150px", border: "none", fontWeight: "bold" }}
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
                <div className="d-flex flex-row justify-content-between" style={{marginTop:"-24px"}}>
          <div className="d-flex flex-column" style={{color: "#CFCFCF"}}>
            <span className="text-left">|</span><span>4%</span>
          </div>
          <div className="d-flex flex-column" style={{color: "#CFCFCF"}}>
            <span className="text-right">|</span><span>24%</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoanSlider;
