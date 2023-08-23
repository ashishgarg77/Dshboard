import React from "react";

import menu from "../assets/menu.png";
import options from "../assets/options.png";

const SidePanel = () => {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#232F63", paddingTop: "30px" }}
      className="d-flex flex-column justify-content-start  m-auto p-4"
    >
      <img src={menu} alt="menu" width={30} height={30} style={{marginBottom : "60px"}} />
      <img src={options} alt="options"  width={30} height={30} style={{marginBottom : "20px"}} />
      <img src={options} alt="options" width={30} height={30} style={{marginBottom : "20px"}} />
      <img src={options} alt="options" width={30} height={30} style={{marginBottom : "20px"}}/>
      <img src={options} alt="options" width={30} height={30} style={{marginBottom : "20px"}}/>
      <img src={options} alt="options" width={30} height={30} style={{marginBottom : "20px"}}/>
    </div>
  );
};

export default SidePanel;
