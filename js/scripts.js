//business logic
var total = 0;

function player1() {}

function comp() {}

//user interface logic
$(document).ready(function() {
  $(".roll").click(function player1() {
    var currentDice = Math.floor(Math.random() * 6) + 1;
    parseInt($(".playerscores").text(currentDice));

    if (currentDice != 1) {
      total += currentDice;
      parseInt($(".playerfinal").text(total));
    } else {
      total = 0;
      parseInt($(".playerfinal").text(total));
    }
  });
});
