// https://www.codewars.com/kata/5ac6932b2f317b96980000ca

function minValue(values) {
  let arr = []
  values.forEach(num => {
    if (!arr.includes(num)) {
      arr.push(num)
    }
  })
  return +arr.sort((a,b) => a - b).join('')
}