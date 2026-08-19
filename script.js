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

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
  playGame(getComputerChoice(), "rock")
})

paper.addEventListener("click", () => {
  playGame(getComputerChoice(), "paper")
})

scissors.addEventListener("click", () => {
  playGame(getComputerChoice(), "scissors")
})

let humanScore = 0;
let computerScore = 0;

//Play the game
function playGame(computerChoice, humanChoice){

  //computer win scenarios
  if(humanChoice === "rock" && computerChoice ==="paper"){
    console.log("You lose! Paper beats Rock");
    computerScore++;
  }
  else if(humanChoice === "paper" && computerChoice === "scissors"){
    console.log("You lose! Scissors beats Paper")
    computerScore++;
  }
  else if(humanChoice === "scissors" && computerChoice === "rock"){
    console.log("You lose! Rock beats Scissors")
    computerScore++;
  }

  //Human win scenarios
  else if(computerChoice === "rock" && humanChoice === "paper"){
    console.log("You win! Paper beats Rock")
    humanScore++
  }
  else if(computerChoice === "paper" && humanChoice === "scissors"){
    console.log("You win! Scissors beats Paper")
    humanScore++
  }
  else if(computerChoice === "scissors" && humanChoice === "rock"){
    console.log("You win! Rock beats scissors")
    humanScore++
  }

  //Draw scenarios
  else {
    console.log(`Its a tie!. Human choice:${humanChoice} and computer choice:${computerChoice}`)
  }

  //Update human and computer Score
  console.log(`Human score: ${humanScore}`);
  console.log(`Computer score: ${computerScore}`);

  //Declare the final result
  if(humanScore === 5){
    console.log(`Final results: human won the game with ${humanScore} wins`);
    humanScore = 0;
    computerScore = 0;
  }
  else if(computerScore === 5){
    console.log(`Final results: computer won with ${computerScore} wins`)
    humanScore = 0;
    computerScore = 0;
  }
}





