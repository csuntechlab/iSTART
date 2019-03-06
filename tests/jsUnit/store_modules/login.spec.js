import userStore from './../../../resources/js/store/modules/user/index'
import userAPI from './../../../resources/js/api/user'
import 'jest-extended'

jest.mock('./../../../resources/js/api/user')

// VueX Action Testing
describe('userStore/actions/VerifyUserData', () => {
  it('should commit to VERIFY_USER_DATA mutation when action is called', async () => {
    const userInfo = {
      userCredentials: 'steve@csun.edu'
    }
    const apiResponse = {
      data: {
        user_id: 'studentMember',
        valid: '1',
        token: '123rke4'
      }
    }

    userAPI.verifyUserDataAPI.mockImplementation(calledWith => {
      return calledWith === userInfo ? Promise.resolve(apiResponse) : Promise.resolve()
    })
    var commit = jest.fn()
    await userStore.actions.verifyUserData({ commit }, userInfo)
    expect(commit).toHaveBeenCalled()
  })
})

// VueX Mutation Testing
describe('userStore/mutations/VERIFY_USER_DATA', () => {
  it('should set user object with username, password, and correctLoginInfo to true when mutation is called', () => {
    const state = {
      user: {},
      correctLoginInfo: null
    }

    const payload = {
      'user_id': 'studentMember',
      'valid': '1',
      'token': '123rke4'
    }

    userStore.mutations.VERIFY_USER_DATA(state, payload)
    expect(state).toEqual({
      user: payload,
      correctLoginInfo: true
    }
    )
  })
})
