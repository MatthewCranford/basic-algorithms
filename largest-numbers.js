// Returns an array of the largest numbers in the input array of four arrays
function largestOfFour(arr) {
  
  var highestValuesArray = [];
  
  // for each array in array
  for (i=0; i < arr.length; i++) {
    var currentHighestNumber = 0;
    
    // for each number in array
    for (j=0; j < arr[i].length; j++) {
      
      // if number is greater than current highest
      if (arr[i][j] > currentHighestNumber) {
        currentHighestNumber = arr[i][j];
      }
    } 
    // push highest value to highest values array
    highestValuesArray.push(currentHighestNumber);
  }      
  return highestValuesArray;       
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);