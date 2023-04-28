// https://www.codewars.com/kata/51f41fe7e8f176e70d0002b9

function sortme(names) {
  return names.sort((a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) {
      return 1
    }
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1
    }
  })
}