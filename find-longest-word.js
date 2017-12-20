// Returns the longest word within the input string 
function findLongestWord(str) {
  
  var stringArray = str.split(" ");
  var currentLongestLength = 0;
  
  // for each word in string array
  stringArray.forEach(function (word) {
    
    // compare word to current longest length
    if (word.length > currentLongestLength) {
      currentLongestLength = word.length;
    }
  });

  return currentLongestLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");