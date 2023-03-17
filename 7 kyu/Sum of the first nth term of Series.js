// https://www.codewars.com/kata/555eded1ad94b00403000071

function SeriesSum(n) {
    let result = 1
    let x = 4
    let j = 1 / x
    if (n == 0) {
      return '0.00'
    }
    for (let i = 1; i < n; i++) {
      result += j 
      x += 3
      j = 1/x
    }
    return result.toFixed(2).toString()
  }