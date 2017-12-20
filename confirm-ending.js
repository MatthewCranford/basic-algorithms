// Checks if input string ends with given target input
function confirmEnding(str, target) {
  
  var targetLength = target.length;
  
  // get string ending
  var strEnd = str.substr(-targetLength, targetLength);
  
  // if string end is equal to target
  if (strEnd === target) {
    return true;
  }
  else {
    return false;
  }
}

confirmEnding("Bastian", "n");