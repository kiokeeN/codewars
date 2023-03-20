// https://www.codewars.com/kata/5601409514fc93442500010b

const betterThanAverage = (classPoints, yourPoints) => {
  let classPointsSum = classPoints.reduce((a, b) => a + b, 0)
  return (classPointsSum + yourPoints) / (classPoints.length + 1) < yourPoints
}
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9))
