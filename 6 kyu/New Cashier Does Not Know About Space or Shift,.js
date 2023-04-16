// https://www.codewars.com/kata/5d23d89906f92a00267bb83d

function getOrder(input) {
  const menu = [
    'Burger',
    'Fries',
    'Chicken',
    'Pizza',
    'Sandwich',
    'Onionrings',
    'Milkshake',
    'Coke',
  ]
  const lowerCasemenu = menu.map(x => x.toLowerCase())
  let str = ''
  let finalRes = []
  for (let i = 0; i < input.length; i++) {
    str += input[i]
    if (lowerCasemenu.includes(str)) {
      finalRes.push(str)
      str = ''
    }
  }
  finalRes.sort((a, b) => {
    if (lowerCasemenu.indexOf(a) > lowerCasemenu.indexOf(b)) {
      return 1
    } else {
      return -1
    }
  })
  return finalRes.map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(' ')
}
console.log(getOrder('milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza'))
