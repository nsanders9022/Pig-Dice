function Player() {
  this.sumArray = [];
}

//gets random number between 1 and 6
Player.prototype.rollDice = function() {
  return Math.floor((Math.random() * 6) + 1);
}

Player.prototype.rollTotal = function() {
  var diceTotal = 0;

  for (var i = 0; i < this.sumArray.length; i++) {
    diceTotal += parseInt(this.sumArray[i]);
  }
  return diceTotal;
}





$(document).ready(function() {

  var player1 = new Player();

  $("#roll").click(function() {
    var thisRoll = player1.rollDice();
    player1.sumArray.push(thisRoll);
    $("#roll-number").text(thisRoll);

    $("#player1-total").text(player1.rollTotal());
  })


})
