// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!
// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// SILUTION :

function betterThanAverage(classPoints, yourPoints) {
    let sum =0;
     for(i=0;i<classPoints.length;i++) {
       sum +=classPoints[i]
     }
     return sum/classPoints.length > yourPoints ? false : true;
   }
   