const signs = [1,2,3];
//1 - rock
//2 - paper
//3 - scissors

const playerSelection = "paper";
const computerSelection = getComputerChoice()

//rng a choice for the comp to use against the player
function getComputerChoice() {
  return signs[Math.floor(Math.random()*signs.length)];
}

//returns the result of a round
//prompt() gets user input
function playRound(playerSelection, computerSelection){
  switch(playerSelection.toLowerCase()) {
    case "rock":
      if (computerSelection === signs[0]) {
        return('Tie!')
      }
      else if (computerSelection === signs[1]) {
        return('You Lose!')
      }
      else if (computerSelection === signs[2]) {
        return('You Win!')
      }
      break;

    case "paper":
      if (computerSelection === signs[0]) {
        return('You Win!')
      }
      else if (computerSelection === signs[1]) {
        return('Tie!')
      }
      else if (computerSelection === signs[2]) {
        return('You Lose!')
      }
      break;

      case "scissors":
        if (computerSelection === signs[0]) {
          return('You Lose!')
        }
        else if (computerSelection === signs[1]) {
          return('You Win!')
        }
        else if (computerSelection === signs[2]) {
          return ('Tie!')
        }
        break;

      default:
        return('Please choose Rock, Paper, or Scissors')
  }

}



//this will play 5 rounds of rock paper scissors
//just use a while loop that incrimentes after every round
function game(){
  playRound()
}


//result messagesnode
console.log(playRound(playerSelection,computerSelection))