function Player() {
  this.totalSumArray = [];
  this.turnArray = [];
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
  
}


//User Logic
$(document).ready(function() {

  var player1 = new Player();

  $("#roll").click(function() {
    var thisRoll = player1.rollDice();
    if (thisRoll == 1) {
      alert("Sorry, you rolled a 1")
      player1.turnArray = []
    } else {
      player1.turnArray.push(thisRoll);
    }

    $("#roll-number").text(thisRoll);

    $("#player1-turn-total").text(player1.turnTotal());
  })
})
