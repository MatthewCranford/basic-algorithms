function findLongestWord(str) {
  
  // seperate each word in string to array
  var arr = str.split(" ");
  console.log(arr);
  
  // hold current longest value
  var longest = 0;
  
  // Find length of each word
  arr.forEach(function (word) {
    
    // compare word to current longest word
    if (word.length > longest) {
      
      // update current largest value
      longest = word.length;
    }
  });

  return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");