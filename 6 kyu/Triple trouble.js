// https://www.codewars.com/kata/55d5434f269c0c3f1b000058

function tripledouble(num1, num2) {
  let n1 = '' + num1
  let n2 = '' + num2
  let n1Arr = []
  let n2Arr = []
  for (let i = 0; i < n1.length; i++) {
    if (n1[i] == n1[i + 1] && n1[i] == n1[i + 2]) {
      n1Arr.push(n1[i] + n1[i + 1])
    }
  }

  for (let i = 0; i < n2.length; i++) {
    if (n2[i] == n2[i + 1]) {
      n2Arr.push(n2[i] + n2[i + 1])
    }
  }

  const finalResult = n1Arr.filter(num => n2Arr.includes(num))
  return finalResult.length > 0 ? 1 : 0
}