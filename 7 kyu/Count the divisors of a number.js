// https://www.codewars.com/kata/542c0f198e077084c0000c2e

function getDivisorsCnt(n) {
  let count = 0
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      count += 1
    }
  }
  return count
}

console.log(getDivisorsCnt(54))