// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

const openOrSenior = data => data.map(x => ((x[0] >= 55 && x[1] > 7) ? 'Senior' : 'Open'))