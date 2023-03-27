// https://www.codewars.com/kata/59c633e7dcc4053512000073

function solve(s) {
  s.toUpperCase()
  let vowel = 'aeiou'
  let arr = []
  s.split('').forEach(char => (!vowel.includes(char) ? arr.push(char) : arr.push('!')))
  return Math.max(
    ...arr
      .join('')
      .split('!')
      .map(char => {
        return char
          .toUpperCase()
          .split('')
          .reduce((a, b) => a + (b.charCodeAt() - 64), 0)
      }),
  )
}