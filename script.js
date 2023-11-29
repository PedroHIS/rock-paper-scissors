function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    
    return options[randomIndex];
}
/*
function getPlayerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const userChoice = prompt('Choose an option (rock, paper, or scissors):');
    return options.includes(userChoice.toLowerCase()) ? userChoice.toLowerCase() : getPlayerChoice();
}
*/


function playRound(playerSelection, computerSelection) {
    /*
    Taking advantage of the array organization. If the computer's option is different from the player's and
    is immediately to the right of the player's option, then the player loses:
    Case 1: [rock(Player) -> paper(Computer) -> scissors]
    If it's immediately to the left, then the player wins:
    Case 2: [rock <- paper(Computer) <- scissors(Player)]
    */
    const options = ['rock', 'paper', 'scissors'];
    const indexPlayer = options.indexOf(playerSelection);
    
    if (playerSelection === computerSelection) {
        return [0, `It's a tie! Both chose ${playerSelection}`];
    }
    
    let correctionLastElement = 0;
    if (playerSelection === 'scissors') {
        correctionLastElement = 3;
    }

    const rightElement = options[(indexPlayer + 1) - correctionLastElement];
    if (computerSelection === rightElement) {
        return [1, `You Lose! ${computerSelection} beats ${playerSelection}`];
    }
    return [2, `You Win! ${playerSelection} beats ${computerSelection}`];
}

function changeBrightness(idImage) {
    document.getElementById(idImage).style.filter='brightness(75%)';
}

function resetBrightness(idImage) {
    document.getElementById(idImage).style.filter='brightness(100%)';
}

let isRunning = false;

function game(playerSelection){
    if(isRunning){
        return;
    }
    
    isRunning = true;
    
    const idPlayerSelection = playerSelection + '-player';
    const computerSelection = getComputerChoice();
    const idComputerSelection = computerSelection + '-computer';
    
    changeBrightness(idPlayerSelection);
    changeBrightness(idComputerSelection);
    
    const resultRound = playRound(playerSelection, computerSelection);
    
    console.log(resultRound[1]);
    document.getElementById("text-output").innerHTML = resultRound[1];

    setTimeout(function() {
        resetBrightness(idPlayerSelection);
        resetBrightness(idComputerSelection);
        isRunning = false;
    }, 1500);
}

/*
function game() {
    const numberOfRounds = 5;
    let playerWinsCount = 0;
    let computerWinsCount = 0;

    for (let i = 0; i < numberOfRounds; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();

        const resultRound = playRound(playerSelection, computerSelection);
        if (resultRound[0]) {
            resultRound[0] === 1 ? computerWinsCount++ : playerWinsCount++;
        }
        console.log(resultRound[1]);
    }

    const winner = playerWinsCount > computerWinsCount ? "Player Wins!" : (playerWinsCount < computerWinsCount ? "Computer Wins!" : "Tie!");
    console.log(winner);
}

game();
*/