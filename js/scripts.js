function Player() {
  this.turnArray = [];
  this.totalSumArray = [];
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
    // totalTotal += parseInt(this.totalSumArray[i]);
  }

  for (var j = 0; j <this.totalSumArray.length; j++) {
    totalTotal += parseInt(this.totalSumArray[j]);
  }
  return totalTotal;
}


//User Logic
$(document).ready(function() {

  var player1 = new Player();

  $("#roll").click(function() {
    var thisRoll = player1.rollDice();
    if (thisRoll === 1) {
      player1.turnArray = []
    } else {
      player1.turnArray.push(thisRoll);
    }

    $("#roll-number").text(thisRoll);

    $("#player1-turn-total").text(player1.turnTotal());
  })

  $("#hold").click(function() {

    $("#player1-total").text(player1.sumTotal())
    player1.turnArray = [];
    $("#player1-turn-total").text(0);
  })
})
