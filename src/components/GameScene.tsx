import { useState } from "react";

const GameScene = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <canvas id="canvas"></canvas>
      <button
        className="count-screen"
        onClick={() => setCount((count) => count + 1)}
      >
        {count}
      </button>
    </div>
  );
};

export default GameScene;
