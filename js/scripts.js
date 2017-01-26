var rollResult;
var diceTotal = 0;

function Player() {

}

//gets random number between 1 and 6
Player.prototype.rollDice = function() {
  rollResult = Math.floor((Math.random() * 6) + 1);
  return rollResult
}

Player.prototype.rollTotal = function() {
  diceTotal += this.rollDice()
}





$(document).ready(function() {

  var player1 = new Player

  $("#roll").click(function() {
    $("#roll-number").text(player1.rollDice())
    $("#payer1-total").text(player1.rollTotal())
  })


})
