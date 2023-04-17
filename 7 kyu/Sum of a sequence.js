// https://www.codewars.com/kata/586f6741c66d18c22800010a

const sequenceSum = (begin, end, step) => {
  let result = 0
  if (begin > end) {
    return 0
  }
  for (let i = begin; i <= end; i += step) {
    result += i
  }
  return result
}