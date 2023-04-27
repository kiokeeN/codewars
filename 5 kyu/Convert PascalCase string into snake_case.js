// https://www.codewars.com/kata/529b418d533b76924600085d

function toUnderscore(string) {
  let result = ''
  if (typeof string == 'number') {
    return string.toString()
  }
  for (let i = 1; i < string.length; i++) {
  !isFinite(string[i]) && string[i] == string[i].toUpperCase()
      ? (result += '_' + string[i].toLowerCase())
      : (result += string[i])
  }
  return string[0].toLowerCase() + result
}


