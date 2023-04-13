// https://www.codewars.com/kata/515f51d438015969f7000013

function pyramid(n) {
    const result = [];
    for(let i = 0; i < n; i++){
      result.push([...Array(i+1)].fill(1))
    }
    return result;
  }
