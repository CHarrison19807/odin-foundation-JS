
let playerWinCount = 0;
let computerWinCount = 0;

let playerSelection, computerSelection;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');


rock.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});

paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

scissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});




const container = document.querySelector('#container');

const displayScores = document.createElement('p');
displayScores.textContent = playerWinCount + ' - ' + computerWinCount;
container.appendChild(displayScores);

const textDisplay = document.createElement('p');
textDisplay.textContent = "Can you beat the computer?";
container.appendChild(textDisplay);





function getComputerChoice() {
    const CPUARRAY = ["rock","paper","scissors"];
    return CPUARRAY[Math.floor(Math.random() * CPUARRAY.length)];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            computerWinCount++;
            textDisplay.textContent = "Paper beats rock, you lose!";
        }
        else if (computerSelection == "scissors") {
            playerWinCount++;
            textDisplay.textContent = "Paper beats scissors, you win!";
        }
        else {
            textDisplay.textContent = "It's a draw!";
        }
    }
    
    else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            computerWinCount++;
            textDisplay.textContent = "Scissors beats paper, you lose!";
        }
        else if (computerSelection == "rock") {
            playerWinCount++;
            textDisplay.textContent = "Paper beats rock, you win!";
        }
        else {
            textDisplay.textContent = "It's a draw!";
        }
        }
    
    else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            playerWinCount++;
            textDisplay.textContent = "Scissors beats paper, you win!";
        }
        else if (computerSelection == "rock") {
            computerWinCount++;
            textDisplay.textContent = "Rock beats scissors, you lose!";
        }
        else {
            textDisplay.textContent = "It's a draw!";
        }
    }

    displayScores.textContent = playerWinCount + ' - ' + computerWinCount;
    checkWinner();
}

function checkWinner() {


    if (playerWinCount == 5) {
        textDisplay.textContent = "Game over, you win!"
        playerWinCount = 0;
        computerWinCount = 0;
    }
    else if (computerWinCount == 5) {
        textDisplay.textContent = "Game over, you lose!"
        playerWinCount = 0;
        computerWinCount = 0;
    }
}



    

