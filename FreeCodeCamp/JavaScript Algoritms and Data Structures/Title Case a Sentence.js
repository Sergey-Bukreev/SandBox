// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like the and of.

/// Solution :

function titleCase(str) {
  let words = str.toLowerCase().split(" ")
    for (let i=0; i<words.length; i++) {
    let word = words[i];
    words[i] = word[0].toUpperCase() + word.slice(1)
  }
  return words.join(" ")
  }
  
  titleCase("I'm a little tea pot");