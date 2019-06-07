import axios from 'axios'

export default {
  verifyUserDataAPI (payload) {
    return axios.post('login-verification', payload)
  },

  verifyExcelSheetAPI (payload) {
    return axios.post('verify-excel-sheet', payload)
  },

  submitGoodParticipantsAPI (payload) {
    return axios.post('submit-good-participants', payload)
  }
}
