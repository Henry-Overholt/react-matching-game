interface GameControlsProps {
  moves: number;
}

function GameControls({ moves }: GameControlsProps) {
  return (
    <div id="gameControls">
      <h2>{moves}</h2>
    </div>
  );
}

export default GameControls;
