// https://www.codewars.com/kata/539ee3b6757843632d00026b

var capitals = function (word) {
  let result = []
  word.split('').forEach((char, i) => {
    if (char.toUpperCase() == char) {
      result.push(i)
    }
  })
  return result
}
