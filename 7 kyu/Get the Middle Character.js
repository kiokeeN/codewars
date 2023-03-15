// https://www.codewars.com/kata/56747fd5cb988479af000028

function getMiddle(s) {
    let result = ''
    let evenMid = (s.length / 2) - 1
    let oddMid = Math.floor(s.length / 2)
    if (s.length % 2 === 0) {
        return result = s[evenMid] + (s[evenMid + 1])
    }
    if (s.length % 2 !== 0) {
        return result = s[oddMid]
    }  
  } 