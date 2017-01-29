function Game(player1, player2) {
  this.playerArray = [];
  this.playerArray.push(player1,player2)
  // this.playerState = 0;
  this.currentPlayer = this.playerArray[0]
}

function Player(name,identifier) {
  this.name = name;
  this.identifier = identifier;
  this.turnArray = [];
  this.totalSumArray = [];
}

Game.prototype.switchPlayer = function() {
  // if (this.playerState === 0) {
  //   this.playerState === 1;
  // } else {
  //   this.playerState === 0;
  // }
  this.playerArray.reverse();
}

//gets random number between 1 and 6
Player.prototype.rollDice = function() {
  return Math.floor((Math.random() * 6) + 1);
}

//tallies up the sum of the dice roll for one turn
Player.prototype.turnTotal = function() {
  var diceTotal = 0;

  for (var i = 0; i < this.turnArray.length; i++) {
    diceTotal += parseInt(this.turnArray[i]);
  }
  return diceTotal;
}

// Adds the turn sum to the total sum
Player.prototype.sumTotal = function() {
  var totalTotal = 0
  for (var i = 0; i < this.turnArray.length; i++) {
    this.totalSumArray.push(this.turnArray[i]);
  }

  for (var j = 0; j <this.totalSumArray.length; j++) {
    totalTotal += parseInt(this.totalSumArray[j]);
  }
  if (totalTotal < 100) {
    return totalTotal;
  } else {
    alert("You won!");
    return totalTotal;
  }
}



//User Logic
$(document).ready(function() {

  var player1 = new Player("player1", 1);
  var player2 = new Player("player2", 2);

  var game1 = new Game(player1, player2);

  currentGame = game1;

  $("#roll").click(function() {
    if (currentGame.playerArray[0].identifier === 1) {

      var thisRoll = currentGame.currentPlayer.rollDice();
      if (thisRoll === 1) {
        currentGame.currentPlayer.turnArray = []
        currentGame.switchPlayer();
      } else {
        currentGame.currentPlayer.turnArray.push(thisRoll);
      }
      $("#roll-number").text(thisRoll);
      $("#player1-turn-total").text(currentGame.currentPlayer.turnTotal());
    } else if (currentGame.playerArray[0].identifier === 2) {
      var thisRoll = currentGame.currentPlayer.rollDice();
      if (thisRoll === 1) {
        currentGame.currentPlayer.turnArray = [];
        currentGame.switchPlayer();
      } else {
        currentGame.currentPlayer.turnArray.push(thisRoll);
      }
      $("#roll-number").text(thisRoll);
      $("#player2-turn-total").text(currentGame.currentPlayer.turnTotal());
    }
  });


  $("#hold").click(function() {
    if (currentGame.playerArray[0].identifier === 1) {
      $("#player1-total").text(currentGame.currentPlayer.sumTotal())
      currentGame.currentPlayer.turnArray = [];
      $("#player1-turn-total").text(0);
      $("#roll-number").text("");
      currentGame.switchPlayer();

    } if (currentGame.playerArray[0].identifier === 2) {
      $("#player2-total").text(currentGame.currentPlayer.sumTotal())
      currentGame.currentPlayer.turnArray = [];
      $("#player2-turn-total").text(0);
      $("#roll-number").text("");
      currentGame.switchPlayer();
    }
  });
})
