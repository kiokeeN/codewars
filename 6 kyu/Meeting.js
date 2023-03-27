// https://www.codewars.com/kata/59df2f8f08c6cec835000012

function meeting(s) {
    return s.toUpperCase().split(';')
    .map(name => name.split(':').reverse())
    .sort()
    .reduce((acc, name) => ( acc += `(${name[0]}, ${name[1]})`), "");
}
