// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// Solution:


function squareSum(numbers){
    let sum =0;
    for (i=0;i<numbers.length;i++){
      sum += Math.pow(numbers[i],2);
    }
      return sum;
    }
    console.log(squareSum[1, 4, 5]);