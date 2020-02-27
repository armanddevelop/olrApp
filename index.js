import React from "react";
import { render } from "react-dom";
import App from "./app";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";

render(
  <Router>
    <App></App>
  </Router>,
  document.getElementById("app")
);
