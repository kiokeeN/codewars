// https://www.codewars.com/kata/5340298112fa30e786000688/

function twosDifference(input) {
  let sorted = input.sort((a, b) => a - b)
  let result = []
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] + 2 === sorted[i + 1]) {
      result.push([sorted[i], sorted[i + 1]])
    }
    if (sorted[i] + 2 === sorted[i + 2]) {
      result.push([sorted[i], sorted[i + 2]])
    }
  }
  return result
}