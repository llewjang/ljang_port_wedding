var xx = prompt("How many guests do you have?");
var yy = prompt("How many tables do you want?");
var guestsPerTable = Math.floor(xx/yy);
var remainder = xx%yy;
var calculated = "";
var tab = " tables";
if (xx%yy === 0){
  if (yy === 1){
    tab = " table";
  }
  calculated = yy + tab + " of " + guestsPerTable;
}else{
  let greater = guestsPerTable + 1;
  let lessThan = yy - remainder;
  if (remainder === 1){
    tab = " table";
  }
  var tab2 = " tables";
  if (lessThan === 1){
    tab2 = " table";
  }
  calculated = remainder + tab + " of " + greater + ", and " + lessThan + tab2 + " of " + guestsPerTable;
}
alert("Your " + xx + " guests will be seated as follows: " + calculated + ".");