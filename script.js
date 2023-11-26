const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
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

const gameLogic = () => {
  let playerScore = 0;
  let computerScore = 0;

  for (let index = 0; index < 5; index++) {
    const playerChoice = prompt("rock, paper, scissors").toLowerCase();
    const ComputerChoice = getComputerChoice();
    const roundResult = playRound(playerChoice, ComputerChoice);

    console.log(roundResult.result);

    if (roundResult.result === "you win") {
      playerScore++;
      console.log("Player Score: " + playerScore);
    } else if (roundResult.result === "you lose") {
      computerScore++;
      console.log("Computer Score: " + computerScore);
    }

    if (playerScore === 5 || computerScore === 5) {
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
