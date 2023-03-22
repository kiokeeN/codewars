// https://www.codewars.com/kata/57cc981a58da9e302a000214

function smallEnough(a, limit) {
  let b = a.filter(num => num <= limit)
  return a.length == b.length
}
