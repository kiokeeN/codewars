// https://www.codewars.com/kata/5aba780a6a176b029800041c

function maxMultiple(divisor, bound) {
  let n = 0
  for (let i = 1; n < bound; i++) {
    n = divisor * i
    if (n > bound) {
      return n - divisor
    }
  }
  return n
}
