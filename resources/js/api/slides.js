import axios from 'axios'

export default {
emailSurveyResultsAPI(payload) {
  return axios.post('sendModuleInfoMail', {
    module_data: payload
    })
  }
}