import React from "react";
import { render } from "react-dom";

function Hola() {
  return <p>hola desde home test</p>;
}

render(<Hola></Hola>, document.getElementById("app"));
