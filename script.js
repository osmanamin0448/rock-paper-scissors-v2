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

function getHumanChoice(){
  const humanChoice = prompt("Enter your choice: ")
  return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice){
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
}

playRound(getComputerChoice(), getHumanChoice());
