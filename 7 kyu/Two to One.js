// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

function longest(s1, s2) {
    str = (s1 + s2).toLowerCase().split('').sort()
    return Array.from (new Set (str)).join('')
      }