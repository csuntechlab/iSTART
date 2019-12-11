import axios from 'axios'

export default {
  emailSurveyResultsAPI (payload) {
    return axios.post('send-module-info-mail', {
      module_data: payload
    })
  },

  async getModuleProgressAPI (payload) {
    let api = await axios.post('get-module-progress', {
      user_id: payload.userId
    })

    api.data.userGroup = payload.userGroup

    return api
  },

  async setModuleProgressAPI (payload) {
    let api = await axios.post('set-module-progress', {
      user_id: payload.userId,
      current_module: payload.moduleName,
      current_page: payload.currentPage,
      max_page: payload.maxPage
    })

    return api
  },

  async moduleCompleteAPI (payload) {
    let api = await axios.post('module-complete', {
      user_id: payload.user_id,
      current_module: payload.current_module,
      next_module: payload.next_module
    })

    return api
  }
}
