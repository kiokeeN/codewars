// https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f

function twistedSum(n) {
  let result = 0
  for (let i = 1; i <= n; i++) {
    i < 9 ? (result += i) : result += +i.toString().split('').reduce((a,b) => +a + +b)
  }
  return result
}

