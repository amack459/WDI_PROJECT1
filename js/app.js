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
    //reset button

      
window.addEventListener("DOMContentLoaded", function() {

      var narrator = document.getElementsByClassName("narrator")[0];
      var player = "b"
      var gameOver = false;

      var squares = document.getElementsByClassName("board");
      
       
      for(var i=0; i<squares.length;i++){
        squares[i].addEventListener("click", function(){
          if(!this.style.backgroundImage && !gameOver){
            this.style.backgroundImage = "url(go_" + player + ".png)";
            this.className = "board " + player;

            if(checkForWin()) {
              narrator.innerHTML = "Looks like we're done! " + player + " has won!";
              gameOver =true;
            } else if(checkForTie()) {  
              narrator.innerHTML = "You're BOTH losers. Try again!";
              gameOver = true; 
            } else {
              player = player === "b" ? "w" : "b";
              narrator.innerHTML = player + "'s turn";
            };
          }; 
      });
    };

    clear.addEventListener('click', function() {
      for(var i=0;i<squares.length;i++) {
        squares[i].style.backgroundImage = "";
        squares[i].id = "open";
      }

      
      gameOver = false;
      narrator.innerHTML = "Start whenever you're ready!";
});
//checks all squares to see what square is assigned to what player
function checkSquares(squares) {
  return squares.reduce(function(prev, square) {
    return prev && square.style.backgroundImage === 'url("go_' + player + '.png")';
  }, true);
};

//checks all squares to make sure there isn't an empty. If there isn't and the checkForWin() doesn't detect a winner. Then, it's a tie
function checkForTie(){
    var tie = true;
    for(var i=0; i<squares.length;i++) {
      if(!squares[i].style.backgroundImage) tie = false;
    };
    return tie;
}; 

function checkForWin() {
  return (checkRows() || checkColumns() || checkDiags());
  console.log( " wins!")
};

function checkRows() {
  return  checkSquares([squares[0],squares[1],squares[2],squares[3],squares[4]]) ||
          checkSquares([squares[1],squares[2],squares[3],squares[4],squares[5]]) ||
          checkSquares([squares[2],squares[3],squares[4],squares[5],squares[6]]) ||
          checkSquares([squares[3],squares[4],squares[5],squares[6],squares[7]]) ||
          checkSquares([squares[4],squares[5],squares[6],squares[7],squares[8]]) ||
          checkSquares([squares[9],squares[10],squares[11],squares[12],squares[13]]) ||
          checkSquares([squares[10],squares[11],squares[12],squares[13],squares[14]]) ||
          checkSquares([squares[11],squares[12],squares[13],squares[14],squares[15]]) ||
          checkSquares([squares[12],squares[13],squares[14],squares[15],squares[16]]) ||
          checkSquares([squares[13],squares[14],squares[15],squares[16],squares[17]]) ||
          checkSquares([squares[18],squares[19],squares[20],squares[14],squares[22]]) ||
          checkSquares([squares[19],squares[20],squares[21],squares[22],squares[23]]) ||
          checkSquares([squares[20],squares[21],squares[22],squares[23],squares[24]]) ||
          checkSquares([squares[21],squares[22],squares[23],squares[24],squares[25]]) ||
          checkSquares([squares[22],squares[23],squares[24],squares[25],squares[26]]) ||
          checkSquares([squares[27],squares[28],squares[29],squares[30],squares[31]]) ||
          checkSquares([squares[28],squares[29],squares[30],squares[31],squares[32]]) ||
          checkSquares([squares[29],squares[30],squares[31],squares[32],squares[33]]) ||
          checkSquares([squares[30],squares[31],squares[32],squares[33],squares[34]]) ||
          checkSquares([squares[31],squares[32],squares[33],squares[34],squares[35]]) ||
          checkSquares([squares[36],squares[37],squares[38],squares[39],squares[40]]) ||
          checkSquares([squares[37],squares[38],squares[39],squares[40],squares[41]]) ||
          checkSquares([squares[38],squares[39],squares[40],squares[41],squares[42]]) ||
          checkSquares([squares[39],squares[40],squares[41],squares[42],squares[43]]) ||
          checkSquares([squares[40],squares[41],squares[42],squares[43],squares[44]]) ||
          checkSquares([squares[45],squares[46],squares[47],squares[48],squares[49]]) ||
          checkSquares([squares[46],squares[47],squares[48],squares[49],squares[50]]) ||
          checkSquares([squares[47],squares[48],squares[49],squares[50],squares[51]]) ||
          checkSquares([squares[48],squares[49],squares[50],squares[51],squares[52]]) ||
          checkSquares([squares[49],squares[50],squares[51],squares[52],squares[53]]) ||
          checkSquares([squares[54],squares[55],squares[56],squares[57],squares[58]]) ||
          checkSquares([squares[55],squares[56],squares[57],squares[58],squares[59]]) ||
          checkSquares([squares[56],squares[57],squares[58],squares[59],squares[60]]) ||
          checkSquares([squares[57],squares[58],squares[59],squares[60],squares[61]]) ||
          checkSquares([squares[58],squares[59],squares[60],squares[61],squares[62]]) ||
          checkSquares([squares[63],squares[64],squares[65],squares[66],squares[67]]) ||
          checkSquares([squares[64],squares[65],squares[66],squares[67],squares[68]]) ||
          checkSquares([squares[65],squares[66],squares[67],squares[68],squares[69]]) ||
          checkSquares([squares[66],squares[67],squares[68],squares[69],squares[70]]) ||
          checkSquares([squares[67],squares[68],squares[69],squares[70],squares[71]]) ||
          checkSquares([squares[72],squares[73],squares[74],squares[75],squares[76]]) ||
          checkSquares([squares[73],squares[74],squares[75],squares[76],squares[77]]) ||
          checkSquares([squares[74],squares[75],squares[76],squares[77],squares[78]]) ||
          checkSquares([squares[75],squares[76],squares[77],squares[78],squares[79]]) ||
          checkSquares([squares[76],squares[77],squares[78],squares[79],squares[80]]);
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
  //function for best of 3 or 5
  //different levels of difficulty (easy, medium, hard)
  //play music once you've won best of 5