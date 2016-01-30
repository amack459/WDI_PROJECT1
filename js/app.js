//***Minimum Viable Product***
  //Make a board that allows 2 players to make moves 
  //Display rules
    //lis to set up board 
      //computer should acknowledge a click on the board
      //if box has been taken, can't be clicked again
    //variables for players
    //function to be sure that moves are stored
    //win function
      //5 in a row (vertical, horizontal or diagonal


window.addEventListener("DOMContentLoaded", function() {

      var narrator = document.getElementsByClassName("narrator")[0];
      var player = "BLACK";
      var gameOver = false;

      var squares = document.getElementsByClassName("board");
      
       
      for(var i=0; i<squares.length;i++){
        squares[i].addEventListener("click", function(){
          if(!this.innerHTML && !gameOver){
            this.innerHTML = player;
            this.id= player;

            if(checkForWin()) {
              narrator.innerHTML = "Looks like we're done! " + player + " has won!";
              gameOver =true;
            } else if(checkForTie()) {  
              narrator.innerHTML = "You're BOTH losers. Try again!";
              gameOver = true; 
            } else {
              player = player === "BLACK" ? "WHITE" : "BLACK";
              narrator.innerHTML = player + "'s turn";
            };
          }; 
      });
    };

    clear.addEventListener('click', function() {
      for(var i=0;i<squares.length;i++) {
        squares[i].innerHTML = "";
        squares[i].id = "open";
      }

      player = "BLACK";
      gameOver = false;
      narrator.innerHTML = "Start whenever you're ready!";
});
//checks all squares to see what square is assigned to what player
function checkSquares(squares) {
  return squares.reduce(function(prev, square) {
    return prev && square.innerHTML === player;
  }, true);
};

//checks all squares to make sure there isn't an empty. If there isn't and the checkForWin() doesn't detect a winner. Then, it's a tie
function checkForTie(){
    var tie = true;
    for(var i=0; i<squares.length;i++) {
      if(!squares[i].innerHTML) tie = false;
    };
    return tie;
}; 

function checkForWin() {
  return (checkRows() || checkColumns() || checkDiags());
  console.log(square.innerHTML + " wins!")
};

function checkRows() {
  return  checkSquares([squares[0],squares[1],squares[2],squares[3],squares[4]]) ||
          checkSquares([squares[5],squares[6],squares[7],squares[8],squares[9]]) ||
          checkSquares([squares[10],squares[11],squares[12],squares[13],squares[14]]) ||
          checkSquares([squares[15],squares[16],squares[17],squares[18],squares[19]]) ||
          checkSquares([squares[20],squares[21],squares[22],squares[23],squares[24]]);
};

function checkColumns() {
  return  checkSquares([squares[0],squares[5],squares[10],squares[15],squares[20]]) ||
          checkSquares([squares[1],squares[6],squares[11],squares[16],squares[21]]) ||
          checkSquares([squares[2],squares[7],squares[12],squares[17],squares[22]]) ||
          checkSquares([squares[3],squares[8],squares[13],squares[18],squares[23]]) ||
          checkSquares([squares[4],squares[9],squares[14],squares[19],squares[24]]);
};

function checkDiags() {
  return  checkSquares([squares[0],squares[6],squares[12],squares[18],squares[24]]) ||
          checkSquares([squares[4],squares[8],squares[12],squares[16],squares[20]]);
};

});


//***Boss Product**
  //reset button
  //function for best of 3 or 5
  //different levels of difficulty (easy, medium, hard)
  //play musiccheckSquares