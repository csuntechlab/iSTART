import UserAPI from './../../../api/user'
import router from './../../../router'

export default {
  async verifyUserData ({ commit }, payload) {
    return UserAPI.verifyUserDataAPI(payload)
      .then(
        response => {
          if (response.data.valid === '1') {
            let cookieValue = response.data.token
            let cookieExpirationDate = new Date()
            cookieExpirationDate.setMonth(cookieExpirationDate.getMonth() + 1)
            document.cookie = `userKey = ${cookieValue}; expires = ${cookieExpirationDate.toUTCString()};`
            commit('VERIFY_USER_DATA', response.data)

            if (response.data.isAdmin) {
              router.push({ name: 'admin' })
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
    console.log('this is not meant to fully work just yet, everything will be wired up on STR-55. Once it is wired up, the return value will be console logged')
    return UserAPI.verifyExcelSheetAPI(payload)
    .then(
      response => {
        const categorizedPartipants = response.data;
        commit('SET_CATEGORIZED_PARTICIPANTS', categorizedPartipants);
      }
    ).catch(
      failure => console.error(failure)
    )
}
}
