// Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.
// Note: Be sure to match both upper- and lowercase vowels.
//let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";

// SOLUTION :

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[a,e,i,o,u]/gi;
let result = quoteSample.match(vowelRegex); 
