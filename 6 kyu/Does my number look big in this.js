// https://www.codewars.com/kata/5287e858c6b5a9678200083c

function narcissistic(value) {
    let result = 0
    const strValue = value.toString()
    const countNum = strValue.length
    for (let i = 0; i < strValue.length; i++) {
      result += strValue[i] ** countNum
    }
    return result == value
  }