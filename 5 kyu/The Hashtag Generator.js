// https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag(str) {
  str = str.trim()
  if (str === '') {
    return false
  }
  let arrWithCapitalLetters = str.split(' ').map(x => {
    if (x[0] !== undefined) {
      return x[0].toUpperCase() + x.slice(1)
    }
  })
  let result = '#' + arrWithCapitalLetters.join('')
  return result.length > 140 ? false : result
}
