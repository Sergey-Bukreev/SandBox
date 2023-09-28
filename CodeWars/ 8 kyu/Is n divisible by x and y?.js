// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.
// Solution:

function isDivisible(n, x, y) {
    if(n%x ===0 && n%y===0){
      return true;
    } else {
      return false;
    }
  }
  console.log(isDivisible(10, 5, 2));

  // second variant for min langth:
  function isDivisible(a, b, c) {
    return a%b===0 && a%c===0;
  }
  console.log(isDivisible(12, 5, 2));