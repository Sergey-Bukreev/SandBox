// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
//(In this case, all triangles must have surface greater than 0 to be accepted).

/// Solution :

function isTriangle(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
      let p = (a + b + c) / 2;
      if (Math.sqrt(p * (p - a) * (p - b) * (p - c)) !== 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  console.log(isTriangle(1, 3, 4))