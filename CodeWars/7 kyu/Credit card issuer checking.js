// Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number. If the number cannot be matched then the function should return the string Unknown.

// | Card Type  | Begins With          | Number Length |
// |------------|----------------------|---------------|
// | AMEX       | 34 or 37             | 15            |
// | Discover   | 6011                 | 16            |
// | Mastercard | 51, 52, 53, 54 or 55 | 16            |
// | VISA       | 4                    | 13 or 16      |

// Solution :

function getIssuer(number) {
    const numberLength = number.toString().length;
    const firstTwoDigits = number.toString().slice(0, 2);
    const firstDigit = number.toString().slice(0, 1);
    const firstFourDigits = number.toString().slice(0, 4);
  
    if ((numberLength === 15) && (firstTwoDigits === '34' || firstTwoDigits === '37')) {
      return 'AMEX';
    } else if ((numberLength === 16) && (firstTwoDigits === '51' || firstTwoDigits === '52' || firstTwoDigits === '53' || firstTwoDigits === '54' || firstTwoDigits === '55')) {
      return 'Mastercard';
    } else if ((numberLength === 16) && (firstFourDigits === '6011')) {
      return 'Discover';
    } else if ((numberLength === 13 || numberLength === 16) && (firstDigit === '4')) {
      return 'VISA';
    } else {
      return 'Unknown';
    }
  }