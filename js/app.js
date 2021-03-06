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
  var clear = document.getElementById("clear");

  var squares = document.getElementsByClassName("board");
      

  for(var i=0; i<squares.length;i++){
    squares[i].addEventListener("click", function(){
      if(!this.style.backgroundImage && !gameOver){
        this.style.backgroundImage = "url(go_" + player + ".png)";
        this.className = "board " + player;

        if(checkForWin()) {
          narrator.style.backgroundImage = "url(go_" + player + ".png)";
          narrator.innerHTML = "Congratulations, you're the winner!!!";
          gameOver =true;
        } else if(checkForTie()) {  
          narrator.innerHTML = "You're BOTH losers. Try again!";
          gameOver = true; 
        } else {
          player = player === "b" ? "w" : "b";
          narrator.style.backgroundImage = "url(go_" + player + ".png)";
          narrator.innerHTML = "It's your turn"
        };
      }; 
    });
  };

  clear.addEventListener('click', function() {
    for(var i=0;i<squares.length;i++) {
      console.log("click")
      if(squares[i].className !== 'board') {
        squares[i].style.backgroundImage = "";
      }
    }

    gameOver = false;
    narrator.innerHTML = "Start whenever you're ready!";
  });


//Callback function that checks all squares and assigns them to a player. 
  function checkSquares(squares) {
  return squares.reduce(function(prev, square) {
    return prev && square.style.backgroundImage === 'url("go_' + player + '.png")';
    checkForWin();
  }, true);
  };



// checks all squares to make sure there isn't an empty. If there isn't and the checkForWin() doesn't detect a winner. Then, it's a tie
  function checkForTie(){
  var tie = true;
  for(var i=0; i<squares.length;i++) {
    if(!squares[i].style.backgroundImage) tie = false;
  };
  return tie;
  }; 

  function checkForWin() {
  return (checkRows() || checkColumns() || checkDiags());
  };

  function checkRows() {
  for (var row = 0; row < 9; row++) {
    for (var col = 0; col < 5; col++) {
      var i = row * 9 + col;  
      checkSquares([
        squares[i  ], 
        squares[i+1],
        squares[i+2],
        squares[i+3],
        squares[i+4]
        ]); 
    }
  }
  };

  function checkColumns() {
    for (var col = 0; col < 9; col++) {
      for (var row = 0; row < 5; row++) {
        checkSquares([
          squares[(row    ) * 9 + col], 
          squares[(row + 1) * 9 + col],
          squares[(row + 2) * 9 + col],
          squares[(row + 3) * 9 + col],
          squares[(row + 4) * 9 + col]
          ]); 
      }
    }
  }

  function checkDiags() {

    return  checkSquares([squares[0],squares[10],squares[20],squares[30],squares[40]]) ||
    checkSquares([squares[10],squares[20],squares[30],squares[40],squares[50]]) ||
    checkSquares([squares[20],squares[30],squares[40],squares[50],squares[60]]) ||
    checkSquares([squares[30],squares[40],squares[50],squares[60],squares[70]]) ||
    checkSquares([squares[40],squares[50],squares[60],squares[70],squares[80]]) ||
    checkSquares([squares[9],squares[19],squares[29],squares[39],squares[49]]) ||
    checkSquares([squares[19],squares[29],squares[39],squares[49],squares[59]]) ||
    checkSquares([squares[29],squares[39],squares[49],squares[59],squares[69]]) ||
    checkSquares([squares[39],squares[49],squares[59],squares[69],squares[79]]) ||
    checkSquares([squares[18],squares[28],squares[38],squares[48],squares[58]]) ||
    checkSquares([squares[28],squares[38],squares[48],squares[58],squares[68]]) ||
    checkSquares([squares[38],squares[48],squares[58],squares[68],squares[78]]) ||
    checkSquares([squares[27],squares[37],squares[47],squares[57],squares[67]]) ||
    checkSquares([squares[37],squares[47],squares[57],squares[67],squares[77]]) ||
    checkSquares([squares[36],squares[46],squares[56],squares[66],squares[76]]) ||
    checkSquares([squares[1],squares[11],squares[21],squares[31],squares[41]]) ||
    checkSquares([squares[11],squares[21],squares[31],squares[41],squares[51]]) ||
    checkSquares([squares[21],squares[31],squares[41],squares[51],squares[61]]) ||
    checkSquares([squares[31],squares[41],squares[51],squares[61],squares[71]]) ||
    checkSquares([squares[2],squares[12],squares[22],squares[32],squares[42]]) ||
    checkSquares([squares[12],squares[22],squares[32],squares[42],squares[52]]) ||
    checkSquares([squares[22],squares[32],squares[42],squares[52],squares[62]]) ||
    checkSquares([squares[3],squares[13],squares[23],squares[33],squares[43]]) ||
    checkSquares([squares[13],squares[23],squares[33],squares[43],squares[53]]) ||
    checkSquares([squares[4],squares[12],squares[20],squares[28],squares[36]]) ||
    checkSquares([squares[5],squares[13],squares[21],squares[29],squares[37]]) ||
    checkSquares([squares[13],squares[21],squares[29],squares[37],squares[45]]) ||
    checkSquares([squares[6],squares[14],squares[22],squares[30],squares[38]]) ||
    checkSquares([squares[14],squares[22],squares[30],squares[38],squares[46]]) ||
    checkSquares([squares[22],squares[30],squares[38],squares[46],squares[54]]) ||
    checkSquares([squares[7],squares[15],squares[23],squares[31],squares[39]]) ||
    checkSquares([squares[15],squares[23],squares[31],squares[39],squares[47]]) ||
    checkSquares([squares[23],squares[31],squares[39],squares[47],squares[55]]) ||
    checkSquares([squares[31],squares[39],squares[47],squares[55],squares[63]]) ||
    checkSquares([squares[8],squares[16],squares[24],squares[32],squares[40]]) ||
    checkSquares([squares[16],squares[24],squares[32],squares[40],squares[48]]) ||
    checkSquares([squares[24],squares[32],squares[40],squares[48],squares[56]]) ||
    checkSquares([squares[32],squares[40],squares[48],squares[56],squares[64]]) ||
    checkSquares([squares[40],squares[48],squares[56],squares[64],squares[72]]) ||
    checkSquares([squares[17],squares[25],squares[33],squares[41],squares[49]]) ||
    checkSquares([squares[25],squares[33],squares[41],squares[49],squares[57]]) ||
    checkSquares([squares[33],squares[41],squares[49],squares[57],squares[65]]) ||
    checkSquares([squares[41],squares[49],squares[57],squares[65],squares[73]]) ||
    checkSquares([squares[26],squares[34],squares[42],squares[50],squares[58]]) ||
    checkSquares([squares[34],squares[42],squares[50],squares[58],squares[66]]) ||
    checkSquares([squares[42],squares[50],squares[58],squares[64],squares[74]]) ||
    checkSquares([squares[35],squares[43],squares[51],squares[59],squares[67]]) ||
    checkSquares([squares[43],squares[51],squares[59],squares[67],squares[75]]) ||
    checkSquares([squares[44],squares[52],squares[60],squares[68],squares[76]]) ||
    checkSquares([squares[4],squares[14],squares[24],squares[34],squares[44]]);
  };
});



//***Boss Product**
  //function for best of 3 or 5
  //different levels of difficulty (easy, medium, hard)
  //play music once you've won best of 5