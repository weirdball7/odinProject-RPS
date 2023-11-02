// console.log('Hello World');
let randomNumber;
let playerChoice;

// getting computer choice
const getComputerChoice = () => {
    // randomly output rock, paper, or scissors

    // get random number between 1 and 3
    randomNumber = Math.floor(Math.random() * 4);
    if(randomNumber == 0) {
        // getComputerChoice();
        randomNumber++;
    };
    // console.log(randomNumber);
    
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
            // break;
    };
};
// console.log(getComputerChoice());

// getting players choice
const getPlayerChoice = () => {
    playerChoice = prompt('Please Enter Your choice:');
    playerChoice = playerChoice.toLowerCase();
    // checking players choice is either rock, paper, or, scissors
    if(playerChoice == 'rock' || playerChoice == 'paper' || playerChoice == 'scissors') {
        // turns player choice to all lower case
        // playerChoice.toLowerCase();
        return playerChoice;
    }else{
        // playerChoice = prompt('Please Enter Your choice:');
        getPlayerChoice();
    };
};
// console.log(getPlayerChoice());


// game round logic
const playRound = (playerSelection, computerSelection) => {
    // checking for a tie
    if (playerSelection === computerSelection) {
        return 'Its a tie!';
    }else if (playerSelection == 'rock' && computerSelection == 'paper'){
        return `Player choice: ${playerSelection}\n` + `Computer choice: ${computerSelection}\n` + `Computer wins! paper beats rock!`;

    }else if (playerSelection == 'paper' && computerSelection == 'rock'){
        return `Player choice: ${playerSelection}\n` + `Computer choice: ${computerSelection}\n` + `Player wins! paper beats rock!`;

    }else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        return `Player choice: ${playerSelection}\n` + `Computer choice: ${computerSelection}\n` + `Computer wins! rock beats scissors!`;

    }else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        return `Player choice: ${playerSelection}\n` + `Computer choice: ${computerSelection}\n` + `Player wins! rock beats scissors!`;

    }else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        return `Player choice: ${playerSelection}\n` + `Computer choice: ${computerSelection}\n` + `Computer wins! scissors beats paper!`;
        
    }else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        return `Player choice: ${playerSelection}\n` + `Computer choice: ${computerSelection}\n` + `Player wins! scissors beats paper!`;
    };
};
console.log(playRound(getPlayerChoice(), getComputerChoice()));
