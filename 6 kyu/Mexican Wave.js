// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

function wave(str) {
    let result = []
    let strSplit = str.split('')
    for (let i = 0; i < strSplit.length; i++) {
      if (strSplit[i] == ' ') {
        continue
      } else {
        strSplit[i] = strSplit[i].toUpperCase()
        result.push(strSplit.join(''))
        strSplit[i] = strSplit[i].toLowerCase()
      }
    }
    return result
  }