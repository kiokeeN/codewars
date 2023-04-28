// https://www.codewars.com/kata/5a793fdbfd8c06d07f0000d5

function solve(str) {
  let result = ''
  const numbers = '1234567890'
  let deletedBrackets = str
    .split(')')
    .join('')
    .split('(')
    .join('')
    .split('')
    .reverse()
    .join('')
  for (let i = 0; i < deletedBrackets.length; i++) {
    if (numbers.includes(deletedBrackets[i])) {
      result += result.repeat(deletedBrackets[i] - 1)
    } else {
      result += deletedBrackets[i]
    }
  }
  return result.split('').reverse().join('')
}