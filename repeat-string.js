// Returns input string an input number of times
function repeatStringNumTimes(str, num) {
  
  // if input number is negative
  if (num <= 0) {
    return "";
  }
   else {
     // repeat string input number times
     return str.repeat(num);
   }
}

repeatStringNumTimes("abc", 3);