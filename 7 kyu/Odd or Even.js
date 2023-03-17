// https://www.codewars.com/kata/5949481f86420f59480000e7

function oddOrEven(array) { 
    let result = 0 
    for (let i = 0; i < array.length; i++) {
        if (array[i] === undefined) {
            return 'even' 
        }
        result += array[i]
    }
    return result % 2 === 0 ? 'even' : 'odd'
}