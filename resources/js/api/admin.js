export default {
  verifyExcelSheetAPI (payload) {
    return window.axios.post('verify-excel-sheet', payload)
  }
}
