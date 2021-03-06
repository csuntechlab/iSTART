export default {
  user: state => state.user,
  correctLoginInfo: state => state.correctLoginInfo,
  isAdminUser: state => state.user.isAdmin,
  loginIsLoading: state => state.loginIsLoading,
  wasLoginAFailure: state => state.loginFailed,
  isParticipantsListShown: state => state.isParticipantsListShown,
  categorizedParticipants: state => state.categorizedParticipants,
  isSubmissionButtonEnabled: state => state.isSubmissionButtonEnabled,
  participantsWereSubmitted: state => state.participantsWereSubmitted
}
