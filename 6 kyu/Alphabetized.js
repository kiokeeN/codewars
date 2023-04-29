// https://www.codewars.com/kata/5970df092ef474680a0000c9

function alphabetized(s) {
  let x = s.split('').filter(x => x.toUpperCase().charCodeAt() > 64 && x.toUpperCase().charCodeAt() < 91) 
  return x
    .sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? 1 : -1))
    .reverse()
    .join('')
}
