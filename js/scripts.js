function Game(player1, player2) {
  this.playerArray = [];
  this.playerArray.push(player1,player2)
  this.currentPlayer = this.playerArray[0]
}

function Player(name,identifier) {
  this.name = name;
  this.identifier = identifier;
  this.turnArray = [];
  this.totalSumArray = [];
}

//Reverses the order of the player array
Game.prototype.switchPlayer = function() {
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
      var thisRoll = player1.rollDice();
      if (thisRoll === 1) {
        player1.turnArray = []
        currentGame.switchPlayer();
      } else {
        player1.turnArray.push(thisRoll);
      }
      $("#roll-number-player1").text(thisRoll);
      $("#player1-turn-total").text(player1.turnTotal());
    } else if (currentGame.playerArray[0].identifier === 2) {
      var thisRoll = player2.rollDice();
      if (thisRoll === 1) {
        player2.turnArray = [];
        currentGame.switchPlayer();
      } else {
        player2.turnArray.push(thisRoll);
      }
      $("#roll-number-player2").text(thisRoll);
      $("#player2-turn-total").text(player2.turnTotal());
    }
  });


  $("#hold").click(function() {
    if (currentGame.playerArray[0].identifier === 1) {
      $("#player1-total").text(player1.sumTotal())
      player1.turnArray = [];
      $("#player1-turn-total").text(0);
      $("#roll-number-player1").text("");
      currentGame.switchPlayer();

    } else if (currentGame.playerArray[0].identifier === 2) {
      $("#player2-total").text(player2.sumTotal())
      player2.turnArray = [];
      $("#player2-turn-total").text(0);
      $("#roll-number-player2").text("");
      currentGame.switchPlayer();
    }
  });
})
