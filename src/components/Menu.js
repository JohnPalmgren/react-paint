import "../App.css";
import React from "react";
import Clear from "./TestClear";

const Menu = ({ setLineWidth, setLineColor, clearCanvas }) => {
  return (
    <div className= "menu-container">
    <div className="menu">
    <div className="slider-container">
      <label className="icon brush"></label>

      <input
        className="slider"
        type="range"
        min="3"
        max="20"
        step="0.01"
        onChange={(e) => {
          setLineWidth(e.target.value);
        }}
      />
      </div>


      <input
        className="color"
        id="color"
        type="color"
        onChange={(e) => {
          setLineColor(e.target.value);
        }}
      />
      <Clear clearCanvas={clearCanvas} />
      <a href="https://github.com/BathSpaWebDev/react-paint"><div className="githubIcon"></div></a>
    </div>
    </div>
  );
};
export default Menu;
