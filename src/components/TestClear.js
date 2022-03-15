import "../App.css";

const ClearButton = (props) => {

  return (
    <button className = "icon bin" onClick={() => props.clearCanvas()}></button>)
};

export default ClearButton;
