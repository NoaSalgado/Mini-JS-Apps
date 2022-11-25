const blackJackModule = (() => {
  "use strict";

  const cardTypes = ["C", "D", "H", "S"];
  const specialCards = ["A", "J", "Q", "K"];
  let scores;
  let deck;

  //DOM Elements
  const startScreen = document.querySelector(".start-screen");
  const restartGameBtn = document.querySelector(".restart-game-btn");
  const startBtn = document.querySelector(".start-screen__btn");
  const askCardBtn = document.querySelector(".ask-card-btn");
  const stopGameBtn = document.querySelector(".stop-btn");
  const scoreSpans = document.querySelectorAll("h3 span");
  const cardsCointainers = document.querySelectorAll(".cards-container");
  const modal = document.querySelector(".modal");
  const modalText = document.querySelector(".modal-text");
  const newGameBtn = document.querySelector(".new-game-btn");
  const quitBtn = document.querySelector(".quit-btn");
  const overlay = document.querySelector(".overlay");

  const startGame = () => {
    deck = createDeck();
    scores = [0, 0];

    scoreSpans.forEach((span) => (span.innerText = 0));
    cardsCointainers.forEach((cardContainer) => (cardContainer.innerHTML = ""));
    askCardBtn.disabled = false;
    stopGameBtn.disabled = false;
  };

  const createDeck = () => {
    deck = [];
    for (let i = 2; i <= 10; i++) {
      for (let cardType of cardTypes) {
        deck.push(i + cardType);
      }
    }

    for (let cardType of cardTypes) {
      for (let specialCard of specialCards) {
        deck.push(specialCard + cardType);
      }
    }

    return _.shuffle(deck);
  };

  const askCard = () => {
    if (deck.length === 0) {
      throw "No cards in the deck!";
    }

    return deck.pop();
  };

  const getCardValue = (card) => {
    const value = card.slice(0, card.length - 1);
    return isNaN(value) ? (value === "A" ? 11 : 10) : value * 1;
  };

  //turn 0: player - turn 1 computer
  const accumulatePoints = (card, turn) => {
    scores[turn] = scores[turn] + getCardValue(card);
    scoreSpans[turn].innerHTML = scores[turn];
    return scores[turn];
  };

  const createCard = (card, turn) => {
    const htmlCard = document.createElement("img");
    htmlCard.src = `./cards/${card}.png`;
    cardsCointainers[turn].append(htmlCard);
  };

  const showResult = (result) => {
    modal.classList.add("display");
    modalText.textContent = result;
    overlay.classList.remove("hidden");
  };

  const hideResult = () => {
    modal.classList.remove("display");
    overlay.classList.add("hidden");
  };

  const getWinner = () => {
    const [playerScore, computerScore] = scores;

    if (computerScore === playerScore) {
      showResult("It´s a draw! 🟰");
    } else if (
      (playerScore > computerScore && playerScore <= 21) ||
      computerScore > 21
    ) {
      showResult("You win! 🏆");
    } else if (
      (computerScore > playerScore && computerScore <= 21) ||
      playerScore > 21
    ) {
      showResult("You lost 🥹");
    }
  };

  const playerTurn = () => {
    const card = askCard();
    createCard(card, 0);
    const playerScore = accumulatePoints(card, 0);

    setTimeout(() => {
      if (playerScore > 21) {
        askCardBtn.disabled = true;
        stopGameBtn.disabled = true;
        showResult("You lost 🥹");
      } else if (playerScore === 21) {
        askCardBtn.disabled = true;
        stopGameBtn.disabled = true;
        showResult("You win! 🏆");
      }
    }, 20);
  };

  const computerTurn = (playerScore) => {
    let computerScore = 0;
    while (computerScore < playerScore && computerScore <= 21) {
      const card = askCard();
      createCard(card, 1);
      computerScore = accumulatePoints(card, scores.length - 1);
    }

    setTimeout(getWinner, 20);
  };

  //Events
  startBtn.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    startGame();
  });

  askCardBtn.addEventListener("click", playerTurn);

  stopGameBtn.addEventListener("click", () => {
    askCardBtn.disabled = true;
    stopGameBtn.disabled = true;
    computerTurn(scores[0]);
  });

  restartGameBtn.addEventListener("click", startGame);

  newGameBtn.addEventListener("click", () => {
    hideResult();
    startGame();
  });

  quitBtn.addEventListener("click", () => {
    hideResult();
    startScreen.classList.remove("hidden");
  });

  return {
    "new-game": startGame,
  };
})();
