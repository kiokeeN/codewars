// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

function high(x) {
  let oneWord = x.split(' ')
  let newArr = oneWord.map(word => {
    return word
      .toUpperCase()
      .split('')
      .reduce((a, b) => a + (b.charCodeAt() - 64), 0)
  })
  return oneWord[newArr.indexOf(Math.max.apply(null, newArr))]
}

