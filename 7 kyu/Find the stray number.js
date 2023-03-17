// https://www.codewars.com/kata/57f609022f4d534f05000024

function stray(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] !== numbers[i + 1] && numbers[i + 1] == numbers[i + 2]) {
        return numbers[i]
      }
      if (numbers[i] !== numbers[i + 1]) {
        return numbers[i + 1]
      }
    }
  }