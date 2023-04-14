// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699

function sumOfMinimums(arr) {
  return arr.map(x => Math.min(...x)).reduce((a, b) => a + b)
}