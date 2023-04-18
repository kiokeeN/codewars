// https://www.codewars.com/kata/57f625992f4d53c24200070e

function bingo(ticket, win) {
  let count = 0
  ticket.map(x => {
    x = x[0].split('').filter(char => char.charCodeAt() == x[1])
    if (x.length > 0) {
      count += 1
    }
  })
  return count >= win ? 'Winner!' : 'Loser!'
}