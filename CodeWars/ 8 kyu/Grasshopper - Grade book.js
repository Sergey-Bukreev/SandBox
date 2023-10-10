// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

/// SOLUTION :

function getGrade (s1, s2, s3) {
    const midleCount = (s1+s2+s3)/3;
      return midleCount<60 && midleCount>=0 ? "F":  midleCount>=60 && midleCount<70 ? "D" : midleCount>=70 && midleCount<80 ? "C" : midleCount>=80 && midleCount<90 ? "B" : midleCount>=90 && midleCount<=100 ? "A" : "wrong"   
    }