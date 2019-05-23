import axios from 'axios'

export default {
emailSurveyResultsAPI(payload) {
  var links = '<ul>'
  for (var i = 0; i < payload.length; i++) {
    links +=(`<li><a href=${payload[i]} target=_blank>${payload[i]}</a></li>`)
  }
  links +=('</ul>')
  return axios.post('sendModuleInfoMail', {
    module_data: links
    })
  }
}