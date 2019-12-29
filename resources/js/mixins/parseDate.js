export const parseDate = {
  parseDate (date) {
    let expirationDate = date.split(' ')[0]
    let splitDate = expirationDate.split('-')
    let formattedExpirationDate = splitDate[1] + '/' + splitDate[2] + '/' + splitDate[0]

    return formattedExpirationDate
  }
}
