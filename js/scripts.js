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
      //parseInt($(".playerfinal").text(0));
      // return 0;

      total += currentDice;
      parseInt($(".playerfinal").text(total));
    } else {
      total = 0;
      parseInt($(".playerfinal").text(total));
    }
  });
});
// for(var i=0; i<6; i++){
//   d1Array.push(Math.floor(Math.random()*6)+1);
// }
//   d1Array.forEach(function(d1Value){
//     total+=d1Value;
//     parseInt($(".playerscores").text(d1Value));
//   });
//   parseInt($(".playerfinal").text(total));
// if(d1==1){
//   $(".playerscores").text("0");
//   $(".playerfinal").text("0");
// }
