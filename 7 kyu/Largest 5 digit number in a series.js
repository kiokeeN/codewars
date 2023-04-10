// https://www.codewars.com/kata/51675d17e0c1bed195000001

function solution(digits) {
  let res = 0
  let currentRes = 0
  for (let i = 0; i <= digits.length; i++) {
    currentRes = digits.slice(i, i + 5)
    if (+currentRes > +res) {
      res = currentRes
    }
  }
  return res
}
