// https://www.codewars.com/kata/545a4c5a61aa4c6916000755

function gimme (triplet) {
    let arr = triplet.slice().sort((a,b) => a - b) 
    return triplet.indexOf(arr[1])
    }