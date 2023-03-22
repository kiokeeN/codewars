// https://www.codewars.com/kata/5202ef17a402dd033c000009

function titleCase(title, minorWords) {
    if (title == '') {
      return ''
    }
    if (!minorWords) {
      return title
        .toLowerCase()
        .split(' ')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ')
    }
    let result = []
    let splitStr = title.split(' ')
    let splitMinoRWords = minorWords.toLowerCase().split(' ')
  
    for (let i = 0; i < splitStr.length; i++) {
      let word = splitStr[i].toLowerCase()
      splitMinoRWords.includes(word)
        ? result.push(word)
        : result.push(word[0].toUpperCase() + word.slice(1))
    }
    let firstResultWord = result[0]
    return (
      firstResultWord[0].toUpperCase() +
      firstResultWord.slice(1) +
      ' ' +
      result.slice(1).join(' ')
    ).trim()
  }