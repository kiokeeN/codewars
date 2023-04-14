// https://www.codewars.com/kata/586560a639c5ab3a260000f3

function rotate(str) {
  if (str.length == 0) {
    return []
  }
  let result = []
  result.push(str.slice(1) + str[0])
  for (let i = 0; i < str.length - 1; i++) {
    result.push(result[i].slice(1) + result[i][0])
  }
  return result
}