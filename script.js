function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    
    return options[randomIndex];
}

function getPlayerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const userChoice = prompt('Choose an option (rock, paper, or scissors):');
    return options.includes(userChoice.toLowerCase()) ? userChoice.toLowerCase() : getPlayerChoice();
}