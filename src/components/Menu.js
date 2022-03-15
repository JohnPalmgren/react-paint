import "../App.css";
import React from "react";

const Menu = ({ setLineWidth, setLineColor }) => {
    return (
        <div className="menu">
            <label>Brush Width</label>
            <input
                type="range"
                min="3"
                max="20"
                onChange={(e) => {
                    setLineWidth(e.target.value);
                }}
            />
            <label>Brush Colour </label>
            <input
                type="color"
                onChange={(e) => {
                    setLineColor(e.target.value);
                }}
            />
        </div>
    )
}
export default Menu;