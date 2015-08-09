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
    move = move || getInput();
    console.log("### You chose " + move + " ###");
    return move;
}

function getComputerMove(move) {
    move = move || randomPlay();
    console.log("### The Computer chose " + move + " ###");
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;

    if (playerMove === "rock" && computerMove === "scissors") {
        winner = 'player';
        } else if (playerMove === "scissors" && computerMove === "paper") {
        winner = 'player';
        } else if (playerMove === "paper" && computerMove === "rock") {
        winner = 'player';
        } else if (playerMove === computerMove) {
        winner = 'tie';
        } else {
        winner = 'computer';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    while (playerWins < 5 && computerWins < 5) {
       var winner = getWinner(getPlayerMove(), getComputerMove());
       if (winner === "computer") {
           computerWins++;
       } else if (winner === "player") {
           playerWins++;
       }
       console.log("Computer:", computerWins, "Player:", playerWins);
    }
    return console.log("The Winner is " + (playerWins > computerWins ? "Player" : "Computer") + "!");
}

playToFive();
