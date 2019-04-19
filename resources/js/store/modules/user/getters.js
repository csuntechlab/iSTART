//LOGIN GETTERS

export default {
  user: state => state.user,
  correctLoginInfo: state => state.correctLoginInfo,
  isAdminUser: state => state.user.isAdmin,
  loginIsLoading: state => state.loginIsLoading,
  categorizedParticipants: state => state.categorizedParticipants,
  participantsWereSubmitted: state => state.participantsWereSubmitted
}
