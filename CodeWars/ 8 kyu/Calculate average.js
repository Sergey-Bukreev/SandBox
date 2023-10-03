// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

//SOLUTION :

function findAverage(array) {
    // your code here
    return array.length===0?0:(array.reduce((total,el)=>total+el,0)/array.length)
  }