import { useState } from "react";

interface EndGameDialogProps {
  moves: number;
  handleReset: () => any;
}

function EndGameDialog({ moves, handleReset }: EndGameDialogProps) {
  return (
    <div className="overlay flex-center">
      <div className="dialog flex-center">
        <h1>Game Over!</h1>
        <div className="result-text">
          <h3>You completed Psych Nickname matching in {moves} moves!</h3>
        </div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default EndGameDialog;
