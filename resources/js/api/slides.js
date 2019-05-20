import axios from 'axios'

export default {
  emailSurveyResults(payload) {
    return axios.post('emailSurveyResults', payload)
  }
}