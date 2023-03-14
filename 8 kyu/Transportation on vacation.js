// https://www.codewars.com/kata/568d0dd208ee69389d000016

function rentalCarCost(d) {
    let sumAllDays = (d * 40)
    if (d >= 7) {
      return sumAllDays - 50
    }
    if (d >= 3) {
      return sumAllDays - 20
    }
      return sumAllDays 
    }