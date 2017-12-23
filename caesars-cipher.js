// Return a decoded string by shifting letters 13 places forward
function rot13(str) { // LBH QVQ VG!
  
  var decodedStr = "";
  
  // for each character in string
  for (var i=0; i < str.length; i++) {
    
    // if charcode is between 65-90 (alphabetic character)
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) { 
      
      // if charcode shifted back 13 is less than 65(A)
      if ((str.charCodeAt(i) - 13) < 65) {
        // find difference between A and the shifted charcode, then, subtract by end of index +1
        decodedStr += String.fromCharCode(91 - (65 - (str.charCodeAt(i) - 13)));
      }
      else {
        // shift charcode 13 places back
        decodedStr += String.fromCharCode(str.charCodeAt(i) - 13);
      } 
      
    }
    // add non-alphbetic character to decoded string
    else {
      decodedStr += str[i];
    }  
    
  }
  return decodedStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
