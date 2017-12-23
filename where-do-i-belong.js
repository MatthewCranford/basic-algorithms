// Returns lowest index second argument should be inserted in a sorted list
function getIndexToIns(arr, num) {
  
  // push number to array
  arr.push(num);
  console.log(arr);
  
  // sort arr with compare function
  var sortedArr = arr.sort(function (a,b) {
    return a - b;
  });
  
  // return index of number in sorted array
  return sortedArr.indexOf(num);
 
}

getIndexToIns([40, 60], 50);