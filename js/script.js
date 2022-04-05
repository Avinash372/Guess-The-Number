"use strict";
// Global variables
const btnCheck = document.querySelector(".check");
let secretNum = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

// function to display different texts varies to the condition
const displayMessage = (message) =>
  (document.querySelector(".message").textContent = message);

// click event for the whole game
btnCheck.addEventListener("click", () => {
  const inputGuess = +document.querySelector(".guess").value;
  if (!inputGuess) {
    document.querySelector(".message").textContent = "No Number!";
  } else if (inputGuess === secretNum) {
    displayMessage("Congratulations You Win!!!");
    document.querySelector(".number").textContent = secretNum;
    document.querySelector(".score").value = score;
    document.body.style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (inputGuess !== secretNum) {
    if (score > 1) {
      displayMessage(
        inputGuess > secretNum ? "Number is too High!" : "Number is too Low!"
      );
      score--;
      document.querySelector(".score").textContent = +score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Reset Functionality
document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.body.style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
