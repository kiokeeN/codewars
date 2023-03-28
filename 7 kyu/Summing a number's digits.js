// https://www.codewars.com/kata/52f3149496de55aded000410

const sumDigits = number =>
  +Math.abs(number)
    .toString()
    .split('')
    .reduce((a, b) => +a + +b)