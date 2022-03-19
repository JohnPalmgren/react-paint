
import Canvas from "./components/Canvas"
import Heading from "./components/Heading";
import Menu from "./components/Menu";
import { useRef, useState } from "react";

function App() {

  //hoisting these refs to the parent app lets us use them with the button
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const [lineWidth, setLineWidth] = useState(5);
  const [lineColor, setLineColor] = useState("#f3722c");

  const clearCanvas = () => {contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);}
  return (
    <div className="background" style={{ backgroundColor: lineColor }}>
      <Heading />
      <Canvas
        canvasRef={canvasRef}
        contextRef={contextRef}
        lineWidth={lineWidth}
        lineColor={lineColor}
      />
      <Menu
        setLineColor={setLineColor}
        setLineWidth={setLineWidth}
        clearCanvas={clearCanvas}
      />
    </div>
  );
}

export default App;
