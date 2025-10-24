let userScore = 0;
let comScore = 0;

// Get all clickable choices (rock, paper, scissors)
const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
const userScorePara = document.getElementById("user-score");
const comScorePara = document.getElementById("com-score");

// Add event listeners for user clicks
choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

// Function to generate computer choice randomly
const getComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};

// Function to play a round
const playGame = (userChoice) => {
  const computerChoice = getComputerChoice();
  const winner = getWinner(userChoice, computerChoice);

  if (winner === "draw") {
    msg.textContent = `It's a Draw! You both chose ${userChoice.toUpperCase()}`;
    msg.style.backgroundColor = "#ffc107";
  } else if (winner === "user") {
    userScore++;
    userScorePara.textContent = userScore;
    msg.textContent = `🎉 You Win! ${userChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`;
    msg.style.backgroundColor = "#4caf50";
  } else {
    comScore++;
    comScorePara.textContent = comScore;
    msg.textContent = `💻 Computer Wins! ${computerChoice.toUpperCase()} beats ${userChoice.toUpperCase()}`;
    msg.style.backgroundColor = "#f44336";
  }
};

// Function to check who wins
const getWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "draw";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "user";
  } else {
    return "computer";
  }
};
