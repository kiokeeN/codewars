// https://www.codewars.com/kata/558fc85d8fd1938afb000014

function sumTwoSmallestNumbers(numbers) {  
    let sortNumbers = numbers.sort((a,b) => a - b)
    return sortNumbers[0] + sortNumbers[1]
  }