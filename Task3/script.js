//Xs and Os 
const X = 'x';
const O = 'o';

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],  
];

let curPlayer;
let gameActive;
let boardState;

const messageText = document.querySelector('.message');
const blocks = document.querySelectorAll('.block');
const resetButton = document.querySelector('.reset-button');

//game starts
startGame();

function startGame(){
  curPlayer = X;
  gameActive = true;
  boardState = ['', '', '', '', '', '', '', '', ''];//similar to ['', '', '', '', '', '', '', '', '']; which indicates that all blocks are initailly empty at the start of the game. The initial way is more like a shortcut. .fill is a method that will fill all the blocks with null(as in empty)
  messageText.innerText = "Player X's turn"; //when the game starts it will be player X turn 
  
  blocks.forEach(block => {
    block.classList.remove(X);//ensures they is no any player X's items on any cell
    block.classList.remove(O);//ensures they is no any player O's items on any cell
    block.textContent = '';//ensures that they is n o any existing text or item in the boards
    block.addEventListener('click', handleClick, {once: true});//{once: true}- makes sure the cell is clicked once and gives value when clicked again it wont give any value rathe rit wont change the value in short(ensures that the event listener is automatically removed after the first click. )
  });
}

function handleClick(e){
  const block = e.target;// target- refers to the element that triggered the event(in this case the event is triggered was a block is clicked), helps with reference to the spcify the block that was clicked
  const blockIndex = parseInt(block.dataset.index);//block.dataset.index- gets the custom data attribute from the block 

  if(!gameActive || boardState[blockIndex] !== '') return; //will exit the function if the game is not active or if the cell is already marked

  //Update the board state and display
  boardState[blockIndex] = curPlayer;
  block.textContent = curPlayer;
  resetButton.addEventListener('click', resetGame); // Ensure reset button works

  //check for win
  if(checkForWin(curPlayer)){
    endGame(false); // End game with a win
  } else if(checkForDraw()){
    endGame(true); // End game with a draw
  } else {
    //Switch turn
    curPlayer = (curPlayer === X) ? O : X;
    messageText.innerText = `Player ${curPlayer.toUpperCase()}'s turn`; 
  }
}

function checkForWin(player) {
  //winningCombinations is an array that contains all possible winning combinations.
  //some methos checks if one of the winning combinations is satisfied
  //every checks if every index in the current winning combination cntains the current player's mark,  If all indices in the combination are marked by the player, every returns true.
  //boardState[index] === player: This checks if a specific cell in the board matches the current player's mark.
  return winningCombinations.some(combination => {
      return combination.every(index => {
        return boardState[index] === player;
      });
  });
}

function checkForDraw() {
  //Checks if all blocks are filled that is not null and there is no winner
  return boardState.every(block => {
    return block !== '';
  });
}

function endGame(draw){
  //if the game is a draw, it will display a message saying it's a draw,
  //if the game is not a draw, it will display a message saying who won
  gameActive = false; //end the game
  if(draw){
    messageText.innerText = "It's a draw!";
      alert("It's a draw!");
    } else {
      messageText.innerText = `Player ${curPlayer.toUpperCase()} wins!`;
      setTimeout(() => {
        alert(`Player ${curPlayer.toUpperCase()} wins!`);
      }, 700);

  }
}

function resetGame(){
  startGame();
}

