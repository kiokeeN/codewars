// https://www.codewars.com/kata/52b757663a95b11b3d00062d

const toWeirdCase = string =>
  string
    .split(' ')
    .map((word, i) =>
      word
        .split('')
        .map((word, i) => (i % 2 === 0 ? word.toUpperCase() : word.toLowerCase()))
        .join(''),
    )
    .join(' ')