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


        // document.addEventListener("click", function(){
        //   console.log("DOM is loaded!");
        // });
window.addEventListener("DOMContentLoaded", function() {

      var move = 1;
      var player1 = [];
      var player2 = [];

      var squares = document.getElementsByTagName("li");
      console.log(squares);
       
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


//***Boss Product**
  //reset button
  //function for best of 3 or 5
  //different levels of difficulty (easy, medium, hard)
  //play music