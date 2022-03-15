
import Canvas from "./components/Canvas"
import Button from "./components/TestClear.js"
import { useRef } from "react";

function App() {

  //hoisting these refs to the parent app lets us use them with the button
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const clearCanvas = () => {contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);}
  return (
    <div>
    <Canvas canvasRef={canvasRef} contextRef={contextRef} />
    <Button clearCanvas={clearCanvas} />
    
    </div>
  );
}

export default App;
