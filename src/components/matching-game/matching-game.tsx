import HeaderComponent from "./header";
import Gameboard from "./gameboard/gameboard";
import { card, cardData } from "./../../models/card";
import nicknames from "./../../assets/nickName.json";

function getCards(): card[] {
  let arrayOfCards: any[] = [];
  for (let nickname of nicknames) {
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
  console.log("hello");
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

function MatchingGame() {
  return (
    <div>
      <HeaderComponent />
      <Gameboard playingCards={getCards()} />
    </div>
  );
}

export default MatchingGame;
