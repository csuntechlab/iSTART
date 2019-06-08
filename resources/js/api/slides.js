import axios from 'axios'

export default {
  emailSurveyResultsAPI (payload) {
    return axios.post('send-module-info-mail', {
      module_data: payload
    })
  }
}
