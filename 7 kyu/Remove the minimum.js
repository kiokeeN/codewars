// https://www.codewars.com/kata/563cf89eb4747c5fb100001b

function removeSmallest(numbers) {
  const copyNumbers = numbers.slice()
  const findMin = Math.min(...copyNumbers)
  copyNumbers.splice(copyNumbers.indexOf(findMin), 1)
  return copyNumbers
}
