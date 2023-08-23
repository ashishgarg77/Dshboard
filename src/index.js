import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import { BrowserRouter } from "react-router-dom";
import "./dashboard3.scss";
import "./dashboard2.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
