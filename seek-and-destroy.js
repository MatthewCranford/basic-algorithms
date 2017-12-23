// holds destroyer functions secondary input arguments
var argumentList = [];

// Return the initial array with the removed arguments
function destroyer(arr) {
  
  
  // store secondary arguments in list
  for (var i=1; i < arguments.length; i++) {
    argumentList.push(arguments[i]);
  }
  
  // filter each array element
  filteredArr = arr.filter(uniqueArrElement);
  
  return filteredArr;
}

// Returns true if array element is not equal to arguments
function uniqueArrElement(element) {
 
  // for each argument in list
  for (var i=0; i < argumentList.length; i++) {
    if (argumentList[i] === element) {
      return false;
    }
  }
  return true;
  }

destroyer([1, 2, 3, 1, 2, 3], 2, 3);