// https://www.codewars.com/kata/52fba66badcd10859f00097e

function disemvowel(str) {
    let result = ''
       for (let i = 0; i < str.length; i++){ 
          let a = str.toLowerCase()
         if (a[i] == 'a' || a[i] == 'e' || a[i] == 'i' || a[i] == 'o' || a[i] == 'u'){
            continue
         } else result += str[i]
     } return result
     }