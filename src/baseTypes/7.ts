/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum days {
  M = 'mon',
  T = 'tue',
  W = 'wen',
  TH = 'thu',
  F = 'fri',
  ST = 'sat',
  SU = 'sun'
}


function isWeekend(day): boolean {
  if (day == 'sat' || 'sun') {
    console.log('weekend', true)
    return true
  }
  console.log('weekend', false)
  return false
}

let day: days

day = days.F
isWeekend(day)

day = days.SU
isWeekend(day)