// https://www.codewars.com/kata/59325dc15dbb44b2440000af

function isAlt(word) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  for (let i = 0; i < word.length - 1; i++) {
    if (
      (vowels.includes(word[i]) && vowels.includes(word[i + 1])) ||
      (!vowels.includes(word[i]) && !vowels.includes(word[i + 1]))
    ) {
      return false
    }
  }
  return true
}