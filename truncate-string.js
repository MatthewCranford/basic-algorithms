// Returns truncated string if length of input string is longer than input number
function truncateString(str, num) {
  
  // if number is equal or greater than string length
  if (num >= str.length) {
    return str;
   }
  
  // if number is less than 3
  else if (num <= 3) {
    // return string with a length of number and added truncate 
    return str.slice(0, num) + "...";
  } 
  
  else {
    // return string with a length of number subtracted by the size of truncated message 
    return str.slice(0, num -3) + "...";
  }
  
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
