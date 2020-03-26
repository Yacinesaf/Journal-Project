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

function formatDate(firebaseDate) {
  // firebase.toDate() outputs Sun Mar 29 2020 00:00:00 GMT-0400 (Eastern Daylight Time)
  let date = firebaseDate.toDate().toString().split(' ');
  return {
    day : date[2],
    month : date[1],
    year : date[3]
  }
}

export { 
  monthFormating, 
  formatDate 
}