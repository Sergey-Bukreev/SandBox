// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.
// Solution;

function positiveSum(arr) {
    let summ=0;
    for(i=0;i<arr.length;i++){
      if(arr[i]>0) {
        summ +=arr[i];
      } else {
         0
      }
    }
    return summ;
  }
  console.log(positiveSum([-1, -2, 5, -3, -6, 8]));