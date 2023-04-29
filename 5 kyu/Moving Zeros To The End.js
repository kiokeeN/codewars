// https://www.codewars.com/kata/52597aa56021e91c93000cb0

function moveZeros(arr) {
let arrWoZero = arr.filter(x => x !== 0)
let length = arrWoZero.length
arrWoZero.length = arr.length 
return arrWoZero.fill(0, length)
}
