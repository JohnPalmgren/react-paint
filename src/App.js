
import { useRef } from "react";
import Canvas from "./components/Canvas"
import ClearButton from "./components/TestClear"



function App() {
  const canvasCompRef = useRef()
  return (
    <div>
    <Canvas ref={canvasCompRef} />
    <ClearButton clearCanvas={() => canvasCompRef.current.clearCanvas()} />
    </div>
  );
}

export default App;
