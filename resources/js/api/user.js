import axios from 'axios'

export default {
  verifyUserDataAPI (payload) {
    return axios.post('loginVerification', payload)
  }
}
