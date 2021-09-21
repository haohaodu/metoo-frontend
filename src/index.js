/** @format */

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import axios from "axios";
import "./index.css";

if (process.env.REACT_APP_DEPLOY_ENV === "dev") {
  console.log("react app is dev.");
  axios.defaults.baseURL = process.env.REACT_APP_DEV_API_URL;
} else {
  console.log("react app is prod.");
  axios.defaults.baseURL = process.env.REACT_APP_PROD_API_URL;
}

console.log("REACT_APP_DEPLOY_ENV: ", process.env.REACT_APP_DEPLOY_ENV);
console.log("axios.defaults.baseURL: ", axios.defaults.baseURL);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
