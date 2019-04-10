import axios from 'axios'

export default {
  verifyUserDataAPI (payload) {
    return axios.post('loginVerification', payload)
  },
  verifyExcelSheetAPI(payload) {
    return axios.post('verifyExcelSheet', payload)
  },
  submitGoodParticipantsAPI(payload) {
    return axios.post('submitGoodParticipants', payload)
  }
}
