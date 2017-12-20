// Returns a reversed string of the input string
function reverseString(str) {
  
  return ((str.split("")).reverse()).join("")
}

// Checks if input string is palindrome
function palindrome(str) {

  var lowerCasedString = str.toLowerCase();

  // remove all non-alpha characters from string
  var alphaString = lowerCasedString.replace(/[^a-z0-9]/g, "");

  // compare string against reversed string
  if (alphaString === reverseString(alphaString)) {
    return true;
  }
  else {
    return false;
  }
}

palindrome("racecar");
