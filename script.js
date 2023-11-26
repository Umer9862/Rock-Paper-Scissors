const CHOICES = ["rock", "paper", "scissors"];
const ROUNDS_TO_WIN = 5;

const getComputerChoice = () => {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
};

const playRound = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return { result: "tie" };
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return { result: "you win" };
  } else {
    return { result: "you lose" };
  }
};

const getUserChoice = () => {
  return prompt("rock, paper, scissors").toLowerCase();
};

const gameLogic = () => {
  let playerScore = 0;
  let computerScore = 0;

  for (let index = 0; index < ROUNDS_TO_WIN; index++) {
    const playerChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    const roundResult = playRound(playerChoice, computerChoice);

    console.log(roundResult.result);

    if (roundResult.result === "you win") {
      playerScore++;
      console.log(`Player Score: ${playerScore}`);
    } else if (roundResult.result === "you lose") {
      computerScore++;
      console.log(`Computer Score: ${computerScore}`);
    }

    if (playerScore === ROUNDS_TO_WIN || computerScore === ROUNDS_TO_WIN) {
      break;
    }
  }

  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else if (playerScore < computerScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("It's a tie!");
  }
};

gameLogic();
