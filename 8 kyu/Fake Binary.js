// https://www.codewars.com/kata/57eae65a4321032ce000002d

function fakeBin(x) {
    let array = x.split('')
    for (let i = 0; i < array.length; i++) {
      if (array[i] < 5) {
        array[i] = 0
      } else array[i] = 1
    }
    return array.join('')
  }