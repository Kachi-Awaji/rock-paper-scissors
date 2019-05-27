'use strict';

let playerSelection, computerSelection;
let result = [0,0,0]; //array representing results

const compSel = ["ROCK", "PAPER", "SCISSORS"];

function computerPlay(){
    return compSel[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection){
    
    let playSel = playerSelection.toUpperCase();

    if (playSel == computerSelection){
        console.log("It's a tie... ");
        console.log(`\n ${playSel} draws ${computerSelection}`);
        result[2] += 1;
    }
    else if ((playSel == "ROCK")){
        if (computerSelection =="SCISSORS"){
            console.log("You win!!!");
            console.log(`\n ${playSel} beats ${computerSelection}`);
            result[0] += 1;
        }
        else{
            console.log("Computer wins...");
            console.log(`\n ${computerSelection} beats ${playSel}`);
            result[1]+=1;
        }
    } 
    else if ((playSel == "SCISSORS")){
        if (computerSelection =="ROCK"){
            console.log("Computer wins...");
            console.log(`\n ${computerSelection} beats ${playSel}`);
            result[1]+=1;
        } 
        else{
            console.log("You win!!!");
            console.log(`\n ${playSel} beats ${computerSelection}`);
            result[0] += 1;
        }
    }
    else{
        if (computerSelection =="ROCK"){
            console.log("You win!!!");
            console.log(`\n ${playSel} beats ${computerSelection}`);
            result[0] += 1;
        }
        else{
            console.log("Computer wins...");
            console.log(`\n ${computerSelection} beats ${playSel}`);
            result[1]+=1;
        }
    }

    console.log("Score:");
    console.log(`\tYou : ${result[0]} win(s)`);
    console.log(`\tComputer : ${result[1]} win(s)`);
    console.log(result[2]?`\t${result[2]} draws`:"\tno draws");
}

// // 
// Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
// At this point you should still just be using console.log() to display the results of each round and the winner at the end.
// Use prompt() to get input from the user. Read the docs here if you need to.
// Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
// Feel free to create more “helper” functions if you think it would be useful.
// // 
function game(){
    let rounds = 5,
    playerScore =  0,
    draw = 0,
    computerScore = 0;
    
    for (;rounds>0;rounds--){
        let playerSel = "";
        while (!compSel.includes(playerSel.toUpperCase())){
            playerSel = prompt("Rock, Scissors, or Paper?");
        }
        console.log(playRound(playerSel, computerPlay()));
    }
    
}

game();