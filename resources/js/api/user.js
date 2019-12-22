export default {
  verifyUserDataAPI (payload) {
    return window.axios.post('login-verification', payload)
  },

  verifyExcelSheetAPI (payload) {
    return window.axios.post('verify-excel-sheet', payload)
  },

  submitGoodParticipantsAPI (payload) {
    return window.axios.post('submit-good-participants', payload)
  }
}
