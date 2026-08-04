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
getComputerChoice()

function getHumanChoice(){
  const humanChoice = prompt("Enter your choice: ")
  return humanChoice;
}
getHumanChoice();
