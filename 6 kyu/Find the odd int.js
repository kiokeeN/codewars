// https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(array) {
    for (let i = 0; i < array.length; i++) {
      let count = 0
      for (let j = 0; j < array.length; j++) {
        if (array[i] === array[j]) {
          ++count
        }
      }
      if (count % 2 !== 0) {
        return array[i]
      }
    }
  }