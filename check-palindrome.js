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
 
function palindrome(str) {
  //console.log("ORIGINAL: " + str);

  // apply lowercase to string
  var loweredStr = str.toLowerCase();
  //console.log("LOWERED: " + loweredStr);

  // remove all non-alpha characters from string
  var replacedStr = loweredStr.replace(/[^a-z0-9]/g, "");
  //console.log("REPLACED: " + replacedStr);

  // compare string against reversed string
  if (replacedStr === reverseString(replacedStr)) {
    return true;
  }
  else {
    return false;
  }
}

palindrome("eye");
