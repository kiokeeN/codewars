// https://www.codewars.com/kata/5274e122fc75c0943d000148

function groupByCommas(n) {
  let result = n.toString().split('')
  let x = n.toString()
  for (let i = x.length - 3; i >= 0; i -= 3) {
    result.splice(i, 0, ',')
  }
  return result[0] === ',' ? result.slice(1).join('') : result.join('')
}