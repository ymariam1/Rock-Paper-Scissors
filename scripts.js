let computerSelection;
ties = 0;
pWins = 0;
cWins = 0;

let buttons = document.querySelectorAll(".button");
const my_array = ["rock", "paper", "scissors"];

function computerPick() {
  c = Math.floor(Math.random() * 3);
  return my_array[c];
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const img = button.querySelector("img");
    playerSelection = img.alt.toLowerCase();

    playRound(playerSelection, computerSelection);
    if (pWins === 5 || cWins === 5) {
      declareWinner();
    }
  });
});

function resetGame() {
  ties = 0;
  pWins = 0;
  cWins = 0;
  document.querySelector(".playerScore").textContent = "Your Score: 0";
  document.querySelector(".computerScore").textContent = "Computer Score: 0";
  document.querySelector(".ties").textContent = "Ties: 0";
  document.querySelector(".winner").textContent = "";
  document.querySelector(".playerChoice").textContent = "";
  document.querySelector(".computerChoice").textContent = "";
  document.querySelector(".reset").style.display = "none";
}
//run a round
function playRound(playerSelection, computerSelection) {
  computerSelection = computerPick();
  if (playerSelection === computerSelection) {
    ties += 1;
    document.querySelector(".ties").textContent = `Ties: ${ties}`;
    document.querySelector(".playerChoice").textContent =
      `You Chose: ` + capitalize(playerSelection);
    document.querySelector(".computerChoice").textContent =
      `Computer Chose: ` + capitalize(computerSelection);
  }
  //if player beats computer increase user score, and print result to webpage
  else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    pWins += 1;
    document.querySelector(
      ".playerScore"
    ).textContent = `Player Score: ${pWins}`;
    document.querySelector(".playerChoice").textContent =
      `You Chose: ` + capitalize(playerSelection);
    document.querySelector(".rndWinner").textContent =
      `Good Job ` +
      capitalize(playerSelection) +
      ` beats ` +
      capitalize(computerSelection);
    document.querySelector(".computerChoice").textContent =
      `Computer Chose: ` + capitalize(computerSelection);
  } else {
    cWins += 1;
    document.querySelector(
      ".computerScore"
    ).textContent = `Computer Score: ${cWins}`;
    document.querySelector(".playerChoice").textContent =
      `You Chose: ` + capitalize(playerSelection);
    document.querySelector(".computerChoice").textContent =
      `Computer Chose: ` + capitalize(computerSelection);
    document.querySelector(".rndWinner").textContent =
      ` Sadly ` +
      capitalize(computerSelection) +
      ` beats ` +
      capitalize(playerSelection);
  }
}
function declareWinner() {
  if (pWins === 5) {
    document.querySelector(".winner").textContent =
      "Congrats, You beat the computer!";
    document.querySelector(".reset").style.display = "block";
  } else {
    document.querySelector(".winner").textContent = "Sorry, You lost";
    document.querySelector(".reset").style.display = "block";
  }
}
const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  resetGame();
});
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
