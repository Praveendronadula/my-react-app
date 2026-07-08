// External Styles
// Definition
// Create a separate CSS file and write normal CSS inside it.
// Then import the CSS file into the React component.
// React uses className instead of class because class is a reserved keyword in JavaScript.
import React from "react";

import External from "./External_Style";
import "./style.css";

function External() {
  return (
    <>
      <h1 className="heading">
        External CSS
      </h1>

      <button className="btn">
        Submit
      </button>
    </>
  );
}

export default External;