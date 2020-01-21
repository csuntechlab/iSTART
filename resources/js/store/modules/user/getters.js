export default {
  user: state => state.user,
  isDemoModeEnabled: state => state.demoMode,
  correctLoginInfo: state => state.correctLoginInfo,
  isAdminUser: state => state.user.isAdmin,
  loginIsLoading: state => state.loginIsLoading,
  categorizedParticipants: state => state.categorizedParticipants,
  participantsWereSubmitted: state => state.participantsWereSubmitted
}
