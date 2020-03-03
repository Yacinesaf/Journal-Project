function monthFormating(month) {
  let loweredMonth = month.toLowerCase();
  switch (loweredMonth) {
    case 'january':
      return 'JAN'
    case 'february':
      return 'FEB'
    case 'march':
      return 'MAR'
    case 'april':
      return 'APR'
    case 'may':
      return 'MAY'
    case 'june':
      return 'Jun'
    case 'july':
      return 'JUL'
    case 'august':
      return 'AUG'
    case 'september':
      return 'SEP'
    case 'october':
      return 'OCT'
    case 'november':
      return 'NOV'
    case 'december':
      return 'DEC'
    default:
      return 'yeet'

  }
}

export { monthFormating }