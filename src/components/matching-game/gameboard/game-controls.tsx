import { useState } from "react";

interface GameControlsProps {
  moves: number;
}

function GameControls({ moves }: GameControlsProps) {
  const [showControls, setShowControls] = useState(true);
  return (
    <div id="game-control-container">
      <div id="gameControls" onMouseOver={() => setShowControls(true)}>
        <h2>{moves}</h2>
        <h2 className="psych-green">MOVES</h2>
      </div>
      {showControls && (
        <div id="control-buttons" onMouseLeave={() => setShowControls(false)}>
          <button className="control-buttons ">
            <i className="fas fa-cogs"></i>
          </button>
          <button className="control-buttons">
            <i className="fas fa-redo"></i>
          </button>
          <button className="control-buttons">
            <i className="fas fa-pause"></i>
          </button>
        </div>
      )}
    </div>
  );
}

export default GameControls;
