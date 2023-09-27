let userScore = 0;
let computerScore = 0;
let username = "User";

const gameResults = [];

document.getElementById("start-button").addEventListener("click", () => {
    username = document.getElementById("username").value || "User";
    document.getElementById("container").style.display = "block";
});

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        userScore++;
        return `${username} wins with ${userChoice} against Computer's ${computerChoice}!`;
    } else {
        computerScore++;
        return `Computer wins with ${computerChoice} against ${username}'s ${userChoice}!`;
    }
}

function updateScore() {
    document.getElementById("user-score").textContent = userScore;
    document.getElementById("computer-score").textContent = computerScore;

    if (userScore > computerScore) {
        document.getElementById("user-score").textContent += ' 👑';
    } else if (computerScore > userScore) {
        document.getElementById("computer-score").textContent += ' 👑';
    }
}
function formatTimestamp(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}
function playGame(userChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    const timestamp = formatTimestamp(new Date());

    const gameResult = {
        timestamp,
        result,
    };
    gameResults.push(gameResult);

    const resultsList = document.getElementById("results-list");
    const listItem = document.createElement("li");
    listItem.textContent = '⏱'+`${timestamp}: ${result}`;
    resultsList.appendChild(listItem);

    updateScore();
}

document.getElementById("rock").addEventListener("click", () => playGame("Rock"));
document.getElementById("paper").addEventListener("click", () => playGame("Paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("Scissors"));
