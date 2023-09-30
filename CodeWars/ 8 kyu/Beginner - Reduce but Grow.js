// Given a non-empty array of integers, return the result of multiplying the values together in order.
/// Solution :

function grow(x){
    let res = 1;
      for (i=0;i<x.length;i++ ) {
        res *= x[i]
      }
      return res
    }