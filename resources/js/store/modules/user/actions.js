import UserAPI from './../../../api/user'
import router from './../../../router'

export default {
  setToDevelopmentMode ({ commit }) {
    commit('SET_TO_DEVELOPMENT_MODE', true)
  },

  async verifyUserData ({ commit }, payload) {
    commit('LOGIN_IS_LOADING', true)
    return UserAPI.verifyUserDataAPI(payload)
      .then(
        response => {
          commit('LOGIN_IS_LOADING', false)
          if (response.data.valid === '1') {
            let cookieValue = response.data.token
            let cookieExpirationDate = new Date()
            cookieExpirationDate.setMonth(cookieExpirationDate.getMonth() + 1)
            document.cookie = `userKey = ${cookieValue}; expires = ${cookieExpirationDate.toUTCString()};`
            commit('VERIFY_USER_DATA', response.data)
            if (response.data.isAdmin) {
              router.push({ name: 'Admin' })
            } else {
              router.push({ name: 'Dashboard' })
            }
          } else {
            commit('VERIFY_USER_DATA', response.data)
          }
        })
      .catch(
        failure => console.error(failure)
      )
  },

  clearUserData ({ commit }) {
    document.cookie = 'userKey =; expires = Thu, 01 Jan 1970 00:00:01 GMT;'
    router.push({ name: 'Login' })
    commit('CLEAR_USER_DATA')
  },
  async verifyExcelSheet({commit}, payload) {
    return UserAPI.verifyExcelSheetAPI(payload)
    .then(
      response => {
        const categorizedPartipants = response.data;
        commit('SET_CATEGORIZED_PARTICIPANTS', categorizedPartipants);
      }
    ).catch(
      failure => console.error(failure)
    )
  },
  async submitGoodParticipants({commit}, payload) {
    return UserAPI.submitGoodParticipantsAPI(payload).then(
      response => {
        commit('PARTICIPANTS_WERE_SUBMITTED', true)
      }
    ).catch(
      failure => {
        console.error(failure)
        commit('PARTICIPANTS_WERE_SUBMITTED', false)
      }
    )
  }
}
