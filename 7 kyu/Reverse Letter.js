// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b

function reverseLetter(str) {
  return str
    .split('')
    .reverse()
    .filter(
      char =>
        (char.charCodeAt() > 64 && char.charCodeAt() < 91) ||
        (char.charCodeAt() > 96 && char.charCodeAt() < 123),
    )
    .join('')
}
