// https://www.codewars.com/kata/57ed30dde7728215300005fa

const bump = x => x.split('').filter(el => el === 'n').length <= 15 ? 'Woohoo!' : 'Car Dead'
