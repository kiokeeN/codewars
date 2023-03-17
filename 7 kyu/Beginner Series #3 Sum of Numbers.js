// https://www.codewars.com/kata/55f2b110f61eb01779000053

function getSum(a, b){
  
    const min = Math.min(a,b)
    const max = Math.max(a,b)
    let sum = 0
    
    if (min == max) {
      return max
    }
    for (let i = min; i <= max; i++) {
      sum += i
    }
      return sum
    }