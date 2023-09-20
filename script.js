const signs = [1,2,3];
//1 - rock
//2 - paper
//3 - scissors

let playerSelection = 'rock' //change to let when using prompt
let computerSelection = 1;
let playerScore = 0;
let comScore = 0; //computer score, will be compared with player score for result

//rng a choice for the comp to use against the player
function getComputerChoice() {
  return signs[Math.floor(Math.random()*signs.length)];
}

//returns the result of a round
//prompt() gets user input
function playRound(playerSelection, computerSelection){
  //playerSelection = prompt("Rock, Paper, or Scissors?"); when used in browser this will take user input
  computerSelection = getComputerChoice()

  switch(playerSelection.toLowerCase()) {
    case "rock":
      if (computerSelection === signs[0]) {
        return('Tie! ')
      }
      else if (computerSelection === signs[1]) {
        comScore++;
        return('You Lose! Opponent +1 ')
      }
      else (computerSelection === signs[2])
        playerScore++;
        return('You Win! Player +1 ')
      break;

    case "paper":
      if (computerSelection === signs[0]) {
        playerScore++;
        return('You Win! Player +1 ')
      }
      else if (computerSelection === signs[1]) {
        return('Tie! ')
      }
      else (computerSelection === signs[2])
        comScore++;
        return('You Lose! Opponent +1 ')
      
      break;

      case "scissors":
        if (computerSelection === signs[0]) {
          comScore++;
          return('You Lose! Opponent +1 ')
        }
        else if (computerSelection === signs[1]) {
          playerScore++;
          return('You Win! Player +1 ')
        }
        else (computerSelection === signs[2])
          return ('Tie! ')
        break;

      default:
        return('Please choose Rock, Paper, or Scissors.')
  }

}

//this will play 5 rounds of rock paper scissors
//just use a while loop that incrimentes after every round
function game(){
  do {
    console.log(playRound(playerSelection,computerSelection))
  }
  while (playerScore < 3 && comScore < 3 )
  
  if (playerScore > comScore) {
    return "Winner!!!"
  }
  else 
  return "Loser!!!"
}

//result messagesnode
console.log(game())
console.log("Player score: "+playerScore)
console.log("Computer score: "+comScore)