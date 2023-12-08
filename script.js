// console.log('Hello World');
let randomNumber;
// let playerChoice;
let div;
let playerWinCounter = 0;
let computerWinCounter = 0;
let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');
const gameContainer = document.querySelector('#container');



// const Paper = () => {
//     console.log('player chose paper');
//     playRound('paper', getComputerChoice);
// };

// const Scissors = () => {
//     console.log('player chose scissors');
//     playRound('scissors', getComputerChoice);
// };

// const Rock = () =>{
//     console.log('player chose rock');
//     playRound('rock', getComputerChoice);
// };


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


// getting players choice
    // game round logic
const playRound = (playerSelection, computerSelection) => {
    // checking for a tie
    if (playerSelection === computerSelection) {
        console.log(computerSelection);
        div = document.createElement('div');
        div.innerText = `Player choice: ${playerSelection}\n` + `Computer choice: ${computerSelection}\n` + 'Its a tie!';
        gameContainer.appendChild(div);
    }else if (playerSelection == 'rock' && computerSelection == 'paper'){
        console.log(computerSelection);
        computerWins();
        div = document.createElement('div');
        div.innerText = `Player choice: ${playerSelection}\n` + 
        `Computer choice: ${computerSelection}\n` + 
        `Computer wins! paper beats rock!`;
        gameContainer.appendChild(div);

    }else if (playerSelection == 'paper' && computerSelection == 'rock'){
        console.log(computerSelection);
        playerWins();
        div = document.createElement('div');
        div.innerText = `Player choice: ${playerSelection}\n` + 
        `Computer choice: ${computerSelection}\n` + 
        `Player wins! paper beats rock!`;
        gameContainer.appendChild(div);

    }else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        console.log(computerSelection);
        computerWins();
        div = document.createElement('div');
        gameContainer.innerText = `Player choice: ${playerSelection}\n` + 
        `Computer choice: ${computerSelection}\n` + 
        `Computer wins! rock beats scissors!`;
        gameContainer.appendChild(div);

    }else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        console.log(computerSelection);
        playerWins();
        div = document.createElement('div');
        div.innerText = `Player choice: ${playerSelection}\n` + `
        Computer choice: ${computerSelection}\n` + 
        `Player wins! rock beats scissors!`;
        gameContainer.appendChild(div);

    }else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        console.log(computerSelection);
        computerWins();
        div = document.createElement('div');
        div.innerText = `Player choice: ${playerSelection}\n` + 
        `Computer choice: ${computerSelection}\n` + 
        `Computer wins! scissors beats paper!`;
        gameContainer.appendChild(div);
        
    }else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        console.log(computerSelection);
        playerWins();
        div = document.createElement('div');
        div.innerText = `Player choice: ${playerSelection}\n` + 
        `Computer choice: ${computerSelection}\n` + 
        `Player wins! scissors beats paper!`;
        gameContainer.appendChild(div);
    };
};

if (rockBtn) {
    rockBtn.addEventListener('click', playRound('rock', getComputerChoice()));
};

if (paperBtn) {
    paperBtn.addEventListener('click', playRound('paper', getComputerChoice()));
};

if (scissorsBtn) {
    scissorsBtn.addEventListener('click', playRound('scissors', getComputerChoice()));
};




    // logic for game of 5 rounds 
// const game = () => {
//     for(i = 1; i < 6; i++) {
//         // showing round number
//         console.log(`Round Number:${i}/5\n`,
//         // playing round
//         playRound(getPlayerChoice(), getComputerChoice()), 
//         // showing score
//         `\nComputer Score: ${computerWinCounter}`, 
//         `\nPlayer Score: ${playerWinCounter}`);
//     };

//     // output game ending message; Who won?
//     if(computerWinCounter == playerWinCounter){
//         return 'Game is a tie!'
//     }else if(computerWinCounter > playerWinCounter){
//         return 'Computer wins the game!';
//     }else{
//         return 'Player wins the game';
//     };
// };

// console.log(playRound());