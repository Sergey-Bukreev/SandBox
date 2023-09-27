// Implement a function which convert the given boolean value into its string representation.

// Solution:

function booleanToString(b){
    if(b === true || b === false ) {
      return b=String(b)
      } else {
        return "not a boolean"
      }
    }
    console.log(booleanToString(12))