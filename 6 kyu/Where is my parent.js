// https://www.codewars.com/kata/58539230879867a8cd00011c

function findChildren(dancingBrigade) {
  let sorted = dancingBrigade.toLowerCase().split('').sort()
  return sorted
    .map((x, i) => (sorted[i - 1] !== x ? x.toUpperCase() : x))
    .join('')
}