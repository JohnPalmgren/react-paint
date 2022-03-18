import "../App.css";
import React from "react";
import Clear from "./TestClear";

const Menu = ({ setLineWidth, setLineColor, clearCanvas }) => {
  return (
    <div className="menu">
      <label className="icon brush"></label>
      <input
        className="slider"
        type="range"
        min="3"
        max="20"
        onChange={(e) => {
          setLineWidth(e.target.value);
        }}
      />
      <label className="icon palette"></label>
      <input
        className="icon color"
        type="color"
        onChange={(e) => {
          setLineColor(e.target.value);
        }}
      />
      <Clear clearCanvas={clearCanvas} />
    </div>
  );
};
export default Menu;
