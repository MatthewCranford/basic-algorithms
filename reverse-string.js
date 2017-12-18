function reverseString(str) {
  var array = [];
  var newStr;
  
  // convert string to array
  array = str.split("");
  //console.log(array);

  // reverse array
  array.reverse();
  //console.log(array);

  // join array into newly reversed string
  newStr = array.join("");
 //console.log(newStr)
  
  return newStr;
}

console.log(reverseString("hello"));
 