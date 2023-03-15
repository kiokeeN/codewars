// https://www.codewars.com/kata/55908aad6620c066bc00002a

function XO(str) {
    let a = str.toLowerCase()
    let xNum = 0
    let oNum = 0
    for (let i = 0; i < a.length; i++) {
      if (a[i] === 'x') {
        xNum += 1
      }
      if (a[i] === 'o') {
        oNum += 1
      } 
    } return xNum === oNum
  }