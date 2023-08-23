// import React, { useState } from "react";
// import { Container, Row, Col, Stack, Form } from "react-bootstrap";
// import RangeSlider from "react-bootstrap-range-slider";

// import calender from '../../assets/calender.png'
// const YearSlider = () => {
//   const [value, setValue] = useState(1);

//   const handleinput = (e) => { 
//      if(e.target.value <=30) setValue(e.target.value)
//    }
//   return (
//     <>
//       <Container>
//         <Stack direction="horizontal" className="justify-content-between">
//         <h6 style={{color : "#182D64"}}>Loan Term in Years</h6>
//             <Stack direction="horizontal" >
//             <Form style={{width: "50px"}}>
//           <Form.Control value={value} onChange={handleinput} />
//         </Form>
//           <img src={calender} alt=" " width={`50px`} />
//             </Stack >
//         </Stack>
//         <Form>
//           <Form.Group as={Row}>
//               <RangeSlider
//                 value={value}
//                 onChange={handleinput}
//                 min={1}
//                 max={30}
//               />
//           </Form.Group>
//         </Form>
//       </Container>
//     </>
//   );
// };

// export default YearSlider;


import React, { useState } from "react";
import { Slider } from "@mui/material";
import { styled } from "@mui/material/styles";

import calender from '../../assets/calender.png'

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
  const [value2, setValue2] = useState(14);

  const handleinput2 = (e) => {
    if(e.target.value <=30) 
    setValue2(e.target.value)
  };
  return (
    <>
      <div className="container">
        <div className="d-flex flex-row justify-content-between my-4">
          <h5 style={{ color: "#182D64" }}>Loan Term in Years</h5>
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
              value={value2}
              onChange={handleinput2}
              style={{ width: "150px", border: "none", fontWeight: "bold" }}
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
                <div className="d-flex flex-row justify-content-between" style={{marginTop:"-24px"}}>
          <div className="d-flex flex-column" style={{color: "#CFCFCF"}}>
            <span className="text-left">|</span><span>1YR</span>
          </div>
          <div className="d-flex flex-column" style={{color: "#CFCFCF"}}>
            <span className="text-right">|</span><span>30YR</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoanSlider;
