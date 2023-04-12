// https://www.codewars.com/kata/525d50d2037b7acd6e000534

const numbers = [1, 2, 3, 4, 5]

Array.prototype.square = function () {
  return this.map(x => Math.pow(x, 2))
}

Array.prototype.cube = function () {
  return this.map(x => Math.pow(x, 3))
}

Array.prototype.average = function () {
  return this.reduce((a, b) => a + b, 0) / this.length
}

Array.prototype.sum = function () {
  return this.reduce((a, b) => a + b, 0)
}

Array.prototype.even = function () {
  return this.filter(x => x % 2 == 0)
}

Array.prototype.odd = function () {
  return this.filter(x => x % 2 !== 0)
}