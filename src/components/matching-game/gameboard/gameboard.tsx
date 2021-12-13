import nicknames from "../../../assets/nickName.json";
import pineapple from "./../../assets/pineapple.svg";
import Card from "./card";
import { card, cardData } from "../../../models/card";
import { useState, useEffect, useRef } from "react";
import GameControls from "./game-controls";
import EndGameDialog from "./endgame-dialog";

function getCards(allCards: cardData[]): card[] {
  let arrayOfCards: any[] = [];
  for (let nickname of allCards) {
    if (arrayOfCards.length < 16) {
      arrayOfCards.push({
        value: nickname.cardNumber,
        label: nickname.nickname,
      });
      arrayOfCards.push({
        value: nickname.cardNumber,
        label: nickname.episode,
      });
    }
  }
  return shuffleCards(arrayOfCards);
}

function shuffleCards(deckOfCards: any[]): any[] {
  let shuffledDeck = [];
  while (deckOfCards.length > 0) {
    let randomNumber = Math.floor(Math.random() * deckOfCards.length);
    shuffledDeck.push(deckOfCards[randomNumber]);
    deckOfCards.splice(randomNumber, 1);
  }
  return shuffledDeck;
}

function Gameboard({ playingCards }: { playingCards: card[] }) {
  const [cards, setCards] = useState(playingCards);
  const [moves, setMoves] = useState(0);
  const [openCards, setOpenCards] = useState<number[]>([]);
  const [clearedCards, setClearedCards] = useState<number[]>([]);
  const [isDisabled, setDisabled] = useState(false);
  const [endGame, setEndGame] = useState(false);
  const [startGame, setStartGame] = useState(false);

  function handleClick(i: number) {
    setMoves((prev) => prev + 1);
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, i]);
    } else {
      setOpenCards([i]);
    }

    // console.log(i, openCards);
  }
  const checkMatch = () => {
    setDisabled(true);
    const [first, second] = openCards;
    if (cards[first].value === cards[second].value) {
      setTimeout(() => {
        setClearedCards((prev) => [...prev, first, second]);
        setOpenCards([]);
        setDisabled(false);
      }, 1000);
    } else {
      setTimeout(() => {
        setOpenCards([]);
        setDisabled(false);
      }, 1000);
    }
  };

  useEffect(() => {
    if (openCards.length === 2) {
      checkMatch();
    }
  }, [openCards]);

  useEffect(() => {
    if (clearedCards.length === 16) {
      setEndGame(true);
      console.log("game over");
    }
  });

  const reset = () => {
    setEndGame(false);
    setMoves(0);
    setOpenCards([]);
    setClearedCards([]);
  };
  const checkIsFlipped = (i: number) => openCards.includes(i);
  const checkIsRemoved = (i: number) => clearedCards.includes(i);
  return (
    <div>
      <GameControls moves={moves} />
      {/* <h2 className="pinneapple-yellow">{moves}</h2> */}
      <div className="gameboard">
        {cards.map((card, index: number) => (
          <Card
            index={index}
            key={card.label}
            disabled={isDisabled}
            label={card.label}
            flipped={checkIsFlipped(index)}
            removed={checkIsRemoved(index)}
            handleClick={(i) => handleClick(i)}
          />
          // <div className="card" key={card.label} onClick={handleClick}>
          //   <div className="card-back"></div>
          //   <div className="card-front">{card.label}</div>
          // </div>
        ))}
      </div>
      {endGame && <EndGameDialog moves={moves} handleReset={reset} />}
    </div>
  );
}

export default Gameboard;
