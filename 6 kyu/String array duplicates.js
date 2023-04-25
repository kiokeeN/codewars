// https://www.codewars.com/kata/59f08f89a5e129c543000069

function dup(s) {
  return s.map(x => {
    let res = []
    for (let i = 0; i < x.length; i++) {
      if (x[i] !== x[i + 1]) {
        res.push(x[i])
      }
    }
    return res.join('')
  })
}