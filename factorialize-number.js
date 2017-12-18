
function factorialize(num) {
  // initial total
  var total = 1;
  // multiply each integer of num
  for (i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
}

factorialize(10);
