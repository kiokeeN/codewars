// https://www.codewars.com/kata/5878520d52628a092f0002d0

function stringTransformer(str) {
  let res = ''
  for (let i = 0; i < str.length; i++) {
    str[i] === str[i].toUpperCase()
      ? (res += str[i].toLowerCase())
      : (res += str[i].toUpperCase())
  }
  return res.split(' ').reverse().join(' ')
}