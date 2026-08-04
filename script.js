function getComputerChoice(number){
  computerChoice =  Math.floor(Math.random() * number)
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
getComputerChoice(3)