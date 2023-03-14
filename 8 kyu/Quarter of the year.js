// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af

const quarterOf = (month) => {
    if (month >= 1 && month <= 3) {
      return 1
    }
    if (month >= 4 && month <= 6) {
      return 2
    }
    if (month >= 7 && month <= 9) {
      return 3
    }
    if (month >= 10 && month <= 12) {
      return 4
    }
  }