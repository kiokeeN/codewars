// https://www.codewars.com/kata/529eef7a9194e0cbc1000255

const isAnagram = (test, original) => {
    let x = test.toLowerCase().split('')
    let y = original.toLowerCase().split('')
    return x.sort().join('') == y.sort().join('')
  }