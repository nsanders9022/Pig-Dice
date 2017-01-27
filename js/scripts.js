function Player() {
  this.totalSumArray = [];
  this.turnArray = [];
  this.player = 1;
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
  for (var i = 0; i <this.turnArray.length; i++) {
    sumTotal += Player.turnTotal();
  }
}

//Switches between players
Player.prototype.playerState = function() {
  if (this.player === 1) {
    this.player = 2;
  } else {
    this.player = 1;
  }
}



$(document).ready(function() {

  var player1 = new Player();
  var player2 = new Player()

  $("#roll").click(function() {
    var thisRoll = player1.rollDice();
    player1.turnArray.push(thisRoll);



    $("#roll-number").text(thisRoll);

    $("#player1-total").text(player1.turnTotal());
  })

  $("#hold").cllick(function() {
    player1.player();
  })


})
