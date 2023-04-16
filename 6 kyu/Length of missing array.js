// https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611

function getLengthOfMissingArray(arrayOfArrays) {
  let arr = (arrayOfArrays || []).map(x => x ? x.length : 0).sort((a, b) => a - b)
  if (arr.includes(0)) {
    return 0
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i] + 1
    }
  }
  return 0
}
