import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <canvas></canvas>
        <button
          className="count-screen"
          onClick={() => setCount((count) => count + 1)}
        >
          {count}
        </button>
      </div>
    </>
  );
}

export default App;
