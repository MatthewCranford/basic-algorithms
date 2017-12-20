// Returns the factorial of input number
function factorialize(num) {
  
  var factorialTotal = 1;

  // for each factor of number
  for (i = 1; i <= num; i++) {
    factorialTotal *= i;
  }
  return factorialTotal;
}

factorialize(10);
