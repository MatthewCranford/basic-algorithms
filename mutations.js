// Return true if first element contains all characters of second element
function mutation(arr) {
 
  // for each letter in element 2
  for(i = 0; i < arr[1].length; i++) {
    
    // if letter is not a index of element 1
    if (arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) === -1) {
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);