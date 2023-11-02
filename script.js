// console.log('Hello World');
let randomNumber;
let playerChoice;
let playerWinCounter = 0;
let computerWinCounter = 0;

// getting computer choice
const getComputerChoice = () => {
        // randomly output rock, paper, or scissors
    // get random number between 1 and 3
    randomNumber = Math.floor(Math.random() * 4);
    if(randomNumber == 0) {
        randomNumber++;
    };    
    // main logic matches random number with either rock, paper, or scissors
    switch(randomNumber) {
        // if number is 1 return rock
        case 1:
            randomNumber = 'rock';
            return randomNumber;
            break;
        // if number is 2 return paper
        case 2:
            randomNumber = 'paper';
            return randomNumber;
            break;
        // if number is 3 return scissors
        case 3:
            randomNumber = 'scissors';
            return randomNumber;
    };
};

// getting players choice
const getPlayerChoice = () => {
    playerChoice = prompt('Please Enter Your choice:');
    // turns player choice to all lower case
    playerChoice = playerChoice.toLowerCase();
    // checking players choice is either rock, paper, or, scissors
    if(playerChoice == 'rock' || playerChoice == 'paper' || playerChoice == 'scissors') {
        return playerChoice;
    }else{
        getPlayerChoice();
    };
};
// console.log(getPlayerChoice());


    // game round logic
const playRound = (playerSelection, computerSelection) => {
    // checking for a tie
    if (playerSelection === computerSelection) {
        return `Player choice: ${playerSelection}\n` + `Computer choice: ${computerSelection}\n` + 'Its a tie!';
    }else if (playerSelection == 'rock' && computerSelection == 'paper'){
        computerWins();
        return `Player choice: ${playerSelection}\n` + 
        `Computer choice: ${computerSelection}\n` + 
        `Computer wins! paper beats rock!`;

    }else if (playerSelection == 'paper' && computerSelection == 'rock'){
        playerWins();
        return `Player choice: ${playerSelection}\n` + 
        `Computer choice: ${computerSelection}\n` + 
        `Player wins! paper beats rock!`;

    }else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        computerWins();
        return `Player choice: ${playerSelection}\n` + 
        `Computer choice: ${computerSelection}\n` + 
        `Computer wins! rock beats scissors!`;

    }else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        playerWins();
        return `Player choice: ${playerSelection}\n` + `
        Computer choice: ${computerSelection}\n` + 
        `Player wins! rock beats scissors!`;

    }else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        computerWins();
        return `Player choice: ${playerSelection}\n` + 
        `Computer choice: ${computerSelection}\n` + 
        `Computer wins! scissors beats paper!`;
        
    }else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        playerWins();
        return `Player choice: ${playerSelection}\n` + 
        `Computer choice: ${computerSelection}\n` + 
        `Player wins! scissors beats paper!`;
    };
};

    // counting wins for computer and player
// counting wins for player
const playerWins = () => {
    // matching counter to counter of last round
    playerWinCounter = playerWinCounter;
    // updating counter by one
    playerWinCounter++;
    // returning updated counter
    return playerWinCounter;
};


// counting wins for computer 
const computerWins = () => {
    // matching counter to counter of last round
    computerWinCounter = computerWinCounter;
    // updating counter by one
    computerWinCounter++;
    // returning updated counter
    return computerWinCounter;
};


    // logic for game of 5 rounds 
const game = () => {
    for(i = 1; i < 6; i++) {
        // showing round number
        console.log(`Round Number:${i}/5\n`,
        // playing round
        playRound(getPlayerChoice(), getComputerChoice()), 
        // showing score
        `\nComputer Score: ${computerWinCounter}`, 
        `\nPlayer Score: ${playerWinCounter}`);
    };

    // output game ending message; Who won?
    if(computerWinCounter == playerWinCounter){
        return 'Game is a tie!'
    }else if(computerWinCounter > playerWinCounter){
        return 'Computer wins the game!';
    }else{
        return 'Player wins the game';
    };
};

console.log(game());