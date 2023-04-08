// https://www.codewars.com/kata/5b180e9fedaa564a7000009a

function solve(s) {
  let  = s.split('').filter(char => char === char.toUpperCase())
  return upperChars.length <= s.length / 2 ? s.toLowerCase() : s.toUpperCase()
}
