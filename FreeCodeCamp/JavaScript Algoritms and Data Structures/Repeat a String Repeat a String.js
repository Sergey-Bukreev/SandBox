// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

/// SOLUTION :

function repeatStringNumTimes(str, num) {
    if (num <= 0) {
      return '';
    }
    
    let repeatedString = '';
    while (num > 0) {
      repeatedString += str;
      num--;
    }
    
    return repeatedString;
  }
  
  repeatStringNumTimes("abc", 3);