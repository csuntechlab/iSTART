import userStore from './../../../resources/js/store/modules/user/index'
import userAPI from './../../../resources/js/api/user'
import 'jest-extended'

jest.mock('./../../../resources/js/api/user')

// VueX Action Testing
describe('userStore/actions/VerifyUserData', () => {
  const userInfo = {
    userCredentials: 'steve@csun.edu'
  }

  const apiResponse = {
    data: {
      user_id: 'studentMember',
      valid: '1',
      token: '123rke4',
      isAdmin: undefined,
      user_group: ''
    }
  }

  it('should commit to VERIFY_USER_DATA mutation when action is called', async () => {
    userAPI.verifyUserDataAPI.mockImplementation(calledWith => {
      return calledWith === userInfo ? Promise.resolve(apiResponse) : Promise.resolve()
    })
    let commit = jest.fn()
    await userStore.actions.verifyUserData({ commit }, userInfo)
    expect(commit).toHaveBeenCalled()
  })

  it('should check for userInfo.isAdmin to be false', async () => {
    apiResponse.data.isAdmin = false
    userAPI.verifyUserDataAPI.mockImplementation(calledWith => {
      return calledWith === userInfo ? Promise.resolve(apiResponse) : Promise.resolve()
    })
    let commit = jest.fn()
    await userStore.actions.verifyUserData({ commit }, userInfo)
    expect(apiResponse.data.isAdmin).toBeFalse()
  })

  it('should respond with isAdmin of true and check for userInfo.isAdmin to be true', async () => {
    apiResponse.data.isAdmin = true
    userAPI.verifyUserDataAPI.mockImplementation(calledWith => {
      return calledWith === userInfo ? Promise.resolve(apiResponse) : Promise.resolve()
    })
    let commit = jest.fn()
    await userStore.actions.verifyUserData({ commit }, userInfo)
    expect(apiResponse.data.isAdmin).toBeTrue()
  })

  it('should respond with isAdmin of true and check for userInfo.isAdmin to be null or undefined', async () => {
    apiResponse.data.isAdmin = null
    userAPI.verifyUserDataAPI.mockImplementation(calledWith => {
      return calledWith === userInfo ? Promise.resolve(apiResponse) : Promise.resolve()
    })
    let commit = jest.fn()
    await userStore.actions.verifyUserData({ commit }, userInfo)
    expect(apiResponse.data.isAdmin).toBeNil()
  })

  it('should respond with null user_group and check for userInfo.user_group to be null or undefined', async () => {
    apiResponse.data.user_group = null
    userAPI.verifyUserDataAPI.mockImplementation(calledWith => {
      return calledWith === userInfo ? Promise.resolve(apiResponse) : Promise.resolve()
    })
    let commit = jest.fn()
    await userStore.actions.verifyUserData({ commit }, userInfo)
    expect(apiResponse.data.user_group).toBeNil()
  })
})

describe('userStore/actions/logout', () => {
  it('should commit to CLEAR_USER_DATA mutation when action is called', () => {
    let commit = jest.fn()
    userStore.actions.clearUserData({ commit })
    expect(commit).toHaveBeenCalledWith('CLEAR_USER_DATA')
  })
})

// VueX Mutation Testing
describe('userStore/mutations/VERIFY_USER_DATA', () => {
  const state = {
    user: {},
    correctLoginInfo: null
  }

  const payload = {
    'user_id': 'studentMember',
    'valid': '1',
    'token': '123rke4',
    'user_group': ''
  }

  it('should set user object with username, password, and correctLoginInfo to true when mutation is called', () => {
    userStore.mutations.VERIFY_USER_DATA(state, payload)
    expect(state).toEqual({
      user: payload,
      correctLoginInfo: true
    })
  })

  it('should set user object group for control when mutation is called', () => {
    payload.user_group = 'control'
    userStore.mutations.VERIFY_USER_DATA(state, payload)
    expect(state.user.user_group).toEqual(payload.user_group)
  })

  it('should set user object group for comparison when mutation is called', () => {
    payload.user_group = 'comparison'
    userStore.mutations.VERIFY_USER_DATA(state, payload)
    expect(state.user.user_group).toEqual(payload.user_group)
  })

  it('should set user object group for intervention when mutation is called', () => {
    payload.user_group = 'intervention'
    userStore.mutations.VERIFY_USER_DATA(state, payload)
    expect(state.user.user_group).toEqual(payload.user_group)
  })

  it('should check user object group for null when mutation is called', () => {
    payload.user_group = null
    userStore.mutations.VERIFY_USER_DATA(state, payload)
    expect(state.user.user_group).toEqual(null)
  })
})

describe('userStore/mutations/CLEAR_USER_DATA', () => {
  it('should clear the user object and nullify correctLoginInfo when mutation is called', () => {
    const state = {
      user: {
        token: '123rke4',
        username: 'csunStudent123'
      },
      correctLoginInfo: true
    }

    userStore.mutations.CLEAR_USER_DATA(state)
    expect(state).toEqual({
      user: {},
      correctLoginInfo: null
    })
  })
})
