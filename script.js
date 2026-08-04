//Generate computer's choice using Math.random() between 0 and 3
function getComputerChoice(){
  const computerChoice =  Math.floor(Math.random() * 3)
  if(computerChoice === 0){
    return "rock"
  }
  else if(computerChoice === 1){
    return "paper"
  }
  else{
    return "scissors"
  }
}

// Take human choice as input
function getHumanChoice(){
  const humanChoice = prompt("Enter your choice: ")
  return humanChoice.toLowerCase();
}

// Update human and computer Score
let humanScore = 0;
let computerScore = 0;


//Play only a round of the game
function playRound(computerChoice, humanChoice){
  //computer win scenarios
  if(humanChoice === "rock" && computerChoice ==="paper"){
    console.log("You lose! Paper beats Rock");
    computerScore++;
  }
  else if(humanChoice === "paper" && computerChoice === "scissors"){
    console.log("You lose! Scissors beats Paper")
    computerScore++;
  }
  else if(humanChoice === "scissor" && computerChoice === "rock"){
    console.log("You lose! Rock beats Scissors")
    computerScore++;
  }

  //Human win scenarios
  else if(computerChoice === "rock" && humanChoice === "paper"){
    console.log("You win! Paper beats Rock")
    computerScore++
  }
  else if(computerChoice === "paper" && humanChoice === "scissors"){
    console.log("You win! Scissors beats Paper")
  }
  else if(computerChoice === "scissors" && humanChoice === "rock"){
    console.log("You win! Rock beats scissors")
  }

  //Draw scenarios
  else {
    console.log("Its a tie!")
  }
}
playRound(getComputerChoice(), getHumanChoice());
