import UserAPI from './../../../api/user'
import router from './../../../router'

export default {
  async verifyUserData ({ commit }, payload) {
    return UserAPI.verifyUserDataAPI(payload)
      .then(
        response => {
          if (response.data.valid === '1') {
            var cookieValue = response.data.token
            var cookieExpirationDate = new Date()
            cookieExpirationDate.setMonth(cookieExpirationDate.getMonth() + 1)
            document.cookie = `userKey = ${cookieValue}; expires = ${cookieExpirationDate.toUTCString()};`
            commit('VERIFY_USER_DATA', response.data)
            router.push({ name: 'Dashboard' })

            if (response.data.group !== 'control' || response.data.group !== 'comparison' || response.data.group !== 'intervention') {
              document.cookie = 'userKey =; expires = Thu, 01 Jan 1970 00:00:01 GMT;'
              router.push({ name: 'Login' })
              commit('CLEAR_USER_DATA')
              console.log('NO USER GROUP DEFINED!')
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
  }
}
