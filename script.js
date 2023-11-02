// console.log('Hello World');
let randomNumber;
let playerChoice;

// getting computer choice
const getComputerChoice = () => {
    // randomly output rock, paper, or scissors

    // get random number between 1 and 3
    randomNumber = Math.floor(Math.random() * 4);
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
            break;
    };
};
// console.log(getComputerChoice());

// getting players choice
const getPlayerChoice = () => {
    playerChoice = prompt('Please Enter Your choice:');
    // checking players choice is either rock, paper, or, scissors
    if(playerChoice == 'rock' || playerChoice == 'paper' || playerChoice == 'scissors') {
        // turns player choice to all lower case
        playerChoice.toLowerCase();
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
        return 'Computer wins! paper beats rock!';
    }else if (playerSelection == 'paper' && computerSelection == 'rock'){
        return 'Player wins! paper beats rock!'
    }else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        return 'Computer wins! rock beats scissors!';
    }else if (playerSelection == 'rock' && computerSelection == 'scisors'){
        return 'Player wins! rock beats scissors!';
    }else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        return 'Computer wins! scissors beats paper!';
    }else if(playerSelection == 'scissors' && computerSelection == 'rock'){
        return 'Player wins! scissors beats paper!'
    };
};
console.log(playRound(getPlayerChoice(), getComputerChoice()));
