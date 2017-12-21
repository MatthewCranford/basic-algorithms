// Returns a two-dimensional array given size to chunk array
function chunkArrayInGroups(arr, size) {
  
  var twoDimensionalArray = [];
 
  // loop through length of input array
  for (i=0; i < arr.length; i += size) {
    
    // slice input array and push to two-dimensional array
    twoDimensionalArray.push(arr.slice(i,i+size));
  
  }
  return twoDimensionalArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
