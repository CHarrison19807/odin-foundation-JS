function game() {

    const CPUARRAY = ["rock","paper","scissors"];

    let playerWinCount = 0;
    let computerWinCount = 0;
    let i = 0;

    function getComputerChoice() {
        return CPUARRAY[Math.floor(Math.random() * CPUARRAY.length)];
    }
    
    function getPlayerChoice() {
        let input = prompt("Pick your weapon!");
        return input.toLowerCase();
    }    

    let computerSelection, playerSelection;
    function playRound(playerSelection, computerSelection) {
        
        //console.log(playerSelection);
        //console.log(computerSelection);

        if (playerSelection == "rock") {
            if (computerSelection == "paper") {
                return "Computer Win";
            }
            if (computerSelection == "scissors") {
                return "Player Win";
            }
        }
    
        else if (playerSelection == "paper") {
            if (computerSelection == "scissors") {
                return "Computer Win";
            }
            if (computerSelection == "rock") {
                return "Player Win";
            }
        }
    
        else if (playerSelection == "scissors") {
            if (computerSelection == "paper") {
                return "Player Win";
            }
            if (computerSelection == "rock") {
                return "Computer Win";
            }
        }
    
        else {
            return "Draw";
        }
    }

    while (i < 5) {


        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        let roundOutcome = playRound(playerSelection, computerSelection);


        if (roundOutcome == "Player Win") {
            playerWinCount++;
        }

        if (roundOutcome == "Computer Win") {
            computerWinCount++;
        }

        i++
    }

    //console.log(playerWinCount);
    //console.log(computerWinCount);

    if (playerWinCount > computerWinCount) {
        console.log("You win the game!");
    }

    else if (computerWinCount > playerWinCount) {
        console.log("You lose the game!");
    }

    else {
        console.log("It's a draw!");
    }
}

game();
