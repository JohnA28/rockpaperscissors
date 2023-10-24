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

//UI buttons
 const rockBtn = document.createElement('button')
 rockBtn.textContent = 'Rock'
 const paperBtn = document.createElement('button')
 paperBtn.textContent = 'Paper'
 const scissorsBtn = document.createElement('button')
 scissorsBtn.textContent = 'Scissors'





 //event listeners for button selections
 rockBtn.addEventListener('click', () => {
  playerSelection = 'rock'
  console.log(playRound(playerSelection,computerSelection))
  pScoreUI.textContent = 'Player Score: ' + playerScore
  cScoreUI.textContent = 'Opponent Score: ' + comScore
  
 })

 paperBtn.addEventListener('click', () => {
  playerSelection = 'paper'
  console.log(playRound(playerSelection,computerSelection))
 })

 scissorsBtn.addEventListener('click', () => {
  playerSelection = 'scissors'
  console.log(playRound(playerSelection,computerSelection))
 })




//some UI stuff for the player
 const div = document.createElement('div')
 const body = document.querySelector('body')

 body.appendChild(div)
 div.append(rockBtn)
 div.append(paperBtn)
 div.append(scissorsBtn)




//display for score
 const pScoreUI = document.createElement('h3')
 pScoreUI.textContent = 'Player Score: ' + playerScore
 div.appendChild(pScoreUI)

 const cScoreUI = document.createElement('h3')
 cScoreUI.textContent = 'Opponent Score: ' + comScore
 div.appendChild(cScoreUI)







/*
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


*/