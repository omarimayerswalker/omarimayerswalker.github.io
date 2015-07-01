////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////


function getPlayerMove(move) {
    return move || getInput();
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    /* Your Expression */
}


function getComputerMove(move) {
    return move || randomPlay();
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    /* Your Expression */
}

var playerResult;
var computerResult;

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if(playerMove === 'rock' && computerMove === 'rock'){
        playerResult = 'rock';
        computerResult = 'rock';
        winner = 'tie';
    } else if (playerMove === 'rock' && computerMove === 'paper'){
        playerResult = 'rock';
        computerResult = 'paper';
        winner = 'computer';
    } else if (playerMove === 'rock' && computerMove === 'scissors'){
        playerResult = 'rock';
        computerResult = 'scissors';
        winner = 'player';
    } else if (playerMove === 'paper' && computerMove === 'paper'){
        playerResult = 'paper';
        computerResult = 'paper';
        winner = 'tie';
    } else if (playerMove === 'paper' && computerMove === 'rock'){
        playerResult = 'paper';
        computerResult = 'rock';
        winner = 'player';
    } else if (playerMove === 'paper' && computerMove === 'scissors'){
        playerResult = 'paper';
        computerResult = 'scissors';
        winner = 'computer';
    } else if (playerMove === 'scissors' && computerMove === 'scissors'){
        playerResult = 'scissors';
        computerResult = 'scissors';
        winner = 'tie';
    } else if (playerMove === 'scissors' && computerMove === 'rock'){
        playerResult = 'scissors';
        computerResult = 'rock';
        winner = 'computer';
    } else if (playerMove === 'scissors' && computerMove === 'paper'){
        playerResult = 'scissors';
        computerResult = 'paper';
        winner = 'player';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors.");
    var playerWins = 0;
    var computerWins = 0;
    var results;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while(playerWins < 5 && computerWins < 5){
        results = getWinner(getPlayerMove(), getComputerMove());
        if (results == 'player'){
            playerWins++;
            console.log('Player Wins!');
            console.log('Player chose ' + playerResult + ' and Computer chose ' + computerResult + '.');
            console.log('The score is currently: Player ' + playerWins + ' to Computer ' + computerWins + '.\n');
        } else if (results == 'computer'){
            computerWins++;
            console.log('Computer Wins!');
            console.log('Computer chose ' + computerResult + ' and Player chose ' + playerResult + '.');
            console.log('The score is currently: Player ' + playerWins + ' to Computer ' + computerWins + '.\n');
        } else {
            console.log("It's a tie!");
            console.log('Player and Computer both chose ' + playerResult + '.');
            console.log('The score is still: Player ' + playerWins + ' to Computer ' + computerWins + '.\n');
        }
    }
    if (playerWins == 5){
        console.log('Player has won ' + playerWins + ' to ' + computerWins + '! Nice job! \n');
    } else
        console.log('Computer has won ' + computerWins + ' to ' + playerWins + '! Try again! \n');
    return [playerWins, computerWins];
}
playToFive();
