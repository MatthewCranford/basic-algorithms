// Returns a converted title cased string of the input string 
function titleCase(str) {
  
 
  var lowerCasedString = str.toLowerCase();
  var stringArray = lowerCasedString.split(" ");

  // map each word in string array
  var titleCasedString = stringArray.map(function(word) {
    
    // create array of each letter in word
    var letterArray = word.split("");
   
    // uppercase the first index of letter array
    letterArray[0] = letterArray[0].toUpperCase();
    
    // join the updated letter array
    return letterArray.join("");
    
  }).join(" ");  // join updated word array back to string
      
    return titleCasedString;
}

titleCase("I'm a little tea pot");