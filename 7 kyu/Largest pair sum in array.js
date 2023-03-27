// https://www.codewars.com/kata/556196a6091a7e7f58000018

function largestPairSum(numbers) {
  let sortArr = numbers.sort((a, b) => b - a)
  return sortArr[0] + sortArr[1]
}