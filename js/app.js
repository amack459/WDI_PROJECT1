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

      var move = 1;
      var player1 = [];
      var player2 = [];

      var squares = document.getElementsByClassName("board");
      
       
      for(var i=0; i<squares.length;i++){
        squares[i].addEventListener("click", function(){
          if(move % 2 === 0 && !this.innerHTML){
            move++;
            this.innerHTML = "WHITE";
            this.className = "player2";
            player2.push(this.id);

            console.log("hi")
          } else if(!this.innerHTML) {
            move++;
            this.innerHTML = "BLACK";
            this.className = "player1";
            player1.push(this.id)
            console.log("bye")
          }
        });
      };
    });


function checkSquares(squares) {
  return squares.reduce(function(prev, square) {
    return prev && square.innerHTML === player1 || player2;
  }, true);
};

function checkForWin() {
  return (checkRows() || checkColumns() || checkDiags());
};

function checkRows() {
  return  checkCells([squares[0],squares[1],squares[2],squares[3],squares[4]]) ||
          checkCells([squares[5],squares[6],squares[7],squares[8],squares[9]]) ||
          checkCells([squares[10],squares[11],squares[12],squares[13],squares[14]]) ||
          checkCells([squares[15],squares[16],squares[17],squares[18],squares[19]]) ||
          checkCells([squares[20],squares[21],squares[22],squares[23],squares[24]]);
};

function checkColumns() {
  return  checkCells([squares[0],squares[5],squares[10],squares[15],squares[20]]) ||
          checkCells([squares[1],squares[6],squares[11],squares[16],squares[21]]) ||
          checkCells([squares[2],squares[7],squares[12],squares[17],squares[22]]) ||
          checkCells([squares[3],squares[8],squares[13],squares[18],squares[23]]) ||
          checkCells([squares[4],squares[9],squares[14],squares[19],squares[24]]);
};

function checkDiags() {
  return  checkCells([squares[0],squares[6],squares[12],squares[18],squares[24]]) ||
          checkCells([squares[4],squares[8],squares[12],squares[16],squares[20]]);
};
 
 console.log("you win!")
//***Boss Product**
  //reset button
  //function for best of 3 or 5
  //different levels of difficulty (easy, medium, hard)
  //play music