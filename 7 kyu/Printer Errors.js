// https://www.codewars.com/kata/56541980fa08ab47a0000040

function printerError(s) {
    const goodLetters = ['a', 'b', 'c', 'd', 'e','f','g','h','i','j','k','l','m']
    let count = 0
    s.split('').filter(char => {
    return goodLetters.indexOf(char) == -1 ? count += 1 : count += 0
    }) 
    return `${count}/${s.length}`
}