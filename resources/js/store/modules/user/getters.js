//LOGIN GETTERS

export default {
  user: state => state.user,
  correctLoginInfo: state => state.correctLoginInfo,
  isAdminUser: state => state.user.isAdmin
}
