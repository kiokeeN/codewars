// https://www.codewars.com/kata/5648b12ce68d9daa6b000099

const number = busStops => busStops.map (ppl => ppl[0] - ppl[1]).reduce((a,b) => a+b)