//console.log("Hello World!")


function getComputerChoice() {
    console.log("Rock", "Paper", "Scissors")
    const computerSelection = computerSelection[Math.floor(Math.random() * computerSelection.length)];
}

   
function playSingleRound(playerSelection,computerSelection) 
  {
    // Prompt the user to enter their move
    const playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
  
    // Generate a random move for the computer
    const computerSelection = ["rock", "paper", "scissors"];
    
  
    // Determine the winner of the round
    let roundResult;
    if (playerSelection === computerMove) {
      roundResult = "tie";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      roundResult = "player";
    } else {
      roundResult = "computer";
    }
  
    // Update the scores
    if (roundResult === "player") {
      playerScore++;
      console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    } else if (roundResult === "computer") {
      computerScore++;
      console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    } else {
      console.log(`It's a tie! You both chose ${playerSelection}.`);
    }
  }

// play game  
function game() {

    for (let i = 0; i < 5; i++) {
      
      playSingleRound();
      
        if (playerSelection > computerSelection) {
          console.log("You win!");
        } else if (computerSelection > playerSelection) {
          console.log("You lose!");
        } else {
          console.log("It's a tie!");
        } 
      
    }

   

}














