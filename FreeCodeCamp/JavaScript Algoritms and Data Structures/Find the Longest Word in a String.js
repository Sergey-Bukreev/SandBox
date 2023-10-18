// Return the length of the longest word in the provided sentence.
// Your response should be a number.

/// Solution :

function getLongestWordLength(sentence) {
    const words = str.split(" ");
    let longestLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      const wordLength = words[i].length;
      if (wordLength > longestLength) {
        longestLength = wordLength;
      }
    }
  
    return longestLength;
  }
  
  
  getLongestWordLength("The quick brown fox jumped over the lazy dog");