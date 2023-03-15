// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

function solution(str, ending){
    let resLength = str.length - ending.length
    let del = str.slice(resLength)
    let result = del === ending ? true : false  
    return result 
  }